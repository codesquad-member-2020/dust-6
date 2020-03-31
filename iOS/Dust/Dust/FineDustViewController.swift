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
    
    override func viewDidLoad() {
        super.viewDidLoad()
        dustDensityTableView.delegate = self
        addObservers()
        loadData()
    }
    
    private func loadData() {
        dataManager.loadStation()
        dataManager.reloadData(with: 0)
    }
}

extension FineDustViewController: UITableViewDelegate {
    func scrollViewDidScroll(_ scrollView: UIScrollView) {
        guard let index = dustDensityTableView.indexPathsForVisibleRows?.first else { return }
        dataManager.reloadData(with: index.row)
    }
}

extension FineDustViewController {
    private func addObservers() {
        NotificationCenter.default.addObserver(self, selector: #selector(updateTimeLabel(_:)), name: DataManager.timeChanged, object: nil)
        NotificationCenter.default.addObserver(self, selector: #selector(gradeDidChanged(_:)), name: DataManager.gradeChanged, object: nil)
        NotificationCenter.default.addObserver(self, selector: #selector(valueDidChanged(_:)), name: DataManager.valueChanged, object: nil)
        NotificationCenter.default.addObserver(self, selector: #selector(updateStaion(_:)), name: DataManager.stationLoaded, object: nil)
    }
    
    @objc private func updateStaion(_ notification: NSNotification) {
        guard let station = notification.userInfo?[DataManager.stationLoaded] as? String else { return }
        stationLabel.setStation(station)
    }
    
    @objc private func updateTimeLabel(_ notification: NSNotification) {
        guard let time = notification.userInfo?[DataManager.timeChanged] as? String else { return }
        timeLabel.setTime(time: time)
    }
    
    @objc private func gradeDidChanged(_ notification: NSNotification) {
        guard let grade = notification.userInfo?[DataManager.gradeChanged] as? Int else { return }
        statusView.setStatusView(with: grade)
        statusEmoji.setEmoji(with: grade)
        statusLabel.setStatusLabel(with: grade)
    }
    
    @objc private func valueDidChanged(_ notification: NSNotification) {
        guard let value = notification.userInfo?[DataManager.valueChanged] as? Int else { return }
        densityLabel.setDensity(with: value)
    }
}
