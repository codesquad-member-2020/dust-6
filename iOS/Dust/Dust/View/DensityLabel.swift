//
//  DensityLabel.swift
//  Dust
//
//  Created by TTOzzi on 2020/03/30.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import UIKit

class DensityLabel: UILabel {
    private var density = 0
    private var output: String {
        return "\(density) 𝜇g/m³"
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }
    
    func setDensity(with value: Int) {
        density = value
        self.text = output
    }
}
