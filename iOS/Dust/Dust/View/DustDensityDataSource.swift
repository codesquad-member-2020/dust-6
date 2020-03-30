//
//  DustDensityDataSource.swift
//  Dust
//
//  Created by TTOzzi on 2020/03/30.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import UIKit

class DustDensityDataSource: NSObject, UITableViewDataSource {
    private var dustDensityData: [Int] = [5, 26, 52, 81, 120, 75, 151, 205, 120, 81, 75, 31, 10, 18, 9, 25, 33, 50, 63, 20, 181, 144, 77, 111]
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return dustDensityData.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "DustDensityCell", for: indexPath) as! DustDensityCell
        cell.configureCell(with: dustDensityData[indexPath.row])
        return cell
    }
}
