//
//  ForecastDataManager.swift
//  Dust
//
//  Created by TTOzzi on 2020/04/02.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import Foundation

class ForecastDataManager {
    private var forecastData: Forecast?
    
    func setDustStatusData() {
        let decoder = JSONDecoder()
        guard let url = URL(string: NetworkManager.forecastUrl) else { return }
        NetworkManager.getRequest(url: url) { (data, _, _) in
            guard let data = data else { return }
            do {
                self.forecastData = try decoder.decode(Forecast.self, from: data)
            } catch {
                
            }
        }
    }
}
