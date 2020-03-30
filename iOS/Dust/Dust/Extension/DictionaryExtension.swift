//
//  DictionaryExtension.swift
//  Dust
//
//  Created by TTOzzi on 2020/03/30.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import Foundation

extension Dictionary where Key == ClosedRange<Int> {
    subscript(rawValue: Int) -> Value? {
        for key in self.keys {
            if key ~= rawValue {
                return self[key]
            }
        }
        return nil
    }
}
