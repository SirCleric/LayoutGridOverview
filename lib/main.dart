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

      backgroundColor: Colors.deepPurple.shade800,

      appBar: AppBar(
        title: Text(title, style: TextStyle(color: Colors.white,fontFamily: "ostrich", fontWeight: FontWeight.w700, fontSize: 32),),
        backgroundColor: Colors.deepPurple.shade900,
        elevation: 0.0,
      ),
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 50),
        
        child: LayoutGrid(
          isAncestor: true,

          columns: [LayoutMinMax(minUnit: LayoutPixel(pixels: 350), maxUnit: LayoutFraction(fraction: 1)),
                    LayoutMinMax(minUnit: LayoutPixel(pixels: 200), maxUnit: LayoutPixel(pixels: 400))],

          rows: [
            LayoutPixel(pixels: 100),
            LayoutDependent(line: 2, multiplicator: 1),
            LayoutPixel(pixels: 100),
            LayoutDependent(line: 1, multiplicator: 1),
            LayoutPixel(pixels: 100),
            LayoutDependent(line: 1, multiplicator: 1),
            LayoutPixel(pixels: 100),
            LayoutDependent(line: 1, multiplicator: 1),
          ],

          areas: [["...","..."],
                  ["ThisIs","NestedLayoutGrid"],
                  ["...","..."],
                  ["DivideIt","..."],
                  ["...","..."],
                  ["NameAreas","..."],
                  ["...","..."],
                  ["AssignWidgets","..."]],

          couples: [LayoutGridCouple(widget: ThisIs(),name: "ThisIs",sizeKey: "generic"),
                    LayoutGridCouple(widget: ExampleOfLayoutGrid(),name: "NestedLayoutGrid",sizeKey: "nested")],
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
          Text("This is a basic LayoutGrid", style: TextStyle(color: Colors.white,fontFamily: "ostrich", fontWeight: FontWeight.w700, fontSize: 48),),
          Text("Created with a width and height of 400px", style: TextStyle(color: Colors.white,fontFamily: "ostrich", fontWeight: FontWeight.w500, fontSize: 42),)
        ],
      ),
    );
  }
}

class ExampleOfLayoutGrid extends StatelessWidget {

  final String id = "nested";

  @override
  Widget build(BuildContext context) {

    final InheritedSizeModel sizeModel = InheritedSizeModel.of(context, sizeKey: id);

    return Container(

      width: sizeModel.getWidth(id),
      height: sizeModel.getHeight(id),

      decoration: BoxDecoration(
        border: Border.all(
          color: Colors.white,
          width: 2.5
        ),
        borderRadius: BorderRadius.circular(8.0),
      ),

      child: LayoutGrid(
        width: sizeModel.getWidth(id),
        height: sizeModel.getHeight(id),

        columns: [LayoutPixel()],
        rows: [LayoutPixel()],

        couples: [],
      ),
    );
  }
}