//
//  DataManager.swift
//  Dust
//
//  Created by TTOzzi on 2020/03/31.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import Foundation

class DataManager {
    static let dataLoaded = NSNotification.Name.init("dataLoaded")
    static let loadedIndexData = NSNotification.Name.init("loadedIndexData")
    static let station = "station"
    static let data = "data"
    static let time = "time"
    static let grade = "grade"
    static let value = "value"
    
    private var dustData: DustStatus?
    
    func loadData() {
        guard let dustData = dustData else { return }
        let station = dustData.stationName
        let data = dustData.data.map { (data) -> (Int, Int) in
            (data.pm10Grade, data.pm10Value)
        }
        NotificationCenter.default.post(name: DataManager.dataLoaded, object: nil, userInfo: [DataManager.station:station, DataManager.data:data])
        updateData(with: 0)
    }
    
    func updateData(with index: Int) {
        guard let dustData = dustData else { return }
        let data = dustData.data[index]
        let time = data.dataTime.components(separatedBy: " ")[1]
        let grade = data.pm10Grade
        let value = data.pm10Value
        NotificationCenter.default.post(name: DataManager.loadedIndexData, object: nil, userInfo: [DataManager.time:time, DataManager.grade:grade, DataManager.value:value])
    }
    
    func setDustStatusData(latitude: String, longitude: String) {
        let decoder = JSONDecoder()
        let urlString = "\(NetworkManager.dustStatusUrl)latitude=\(latitude)&longitude=\(longitude)"
        guard let url = URL(string: urlString) else { return }
        NetworkManager.getRequest(url: url) { (data, _, _) in
            guard let data = data else { return }
            do {
                self.dustData = try decoder.decode(DustStatus.self, from: data)
                DispatchQueue.main.async {
                    self.loadData()
                }
            } catch {
                
            }
        }
    }
}
