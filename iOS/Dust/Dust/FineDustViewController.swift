//
//  FineDustViewController.swift
//  Dust
//
//  Created by TTOzzi on 2020/03/30.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import UIKit

class FineDustViewController: UIViewController {
    @IBOutlet weak var statusView: StatusView!
    @IBOutlet weak var statusEmoji: StatusEmoji!
    @IBOutlet weak var statusLabel: StatusLabel!
    @IBOutlet weak var densityLabel: DensityLabel!
    @IBOutlet weak var timeLabel: MeasurementTimeLabel!
    @IBOutlet weak var stationLabel: StationLabel!
    @IBOutlet weak var dustDensityTableView: DustDensityTableView!

    private var dataManager = DataManager()
    private var dustDensityDataSource = DustDensityDataSource()
    private var dustDensityTableViewDelegate = GraphTableViewDelegate()
    private var locationManager = LocationManagerDelegate()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        dustDensityTableViewDelegate.presentingController = self
        locationManager.presentingController = self
        dustDensityTableView.delegate = dustDensityTableViewDelegate
        dustDensityTableView.dataSource = dustDensityDataSource
        addObservers()
    }
}

protocol GraphPresenting {
    func loadData(with index: Int)
}

extension FineDustViewController: GraphPresenting {
    func loadData(with index: Int) {
        dataManager.updateData(with: index)
    }
}

protocol LocationPresenting {
    func locationManagerDidupdate(latitude: String, longitude: String)
    func locationManagerDidFail(with errorMessage: String)
}

extension FineDustViewController: LocationPresenting {
    func locationManagerDidupdate(latitude: String, longitude: String) {
        dataManager.setDustStatusData(latitude: latitude, longitude: longitude)
    }
    
    func locationManagerDidFail(with errorMessage: String) {
        let alert = UIAlertController(title: "위치정보 사용 불가능", message: errorMessage, preferredStyle: .alert)
        let settingsAction = UIAlertAction(title: "설정", style: .default) { (_) -> Void in
            guard let settingsUrl = URL(string: UIApplication.openSettingsURLString) else { return }
            if UIApplication.shared.canOpenURL(settingsUrl) {
                UIApplication.shared.open(settingsUrl, completionHandler: { (success) in })
             }
        }
        let cancelAction = UIAlertAction(title: "닫기", style: .default)
        alert.addAction(settingsAction)
        alert.addAction(cancelAction)
        present(alert, animated: false)
    }
}

extension FineDustViewController {
    private func addObservers() {
        NotificationCenter.default.addObserver(self, selector: #selector(updateStaion(_:)), name: DataManager.dataLoaded, object: nil)
        NotificationCenter.default.addObserver(self, selector: #selector(updateStatusView(_:)), name: DataManager.loadedIndexData, object: nil)
    }
    
    @objc private func updateStaion(_ notification: NSNotification) {
        guard let station = notification.userInfo?[DataManager.station] as? String else { return }
        DispatchQueue.main.async {
            self.stationLabel.setStation(station)
            self.dustDensityTableView.reloadData()
        }
    }
    
    @objc private func updateStatusView(_ notification: NSNotification) {
        guard let time = notification.userInfo?[DataManager.time] as? String,
            let grade = notification.userInfo?[DataManager.grade] as? Int,
            let value = notification.userInfo?[DataManager.value] as? Int
            else { return }
        DispatchQueue.main.async {
            self.timeLabel.setTime(time: time)
            self.statusView.setStatusView(with: grade)
            self.statusEmoji.setEmoji(with: grade)
            self.statusLabel.setStatusLabel(with: grade)
            self.densityLabel.setDensity(with: value)
        }
    }
}
