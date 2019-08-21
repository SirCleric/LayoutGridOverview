import 'package:flutter_web/material.dart';
import 'package:layout_grid_overview/tutorialLayout.dart';

import 'LayoutGrid/layout_grid.dart';
import 'Texts/styles.dart';
import 'Texts/textWidgets.dart';

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

        backgroundColor: Colors.deepPurple.shade800,

        appBar: AppBar(
          title: Text(widget.title, style: TextStyle(color: Colors.white,fontFamily: "ostrich", fontWeight: FontWeight.w700, fontSize: 32),),
          backgroundColor: Colors.deepPurple.shade900,
          elevation: 0.0,
          actions: <Widget>[
            FlatButton(
              color: Colors.yellowAccent,
              child: Text("GitHub",style: TextStyle(color: Colors.black,fontFamily: "ostrich", fontWeight: FontWeight.w700, fontSize: 24,),),
              onPressed: () {

              },
            )
          ],
        ),

        body: TutorialLayout(),
      ),
    );
  }
}