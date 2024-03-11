// ignore_for_file: prefer_const_constructors, library_private_types_in_public_api
import 'dart:io';
import 'dart:convert';
import 'package:clientflutter/Screens/map.dart';
import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:http/http.dart' as http;

String url = "http://10.15.1.230:5000";

class AddReport extends StatefulWidget {
  const AddReport({super.key});

  @override
  _AddReportState createState() => _AddReportState();
}

class _AddReportState extends State<AddReport> {
  final TextEditingController _crimeController = TextEditingController();
  Future<Position>? _locationFuture;
  Future<void> _submitReport(BuildContext context) async {
    try {
      Position location = await _locationFuture!;
      String crimeType = _crimeController.text;
      await Future.delayed(Duration(seconds: 3));
      String locationString = '${location.latitude},${location.longitude}';

      // Create a map with the data to be sent in the POST request
      Map<String, dynamic> requestBody = {
        'location': locationString,
        'crime': crimeType,
        'description': "its crime there"
      };
      final response = await http.post(
        Uri.parse('${url}/reports'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode(requestBody),
      );

      if (response.statusCode == 200 || response.statusCode == 201) {
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => MapScreen()),
        );
      } else {
        print('Failed to submit report. Status code: ${response.statusCode}');
      }
    } catch (e) {
      print('Error: $e');
    }
  }

  @override
  void initState() {
    super.initState();
    _locationFuture = _determinePosition();
  }

  Future<Position> _determinePosition() async {
    bool serviceEnabled;
    LocationPermission permission;
    serviceEnabled = await Geolocator.isLocationServiceEnabled();
    if (!serviceEnabled) {
      throw Exception('Location services are disabled.');
    }

    permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
      if (permission == LocationPermission.denied) {
        throw Exception('Location permissions are denied');
      }
    }

    if (permission == LocationPermission.deniedForever) {
      throw Exception(
          'Location permissions are permanently denied, we cannot request permissions.');
    }
    return await Geolocator.getCurrentPosition();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Crime Report'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            FutureBuilder<Position>(
                future: _locationFuture,
                builder: (context, snapshot) {
                  if (snapshot.hasData) {
                    return TextFormField(
                      initialValue: snapshot.hasData
                          ? 'Lat: ${snapshot.data?.latitude}, Lon: ${snapshot.data?.longitude}'
                          : 'Fetching location details...',
                      decoration: InputDecoration(
                        labelText: 'Location',
                        prefixIcon: Icon(Icons.location_pin),
                      ),
                      readOnly: true,
                    );
                  } else {
                    return Text('Fetching');
                  }
                }),
            SizedBox(height: 16.0),
            TextFormField(
              controller: _crimeController,
              decoration: InputDecoration(
                labelText: 'Crime',
                hintText: 'Enter type of crime',
                prefixIcon: Icon(Icons.security),
              ),
            ),
            SizedBox(height: 16.0),
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                foregroundColor: Colors.blue,
                backgroundColor: Colors.white,
                padding: EdgeInsets.symmetric(vertical: 16.0),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8.0),
                ),
              ),
              onPressed: () {
                _submitReport(context);
              },
              child: Text('Submit'),
            ),
          ],
        ),
      ),
    );
  }
}
