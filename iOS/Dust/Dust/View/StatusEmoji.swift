//
//  StatusEmoji.swift
//  Dust
//
//  Created by TTOzzi on 2020/03/30.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import UIKit

class StatusEmoji: UILabel {
    enum State: String {
        case good = "😀"
        case normal = "🙂"
        case bad = "😷"
        case worst = "😱"
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setProperties()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setProperties()
    }
    
    private func setProperties() {
        self.text = State.good.rawValue
    }
}
