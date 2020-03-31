//
//  DataManager.swift
//  Dust
//
//  Created by TTOzzi on 2020/03/31.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import Foundation

class DataManager {
    var dustData = MockDustStatus()
    
    func reloadData(with index: Int) {
        let data = dustData.data[index]
        let time = data.dataTime.components(separatedBy: " ")[1]
        let grade = data.pm10Grade
        let value = data.pm10Value
        
        NotificationCenter.default.post(name: NSNotification.Name.init("timeChanged"), object: nil, userInfo: ["timeChanged":time])
        NotificationCenter.default.post(name: NSNotification.Name.init("gradeChanged"), object: nil, userInfo: ["gradeChanged":grade])
        NotificationCenter.default.post(name: NSNotification.Name.init("valueChanged"), object: nil, userInfo: ["valueChanged":value])
    }
}
