import 'package:flutter_web/material.dart';

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
      home: InheritedSizeModel(child: MyHomePage(title: 'Layout grid overview')),
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

        body: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 50,vertical: 50),

          child: LayoutBuilder(
            builder: (BuildContext context, BoxConstraints constraints) {

              return LayoutGrid(
                width: constraints.maxWidth,
                height: constraints.maxHeight,

                sizeModel: InheritedSizeModel.of(context),

                columns: [LayoutMinMax(minUnit: LayoutPixel(pixels: 350), maxUnit: LayoutFraction(fraction: 1)),
                          LayoutPixel(pixels: 20),
                          LayoutMinMax(minUnit: LayoutPixel(pixels: 200), maxUnit: LayoutPixel(pixels: 800))],

                rows: [
                  LayoutPixel(pixels: 50),
                  LayoutDependent(line: 3, multiplicator: 1),
                  LayoutFraction(fraction: 1),
                ],

                areas: [["....","...","................"],
                        ["text","...","NestedLayoutGrid"],
                        ["text","...","................"]],

                couples: [LayoutGridCouple(widget: TestContainer(),name: "text", sizeKey: "ok"),
                          LayoutGridCouple(widget: TestContainer2(),name: "NestedLayoutGrid", sizeKey: "ok2"),],
              );
            },
          ), 
        ),
      ),
    );
  }
}

class TestContainer extends StatelessWidget {


  @override
  Widget build(BuildContext context) {

    final InheritedSizeModel sizeModel = InheritedSizeModel.of(context, sizeKey: "ok");
    print(sizeModel.getWidth("ok"));

    return Container(

      width: sizeModel.getWidth("ok"),
      height: sizeModel.getHeight("ok"),

      color: Colors.white,
      child: Text("OK"),
    );
  }
}

class TestContainer2 extends StatelessWidget {


  @override
  Widget build(BuildContext context) {

    final InheritedSizeModel sizeModel = InheritedSizeModel.of(context, sizeKey: "ok2");
    print(sizeModel.getWidth("ok2"));

    return Container(

      width: sizeModel.getWidth("ok2"),
      height: sizeModel.getHeight("ok2"),

      color: Colors.white,
      child: Text("OK2"),
    );
  }
}