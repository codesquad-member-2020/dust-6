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
        dataManager.loadData()
    }
}

protocol GraphPresenting {
    func loadData(with index: Int)
}

extension FineDustViewController: GraphPresenting {
    func loadData(with index: Int) {
        dataManager.reloadData(with: index)
    }
}

protocol LocationPresenting {
    
}

extension FineDustViewController: LocationPresenting {
    
}

extension FineDustViewController {
    private func addObservers() {
        NotificationCenter.default.addObserver(self, selector: #selector(updateStaion(_:)), name: DataManager.dataLoaded, object: nil)
        NotificationCenter.default.addObserver(self, selector: #selector(updateStatusView(_:)), name: DataManager.loadedIndexData, object: nil)
    }
    
    @objc private func updateStaion(_ notification: NSNotification) {
        guard let station = notification.userInfo?[DataManager.station] as? String else { return }
        stationLabel.setStation(station)
    }
    
    @objc private func updateStatusView(_ notification: NSNotification) {
        guard let time = notification.userInfo?[DataManager.time] as? String,
            let grade = notification.userInfo?[DataManager.grade] as? Int,
            let value = notification.userInfo?[DataManager.value] as? Int
            else { return }
        timeLabel.setTime(time: time)
        statusView.setStatusView(with: grade)
        statusEmoji.setEmoji(with: grade)
        statusLabel.setStatusLabel(with: grade)
        densityLabel.setDensity(with: value)
    }
}
