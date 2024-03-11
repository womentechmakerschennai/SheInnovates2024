// LocationService.js
import * as Location from "expo-location";

export const getLocationPermission = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    throw new Error("Permission to access location was denied");
  }
};

export const getCurrentLocation = async () => {
  await getLocationPermission();
  return await Location.getCurrentPositionAsync({});
};
