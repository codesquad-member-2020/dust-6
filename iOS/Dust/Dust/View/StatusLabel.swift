//
//  StatusLabel.swift
//  Dust
//
//  Created by TTOzzi on 2020/03/30.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import UIKit

class StatusLabel: UILabel {
    enum State: String {
        case good = "좋음"
        case normal = "보통"
        case bad = "나쁨"
        case worst = "매우나쁨"
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setProperties()
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setProperties()
    }
    
    func setProperties() {
        self.text = State.good.rawValue
    }
}
