//
//  PlayButton.swift
//  Dust
//
//  Created by TTOzzi on 2020/04/02.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import UIKit

class PlayButton: UIButton {
    override init(frame: CGRect) {
        super.init(frame: frame)
        setProperties()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setProperties()
    }
    
    func setProperties() {
        self.layer.borderWidth = 0.5
        self.tintColor = .black
    }
}
