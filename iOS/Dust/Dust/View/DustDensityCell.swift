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
    private let maxValueOfBar: CGFloat = 200
    
    func configureCell(with value: Int) {
        if !contentView.subviews.isEmpty {
            removeSubviews()
        }
        setBarWidth(with: value)
        setTextLabel(with: value)
    }
    
    private func setBarWidth(with value: Int) {
        let fillWidth = (CGFloat(value) / maxValueOfBar) * self.frame.size.width
        let rect = CGRect(x: 0, y: 0, width: fillWidth, height: self.frame.size.height)
        let bar = UIView(frame: rect)
        let gradeScope: [ClosedRange<Int>:UIColor] = [0...30:.systemBlue,
                                                      31...80:.systemGreen,
                                                      81...120:.systemOrange,
                                                      121...9999:.systemRed]
        bar.backgroundColor = gradeScope[value]
        self.contentView.addSubview(bar)
    }
    
    private func setTextLabel(with value: Int) {
        self.textLabel?.text = "\(value)"
        self.textLabel?.textAlignment = .right
        self.textLabel?.font = .systemFont(ofSize: 12.0)
    }
    
    private func removeSubviews() {
        self.contentView.subviews.forEach {
            $0.removeFromSuperview()
        }
    }
}
