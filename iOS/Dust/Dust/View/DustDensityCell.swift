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
    
    func configureCell(value: Int, grade: Int) {
        if !contentView.subviews.isEmpty {
            removeSubviews()
        }
        setBar(value: value, grade: grade)
        setTextLabel(with: value)
    }
    
    private func setBar(value: Int, grade: Int) {
        let fillWidth = (CGFloat(value) / maxValueOfBar) * self.frame.size.width
        let rect = CGRect(x: 0, y: 0, width: fillWidth, height: self.frame.size.height)
        let bar = UIView(frame: rect)
        let gradeScope: [Int:UIColor] = [1:.systemBlue,
                                                      2:.systemGreen,
                                                      3:.systemOrange,
                                                      4:.systemRed]
        bar.backgroundColor = gradeScope[grade]
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
