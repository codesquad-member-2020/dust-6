//
//  DataManager.swift
//  Dust
//
//  Created by TTOzzi on 2020/03/31.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import Foundation

class DataManager {
    static let stationLoaded = NSNotification.Name.init("stationLoaded")
    static let timeChanged = NSNotification.Name.init("timeChanged")
    static let gradeChanged = NSNotification.Name.init("gradeChanged")
    static let valueChanged = NSNotification.Name.init("valueChanged")
    
    private var dustData = MockDustStatus()
    
    func loadStation() {
        let station = dustData.stationName
        NotificationCenter.default.post(name: DataManager.stationLoaded, object: nil, userInfo: [DataManager.stationLoaded:station])
    }
    
    func reloadData(with index: Int) {
        let data = dustData.data[index]
        let time = data.dataTime.components(separatedBy: " ")[1]
        let grade = data.pm10Grade
        let value = data.pm10Value
        NotificationCenter.default.post(name: DataManager.timeChanged, object: nil, userInfo: [DataManager.timeChanged:time])
        NotificationCenter.default.post(name: DataManager.gradeChanged, object: nil, userInfo: [DataManager.gradeChanged:grade])
        NotificationCenter.default.post(name: DataManager.valueChanged, object: nil, userInfo: [DataManager.valueChanged:value])
    }
}
