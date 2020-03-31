//
//  CAGradientLayerExtension.swift
//  Dust
//
//  Created by TTOzzi on 2020/03/30.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import UIKit

extension CAGradientLayer {
    var goodState: CAGradientLayer {
        self.colors = [UIColor.systemBlue.cgColor, UIColor.white.cgColor]
        return self
    }
    var normalState: CAGradientLayer {
        self.colors = [UIColor.systemGreen.cgColor, UIColor.white.cgColor]
        return self
    }
    var badState: CAGradientLayer {
        self.colors = [UIColor.systemOrange.cgColor, UIColor.white.cgColor]
        return self
    }
    var worstState: CAGradientLayer {
        self.colors = [UIColor.systemRed.cgColor, UIColor.white.cgColor]
        return self
    }
}
