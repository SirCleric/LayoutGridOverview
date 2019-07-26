import 'package:flutter_web/material.dart';

import 'LayoutGrid/layout_grid.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(

      debugShowCheckedModeBanner: false,

      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.deepPurple,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatelessWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  Widget build(BuildContext context) {
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(

      backgroundColor: Colors.deepPurple.shade600,

      appBar: AppBar(
        title: Text(title),
        backgroundColor: Colors.deepPurple.shade800,
        elevation: 0.0,
      ),
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 25),
        child: LayoutGrid(
          isAncestor: true,

          columns: [LayoutFraction(fraction: 1), LayoutPixel(pixels: 400)],
          rows: [
            LayoutPixel(pixels: 100),
            LayoutDependent(line: 1, multiplicator: 1),
            LayoutPixel(pixels: 100),
            LayoutDependent(line: 1, multiplicator: 1),
            LayoutPixel(pixels: 100),
            LayoutDependent(line: 1, multiplicator: 1),
            LayoutPixel(pixels: 100),
            LayoutDependent(line: 1, multiplicator: 1),
          ],

          areas: [["...","..."],
                  ["ThisIs","..."],
                  ["...","..."],
                  ["DivideIt","..."],
                  ["...","..."],
                  ["NameAreas","..."],
                  ["...","..."],
                  ["AssignWidgets","..."]],

          couples: [LayoutGridCouple(widget: ThisIs(),name: "ThisIs",sizeKey: "generic"),],
        ),
      ),
    );
  }
}

class ThisIs extends StatelessWidget {

  final String id = "generic";

  @override
  Widget build(BuildContext context) {

    final InheritedSizeModel sizeModel = InheritedSizeModel.of(context, sizeKey: id);

    return Container(
      width: sizeModel.getWidth(id),
      height: sizeModel.getHeight(id),

      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,

        children: <Widget>[
          Text("This is a basic LayoutGrid", style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 48),),
          Text("Created with a width and height of 400px", style: TextStyle(color: Colors.white, fontWeight: FontWeight.normal, fontSize: 24),)
        ],
      ),
    );
  }
}
