/*
This file is related to all location based api calls
*/

import * as Location from 'expo-location';
import {LOCATION_DELTA } from '../constants/constants';

export async function getDeviceCurrentLocation(){
    let locationData = await Location.getCurrentPositionAsync({});
    // console.log("Device Location:"+JSON.stringify(locationData));
    let location= {latitude: locationData.coords.latitude,
                    longitude: locationData.coords.longitude,
                    latitudeDelta: LOCATION_DELTA.latitudeDelta,
                    longitudeDelta: LOCATION_DELTA.longitudeDelta};
    // console.log("location for marker: "+ JSON.stringify(location));
    return location;
};
