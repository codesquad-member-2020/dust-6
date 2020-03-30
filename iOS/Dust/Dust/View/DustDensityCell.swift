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
        if !contentView.subviews.isEmpty {
            removeSubviews()
        }
        let fillWidth = (CGFloat(value) / 200) * self.frame.size.width
        let rect = CGRect(x: 0, y: 0, width: fillWidth, height: self.frame.size.height)
        let bar = UIView(frame: rect)
        self.contentView.addSubview(bar)
        self.textLabel?.text = "\(value)"
        self.textLabel?.textAlignment = .right
        self.textLabel?.font = .systemFont(ofSize: 12.0)
        let gradeScope: [ClosedRange<Int>:UIColor] = [0...30:.systemBlue,
                                                      31...80:.systemGreen,
                                                      81...120:.systemOrange,
                                                      121...9999:.systemRed]
        bar.backgroundColor = gradeScope[value]
    }
    
    func removeSubviews() {
        self.contentView.subviews.forEach {
            $0.removeFromSuperview()
        }
    }
}
