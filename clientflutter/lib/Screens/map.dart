import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

class MapScreen extends StatefulWidget {
  const MapScreen({super.key});

  @override
  State<MapScreen> createState() => _MapScreenState();
}

class _MapScreenState extends State<MapScreen> {
  static const LatLng _pGooglePlex = LatLng(12.9848431, 80.2462595);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("SheGaurd"),
      ),
      body: const GoogleMap(
          initialCameraPosition:
              CameraPosition(target: _pGooglePlex, zoom: 15)),
    );
  }
}
