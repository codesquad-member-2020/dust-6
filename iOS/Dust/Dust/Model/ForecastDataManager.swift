//
//  ForecastDataManager.swift
//  Dust
//
//  Created by TTOzzi on 2020/04/02.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import Foundation

class ForecastDataManager {
    static let dataDidLoad = Notification.Name.init("dataDidLoad")
    static let imageDidLoad = NSNotification.Name(rawValue: "image")
    static let overall = "overall"
    static let grade = "grade"
    static let image = "image"
    
    private var forecastData: Forecast.Information?
    
    func dataDidLoad() {
        guard let data = forecastData else { return }
        NotificationCenter.default.post(name: ForecastDataManager.dataDidLoad, object: nil, userInfo: [ForecastDataManager.overall: data.informOverall, ForecastDataManager.grade: data.informGrade])
        data.imageUrls.forEach {
            NetworkManager.loadDataFrom(url: $0) { (data, _, _) in
                guard let data = data else { return }
                NotificationCenter.default.post(name: ForecastDataManager.imageDidLoad, object: nil, userInfo: [ForecastDataManager.image: data])
                sleep(2)
            }
        }
    }
    
    func setDustStatusData() {
        let decoder = JSONDecoder()
        guard let url = URL(string: NetworkManager.forecastUrl) else { return }
        NetworkManager.getRequest(url: url) { (data, _, _) in
            guard let data = data else { return }
            do {
                let loadedData = try decoder.decode(Forecast.self, from: data)
                self.forecastData = loadedData.data
                self.dataDidLoad()
            } catch {
                
            }
        }
    }
}
