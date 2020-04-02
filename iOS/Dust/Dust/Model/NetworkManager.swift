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
    static let serverUrl = "https://codesquad-dust6.herokuapp.com/"
    static var dustStatusUrl: String {
        return serverUrl + "api/dust-status/location?"
    }
    
    static func getRequest(url: URL, completionHandler: @escaping (Data?, URLResponse?, Error?) -> ()) {
        var request = URLRequest(url: url)
        request.httpMethod = "GET"
        session.dataTask(with: request, completionHandler: completionHandler).resume()
    }
}
