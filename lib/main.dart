import 'package:flutter/material.dart';
import 'package:layout_grid_overview/mainLayout.dart';

import 'package:layout_grid/layout_grid.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(

      debugShowCheckedModeBanner: false,
      title: 'Layout grid overview',

      home: InheritedLayoutModel(child: MyHomePage(title: 'Layout grid overview')),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  @override
  Widget build(BuildContext context) {

    return Container(
      child: Scaffold(

        backgroundColor: Colors.white,

        body: MainLayout(),
      ),
    );
  }
}
