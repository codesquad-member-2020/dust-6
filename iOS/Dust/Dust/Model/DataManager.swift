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
    
    private var dustData = MockDustStatus()
    
    func loadData() {
        let station = dustData.stationName
        let data = dustData.data.map { (data) -> (Int, Int) in
            (data.pm10Grade, data.pm10Value)
        }
        NotificationCenter.default.post(name: DataManager.dataLoaded, object: nil, userInfo: [DataManager.station:station, DataManager.data:data])
        reloadData(with: 0)
    }
    
    func reloadData(with index: Int) {
        let data = dustData.data[index]
        let time = data.dataTime.components(separatedBy: " ")[1]
        let grade = data.pm10Grade
        let value = data.pm10Value
        NotificationCenter.default.post(name: DataManager.loadedIndexData, object: nil, userInfo: [DataManager.time:time, DataManager.grade:grade, DataManager.value:value])
    }
}
