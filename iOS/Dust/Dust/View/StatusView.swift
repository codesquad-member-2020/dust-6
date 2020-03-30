//
//  StatusView.swift
//  Dust
//
//  Created by TTOzzi on 2020/03/30.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import UIKit

class StatusView: UIView {
    private var gradientLayer: CAGradientLayer {
        let layer = CAGradientLayer()
        layer.frame = self.bounds
        return layer
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
        self.layer.insertSublayer(self.gradientLayer.goodState, at: 0)
    }
}
