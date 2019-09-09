import 'package:flutter_web/material.dart';
import 'package:layout_grid_overview/LayoutGrid/src/Util/layout_grid_units.dart';

import 'LayoutGrid/layout_grid.dart';

class MainLayout extends StatelessWidget {
  MainLayout({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {

    return LayoutBuilder(
      builder: (BuildContext context, BoxConstraints constraints) {

        return Stack(
          children: <Widget> [
            SingleChildScrollView(
              child: LayoutGrid(

                maxWidth: constraints.maxWidth,
                referenceHeight: constraints.maxHeight,

                layoutModel: InheritedLayoutModel.of(context),

                columns: [
                  LayoutPixel(pixels: 0),
                  LayoutFraction(fraction: 1),
                  LayoutFraction(fraction: 8),
                  LayoutFraction(fraction: 1),
                ],

                rows: [
                  LayoutPixel(pixels: 0),
                  LayoutPixel(pixels: constraints.maxHeight), //Main section
                  LayoutPixel(pixels: 72), //Spacing
                  LayoutPercentage(percentage: 50), // Description
                  LayoutPercentage(percentage: 25), //Contacts
                  LayoutPixel(pixels: 148), //Spacing
                  LayoutPixel(pixels: 72), //Work section title
                  LayoutPixel(pixels: 72), //Spacing
                  LayoutPixel(pixels: constraints.maxHeight), //Grid
                  LayoutPixel(pixels: 72), //Spacing
                  LayoutPixel(pixels: 72), //More Work
                  LayoutPercentage(percentage: 25), //Twitter user
                  LayoutPercentage(percentage: 15),
                ],

                couples: [
                  LayoutGridCouple(
                    widget: Section(text: "Main",color: Colors.redAccent,modelKey: "Main",),
                    col0: 0,col1: 3,
                    row0: 0, row1: 1,
                    modelKey: "Main"
                  ),
                  LayoutGridCouple(
                    widget: Section(text: "Description",color: Colors.tealAccent,modelKey: "Description",),
                    col0: 1,col1: 2,
                    row0: 2, row1: 3,
                    modelKey: "Description"
                  ),
                  LayoutGridCouple(
                    widget: Grid(),
                    col0: 1,col1: 2,
                    row0: 7, row1: 8,
                    modelKey: "Grid"
                  ),
                ],
              ),
            ),
          ]
        );
      },
    );
  }
}

class Section extends StatelessWidget {
  Section({Key key, @required this.color, @required this.text, @required this.modelKey}) : super(key: key);

  final String text, modelKey;
  final Color color;

  InheritedLayoutModel model;

  @override
  Widget build(BuildContext context) {

    model = InheritedLayoutModel.of(context);

    return Container(

      color: color,

      width: model.getWidth(modelKey),
      height: model.getHeight(modelKey),

      alignment: Alignment(0.0, 0.0),

      child: Text(
        text,
        style: TextStyle(
          color: Colors.white,
          fontSize: 64,
        ),
      ),
    );
  }
}

class Grid extends StatelessWidget {
  Grid({Key key}) : super(key: key);

  InheritedLayoutModel model;
  final String modelKey = "Grid";

  @override
  Widget build(BuildContext context) {

    model = InheritedLayoutModel.of(context);

    return Container(

      child: LayoutGrid(
        maxWidth: model.getWidth(modelKey),
        maxHeight: model.getHeight(modelKey),

        layoutModel: InheritedLayoutModel.of(context),

        columns: [
          LayoutPixel(pixels: 0 , priority: 1),
          LayoutFraction(fraction: 5, priority: 1),
          LayoutFraction(fraction: 3, priority: 1),
        ],

        rows: [
          LayoutPixel(pixels: 0),
          LayoutPixel(pixels: 100),
          LayoutDependent(line: 2, multiplicator: 0.5625), // 16 : 9
          LayoutDependent(line: 1, referenceLine: 0, multiplicator: 0.5625), // 16 : 9
          LayoutDependent(line: 2, referenceLine: 1, multiplicator: 1), // 1 : 1
          LayoutDependent(line: 1, referenceLine: 2, multiplicator: 1), // 1 : 1
          LayoutDependent(line: 2, referenceLine: 3, multiplicator: 0.5625), // 16 : 9
          LayoutDependent(line: 2, referenceLine: 5, multiplicator: 0.625), // 16 : 10
          LayoutDependent(line: 1, referenceLine: 4, multiplicator: 0.625), // 16 : 10
          LayoutDependent(line: 2, referenceLine: 6, multiplicator: 0.5625), // 16 : 9
          LayoutDependent(line: 1, referenceLine: 7, multiplicator: 0.625), // 16 : 10
        ],

        couples: [
          LayoutGridCouple(
            widget: Section(text: "1", color: Colors.blueGrey, modelKey: "1",),
            col0: 0, col1: 1,
            row0: 0, row1: 2,
            modelKey: "1"
          ),
          LayoutGridCouple(
            widget: Section(text: "2", color: Colors.blueGrey, modelKey: "2",),
            col0: 1, col1: 2,
            row0: 0, row1: 1,
            modelKey: "2"
          ),
          LayoutGridCouple(
            widget: Section(text: "3", color: Colors.blueGrey, modelKey: "3",),
            col0: 0, col1: 1,
            row0: 2, row1: 4,
            modelKey: "3"
          ),
          LayoutGridCouple(
            widget: Section(text: "4", color: Colors.blueGrey, modelKey: "4",),
            col0: 1, col1: 2,
            row0: 1, row1: 3,
            modelKey: "4"
          ),
        ],
      ),
    );
  }
}