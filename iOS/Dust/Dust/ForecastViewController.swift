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
    @IBOutlet weak var forecastImage: UIImageView!
    
    private var dataManager = ForecastDataManager()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        dataManager.setDustStatusData()
        NotificationCenter.default.addObserver(self, selector: #selector(updateViews(_:)), name: ForecastDataManager.dataDidLoad, object: nil)
        NotificationCenter.default.addObserver(self, selector: #selector(updateForecastImage(_:)), name: ForecastDataManager.imageDidLoad, object: nil)
    }
    
    @objc private func updateViews(_ notification: NSNotification) {
        guard let overall = notification.userInfo?[ForecastDataManager.overall] as? String,
            let grade = notification.userInfo?[ForecastDataManager.grade] as? String else { return }
        DispatchQueue.main.async {
            self.updateOverall(overall)
            self.updateGrade(grade)
        }
    }
    
    @objc private func updateForecastImage(_ notification: NSNotification) {
        guard let data = notification.userInfo?[ForecastDataManager.image] as? Data else { return }
        DispatchQueue.main.async {
            self.forecastImage.image = UIImage(data: data)
        }
    }
    
    private func updateOverall(_ information: String) {
        forecastOverall.text = information
    }
    
    private func updateGrade(_ information: String) {
        forecastGrade.text = information
    }
}

