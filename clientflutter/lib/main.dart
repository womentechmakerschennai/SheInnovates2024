import 'package:clientflutter/Screens/addReport.dart';
import 'package:clientflutter/Screens/map.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: AddReport(),
    );
  }
}
