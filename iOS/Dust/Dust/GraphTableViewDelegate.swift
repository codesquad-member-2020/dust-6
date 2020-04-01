//
//  GraphTableViewDelegate.swift
//  Dust
//
//  Created by TTOzzi on 2020/04/01.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import UIKit

class GraphTableViewDelegate: NSObject, UITableViewDelegate {
    var presentingController: GraphPresenting?
    
    func scrollViewDidScroll(_ scrollView: UIScrollView) {
        guard let tableView = scrollView as? UITableView else { return }
        guard let index = tableView.indexPathsForVisibleRows?.first else { return }
        presentingController?.loadData(with: index.row)
    }
}
