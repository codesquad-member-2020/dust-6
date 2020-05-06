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
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }
    
    func setEmoji(with grade: Int) {
        let emojiGrading: [Int: String] = [1: State.good.rawValue,
                                           2: State.normal.rawValue,
                                           3: State.bad.rawValue,
                                           4: State.worst.rawValue]
        self.text = emojiGrading[grade]
    }
}
