//
//  ForecastDataManager.swift
//  Dust
//
//  Created by TTOzzi on 2020/04/02.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import Foundation

class ForecastDataManager {
    static let dataDidload = Notification.Name.init("dataDidLoad")
    static let overall = "overall"
    static let grade = "grade"
    
    private var forecastData: Forecast.Information?
    
    func dataDidLoad() {
        guard let data = forecastData else { return }
        NotificationCenter.default.post(name: ForecastDataManager.dataDidload, object: nil, userInfo: [ForecastDataManager.overall: data.informOverall, ForecastDataManager.grade: data.informGrade])
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
