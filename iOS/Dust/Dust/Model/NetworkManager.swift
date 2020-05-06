//
//  NetworkManager.swift
//  Dust
//
//  Created by TTOzzi on 2020/04/02.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import Foundation

class NetworkManager {
    static let session: URLSession = URLSession.shared
    static let serverUrl = "http://34.236.160.204:8080/"
    static var dustStatusUrl: String {
        return serverUrl + "api/dust-status/location?"
    }
    static var forecastUrl: String {
        return serverUrl + "api/dust/forecast"
    }
    
    static func getRequest(url: URL, completionHandler: @escaping (Data?, URLResponse?, Error?) -> ()) {
        var request = URLRequest(url: url)
        request.httpMethod = "GET"
        session.dataTask(with: request, completionHandler: completionHandler).resume()
    }
    
    static func loadDataFrom(url: URL, completionHandler: @escaping (Data?, URLResponse?, Error?) -> ()) {
        session.dataTask(with: url, completionHandler: completionHandler).resume()
    }
}
