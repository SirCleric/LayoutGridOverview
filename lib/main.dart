import 'package:flutter_web/material.dart';
import 'package:layout_grid_overview/colors.dart';
import 'package:layout_grid_overview/mainLayout.dart';

import 'LayoutGrid/layout_grid.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(

      debugShowCheckedModeBanner: false,
      title: 'Layout grid overview',

      theme: ThemeData(
        primarySwatch: Colors.deepPurple,
      ),
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

        backgroundColor: MyColors.lightGrey,

        appBar: AppBar(
          backgroundColor: MyColors.secondHandGrey,          
          elevation: 2,

          title: Text(
            "Layout Grid",
            style: TextStyle(
              color: MyColors.whitish,
              fontWeight: FontWeight.normal,
              fontSize: 32,
            ),
          ),

          actions: <Widget>[
            ActionWidget(textData: "Home",),
            ActionWidget(textData: "Credentials",),
            ActionWidget(textData: "Reasons",),
          ],
        ),

        body: MainLayout(),
      ),
    );
  }
}

class ActionWidget extends StatelessWidget {
  ActionWidget({Key key,@required this.textData}) : super(key: key);

  String textData;

  @override
  Widget build(BuildContext context) {
    return Container(

      margin: EdgeInsets.symmetric(horizontal: 24.0),

      alignment: Alignment(0.0, 0.0),

      child: Text(
        textData,
        style: TextStyle(
          color: MyColors.whitish,
          fontWeight: FontWeight.normal,
          fontSize: 24,
        ),
      ),
    );
  }
}