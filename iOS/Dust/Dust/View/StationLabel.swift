//
//  StationLabel.swift
//  Dust
//
//  Created by TTOzzi on 2020/03/30.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import UIKit

class StationLabel: UILabel {
    private let fontSize: CGFloat = 15
    private var station = "강남구"
    private var output: String {
        return "\(station) 측정소 기준"
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }
    
    private func setProperties() {
        let attributedString = NSMutableAttributedString(string: output)
        attributedString.addAttribute(.font, value: UIFont.boldSystemFont(ofSize: fontSize), range: (output as NSString).range(of: station))
        self.attributedText = attributedString
    }
    
    func setStation(_ loadedStation: String) {
        station = loadedStation
        setProperties()
    }
}
