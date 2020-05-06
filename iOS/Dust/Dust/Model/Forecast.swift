//
//  Forecast.swift
//  Dust
//
//  Created by TTOzzi on 2020/04/02.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import Foundation

struct Forecast: Codable {
    var data: Information
    
    struct Information: Codable {
        var imageUrls: [URL]
        var informOverall: String
        var informGrade: String
    }
}
