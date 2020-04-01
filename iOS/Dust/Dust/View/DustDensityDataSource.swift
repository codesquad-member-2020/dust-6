//
//  DustDensityDataSource.swift
//  Dust
//
//  Created by TTOzzi on 2020/03/30.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import UIKit

class DustDensityDataSource: NSObject, UITableViewDataSource {
    private var data: [(Int, Int)]?
    
    override init() {
        super.init()
        addObservers()
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return data?.count ?? 0
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "DustDensityCell", for: indexPath) as! DustDensityCell
        cell.configureCell(with: data?[indexPath.row].1 ?? 0)
        return cell
    }
}

extension DustDensityDataSource {
    private func addObservers() {
        NotificationCenter.default.addObserver(self, selector: #selector(dataLoaded(_:)), name: DataManager.dataLoaded, object: nil)
    }
    
    @objc private func dataLoaded(_ notification: NSNotification) {
        guard let data = notification.userInfo?[DataManager.data] as? [(Int, Int)] else { return }
        self.data = data
    }
}
