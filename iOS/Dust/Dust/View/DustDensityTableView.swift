//
//  DustDensityTableView.swift
//  Dust
//
//  Created by TTOzzi on 2020/03/30.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import UIKit

class DustDensityTableView: UITableView {
    private var dustDensityData: DustDensityDataSource!
    
    override init(frame: CGRect, style: UITableView.Style) {
        super.init(frame: frame, style: style)
        dustDensityData = DustDensityDataSource()
        self.dataSource = dustDensityData
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        dustDensityData = DustDensityDataSource()
        self.dataSource = dustDensityData
    }
}
