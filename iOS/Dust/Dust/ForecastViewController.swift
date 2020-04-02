//
//  ForecastViewController.swift
//  Dust
//
//  Created by TTOzzi on 2020/03/30.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import UIKit

class ForecastViewController: UIViewController {
    @IBOutlet weak var forecastOverall: UILabel!
    @IBOutlet weak var forecastGrade: UILabel!
    
    private var dataManager = ForecastDataManager()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        dataManager.setDustStatusData()
        NotificationCenter.default.addObserver(self, selector: #selector(updateViews(_:)), name: ForecastDataManager.dataDidload, object: nil)
    }
    
    @objc private func updateViews(_ notification: NSNotification) {
        guard let overall = notification.userInfo?[ForecastDataManager.overall] as? String,
            let grade = notification.userInfo?[ForecastDataManager.grade] as? String else { return }
        DispatchQueue.main.async {
            self.updateOverall(overall)
            self.updateGrade(grade)
        }
    }
    
    private func updateOverall(_ information: String) {
        forecastOverall.text = information
    }
    
    private func updateGrade(_ information: String) {
        forecastGrade.text = information
    }
}

