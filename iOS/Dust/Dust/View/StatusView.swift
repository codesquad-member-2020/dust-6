//
//  StatusView.swift
//  Dust
//
//  Created by TTOzzi on 2020/03/30.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import UIKit

class StatusView: UIView {
    private var gradientLayer = CAGradientLayer()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setProperties()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setProperties()
    }
    
    private func setProperties() {
        gradientLayer.frame = self.bounds
    }
    
    func setStatusView(with grade: Int) {
        let colorGrading: [Int: [CGColor]] = [1: [UIColor.systemBlue.cgColor, UIColor.white.cgColor],
                                              2: [UIColor.systemGreen.cgColor, UIColor.white.cgColor],
                                              3: [UIColor.systemOrange.cgColor, UIColor.white.cgColor],
                                              4: [UIColor.systemRed.cgColor, UIColor.white.cgColor]]
        guard let color = colorGrading[grade] else { return }
        gradientLayer.colors = color
        self.layer.insertSublayer(gradientLayer, at: 0)
    }
}
