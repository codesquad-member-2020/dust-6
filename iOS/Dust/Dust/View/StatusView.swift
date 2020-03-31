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
    
    private func setProperties() {
        self.layer.insertSublayer(gradientLayer.goodState, at: 0)
    }
    
    func setStatusView(with grade: Int) {
        self.layer.sublayers?.removeFirst()
        let layerGrading: [Int: CAGradientLayer] = [1: gradientLayer.goodState,
                                                    2: gradientLayer.normalState,
                                                    3: gradientLayer.badState,
                                                    4: gradientLayer.worstState]
        guard let layer = layerGrading[grade] else { return }
        self.layer.insertSublayer(layer, at: 0)
    }
}
