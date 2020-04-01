//
//  DustStatus.swift
//  Dust
//
//  Created by TTOzzi on 2020/03/31.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import Foundation

struct DustStatus {
    var stationName: String
    var data: [DustData]
    
    struct DustData {
        var dataTime: String
        var pm10Value: String
        var pm10Grade: String
    }
}

struct MockDustStatus {
    var stationName: String
    var data: [DustData]
    
    struct DustData {
        var dataTime: String
        var pm10Value: Int
        var pm10Grade: Int
    }
    
    init() {
        self.stationName = "강남구"
        self.data = [DustData(dataTime: "2020-03-30 00:00", pm10Value: 5, pm10Grade: 1),
        DustData(dataTime: "2020-03-30 01:00", pm10Value: 26, pm10Grade: 1),
        DustData(dataTime: "2020-03-30 02:00", pm10Value: 52, pm10Grade: 2),
        DustData(dataTime: "2020-03-30 03:00", pm10Value: 81, pm10Grade: 3),
        DustData(dataTime: "2020-03-30 04:00", pm10Value: 120, pm10Grade: 3),
        DustData(dataTime: "2020-03-30 05:00", pm10Value: 75, pm10Grade: 2),
        DustData(dataTime: "2020-03-30 06:00", pm10Value: 151, pm10Grade: 4),
        DustData(dataTime: "2020-03-30 07:00", pm10Value: 205, pm10Grade: 4),
        DustData(dataTime: "2020-03-30 08:00", pm10Value: 120, pm10Grade: 3),
        DustData(dataTime: "2020-03-30 09:00", pm10Value: 81, pm10Grade: 3),
        DustData(dataTime: "2020-03-30 10:00", pm10Value: 75, pm10Grade: 2),
        DustData(dataTime: "2020-03-30 11:00", pm10Value: 31, pm10Grade: 2),
        DustData(dataTime: "2020-03-30 12:00", pm10Value: 10, pm10Grade: 1),
        DustData(dataTime: "2020-03-30 13:00", pm10Value: 18, pm10Grade: 1),
        DustData(dataTime: "2020-03-30 14:00", pm10Value: 9, pm10Grade: 1),
        DustData(dataTime: "2020-03-30 15:00", pm10Value: 25, pm10Grade: 1),
        DustData(dataTime: "2020-03-30 16:00", pm10Value: 33, pm10Grade: 2),
        DustData(dataTime: "2020-03-30 17:00", pm10Value: 50, pm10Grade: 2),
        DustData(dataTime: "2020-03-30 18:00", pm10Value: 63, pm10Grade: 2),
        DustData(dataTime: "2020-03-30 19:00", pm10Value: 20, pm10Grade: 1),
        DustData(dataTime: "2020-03-30 20:00", pm10Value: 181, pm10Grade: 4),
        DustData(dataTime: "2020-03-30 21:00", pm10Value: 144, pm10Grade: 4),
        DustData(dataTime: "2020-03-30 22:00", pm10Value: 77, pm10Grade: 2),
        DustData(dataTime: "2020-03-30 23:00", pm10Value: 111, pm10Grade: 3)]
    }
}
