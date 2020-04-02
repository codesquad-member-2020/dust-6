//
//  LocationManagerDelegate.swift
//  Dust
//
//  Created by TTOzzi on 2020/04/02.
//  Copyright © 2020 TTOzzi. All rights reserved.
//

import Foundation
import CoreLocation

class LocationManagerDelegate: NSObject, CLLocationManagerDelegate {
    var presentingController: LocationPresenting?
    private var manager = CLLocationManager()
    
    override init() {
        super.init()
        manager.delegate = self
        manager.requestWhenInUseAuthorization()
        manager.desiredAccuracy = kCLLocationAccuracyNearestTenMeters
        manager.requestLocation()
    }
    
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        guard let coordinate = manager.location?.coordinate else { return }
        presentingController?.locationManagerDidupdate(latitude: "\(coordinate.latitude)", longitude: "\(coordinate.longitude)")
    }
    
    func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
        guard let error = CLError.Code(rawValue: (error as NSError).code) else { return }
        switch error {
        case .locationUnknown:
            presentingController?.locationManagerDidFail(with: "위치를 알 수 없습니다.")
        case .denied:
            presentingController?.locationManagerDidFail(with: "위치정보 사용이 거부되었습니다. \n설정에서 위치정보를 활성화해주세요.")
        default:
            presentingController?.locationManagerDidFail(with: "알 수 없는 오류로 위치정보를 가져오지 못했습니다.")
        }
    }
}

