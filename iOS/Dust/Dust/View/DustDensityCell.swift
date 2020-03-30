//
//  DustDensityCell.swift
//  Dust
//
//  Created by TTOzzi on 2020/03/30.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import UIKit

class DustDensityCell: UITableViewCell {
    static let identifier = "DustDensityCell"
    
    func setBarWidth(with value: Int) {
        let fillWidth = (CGFloat(value) / 200) * self.frame.size.width
        let rect = CGRect(x: 0, y: 0, width: fillWidth, height: self.frame.size.height)
        let bar = UIView(frame: rect)
        bar.backgroundColor = .red
        self.contentView.addSubview(bar)
        self.textLabel?.text = "\(value)"
        self.textLabel?.textAlignment = .right
        self.textLabel?.font = .systemFont(ofSize: 12.0)
    }
}
