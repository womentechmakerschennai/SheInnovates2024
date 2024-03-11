// App.js
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";
import { getCurrentLocation } from "./LocationService";
import axios from "axios";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { getLocationPermission } from "./LocationService";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [username, setUsername] = useState("");

  const [locationData, setLocationData] = useState({
    latitude: null,
    longitude: null,
  });
  const circleRadius = 500;

  // const geofences = [
  //   { id: 1, name: 'Geofence1', latitude: 37.78925, longitude: -122.4324, radius: 500 },
  //   { id: 2, name: 'Geofence2', latitude: 37.7759, longitude: -122.4194, radius: 700 },
  // ];

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const currentLocation = await getLocationPermission();
        const xy = await getCurrentLocation();
        // Update the state with the current coordinates
        setLocationData({
          latitude: xy.coords.latitude,
          longitude: xy.coords.longitude,
        });
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    fetchLocation();
  }, []);
  const storeLocationData = async () => {
    try {
      const userData = { ...locationData, username };

      // Replace 'http://localhost:3000' with your actual server URL
      const apiUrl = "http://10.15.1.195:3000/api/locations";

      const response = await axios.post(apiUrl, userData);
      console.log("Location data stored successfully:", response.data);
    } catch (error) {
      console.error("Error storing location data:", error);
    }
  };
  useEffect(() => {
    (async () => {
      try {
        const location = await getCurrentLocation();
        setLocation(location);
      } catch (error) {
        setErrorMsg(error.message);
      }
      storeLocationData();
    })();
  }, []);

  // function checkGeofences(user) {
  //   geofences.forEach(geofence => {
  //     const distance = calculateDistance(xy.coords.latitude, xy.coords.longitude, geofence.latitude, geofence.longitude);
  //     if (distance <= geofence.radius) {
  //       sendNotification(user, `Entered ${geofence.name}`);
  //     }
  //   });
  // }
  // setInterval(() => {
  //   users.forEach(user => {
  //     checkGeofences(user);
  //   });
  // }, 30000);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {errorMsg ? (
          <Text>{errorMsg}</Text>
        ) : location ? (
          <MapView
            style={styles.map}
            region={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title="Current Location"
            />
            <Circle
              center={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              radius={circleRadius}
              fillColor="rgba(100, 0, 255, 0.3)" // Adjust the color and opacity as needed
              strokeColor="rgba(100, 100, 255, 0.8)"
              strokeWidth={2}
            />
          </MapView>
        ) : (
          <Text>Loading location...</Text>
        )}
        <Text>Enter your username:</Text>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Button title="Submit" onPress={storeLocationData} />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    flex: 1,
    width: "100%",
    borderRadius: 50,
  },
});
