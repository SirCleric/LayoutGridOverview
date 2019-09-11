import 'package:flutter/material.dart';
import 'dart:math' as math;

import 'package:layout_grid/layout_grid.dart';

Color getRandomColor() {
  return Color((math.Random().nextDouble() * 0xFFFFFF).toInt() << 0).withOpacity(1.0);
}

class MainLayout extends StatelessWidget {
  MainLayout({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {

    return LayoutBuilder(
      builder: (BuildContext context, BoxConstraints constraints) {

        print("width: " + constraints.maxWidth.toString());

        return Stack(
          children: <Widget> [
            SingleChildScrollView(
              child: LayoutGrid(

                maxWidth: constraints.maxWidth,
                referenceHeight: constraints.maxHeight,

                layoutModel: InheritedLayoutModel.of(context),

                columns: (constraints.maxWidth > 300) ? [
                  LayoutPixel(pixels: 0),
                  LayoutFraction(fraction: 1, priority: 1),
                  LayoutFraction(fraction: 5, priority: 1),
                  LayoutFraction(fraction: 3, priority: 1),
                  LayoutFraction(fraction: 1, priority: 1),
                ] : [
                  LayoutPixel(pixels: 0),
                  LayoutFraction(fraction: 1, priority: 1),
                ],

                rows: (constraints.maxWidth > 300) ? [
                  LayoutPixel(pixels: 0),
                  LayoutPixel(pixels: constraints.maxHeight), //Main section
                  LayoutPixel(pixels: 72), //Spacing
                  LayoutPercentage(percentage: 50), // Description
                  LayoutPercentage(percentage: 25), //Contacts
                  LayoutPixel(pixels: 148), //Spacing
                  LayoutPixel(pixels: 72), //Work section title
                  LayoutPixel(pixels: 72), //Spacing
                  LayoutDependent(line: 2, function: (double value) => value + value * 0.625 * 3), //Grid
                  LayoutPixel(pixels: 72), //Spacing
                  LayoutPixel(pixels: 72), //More Work
                  LayoutPercentage(percentage: 25), //Instagram section
                  LayoutPercentage(percentage: 15), //Contacts
                ] : [
                  
                ],

                couples: [
                  LayoutGridCouple(
                    widget: Section(text: "Main",modelKey: "Main",),
                    col0: 0,col1: 4,
                    row0: 0, row1: 1,
                    modelKey: "Main"
                  ),
                  LayoutGridCouple(
                    widget: Section(text: "Description",modelKey: "Description",),
                    col0: 1,col1: 3,
                    row0: 2, row1: 3,
                    modelKey: "Description"
                  ),
                  LayoutGridCouple(
                    widget: Section(text: "Contacts",modelKey: "Contacts",),
                    col0: 1,col1: 3,
                    row0: 3, row1: 4,
                    modelKey: "Contacts"
                  ),
                  LayoutGridCouple(
                    widget: Section(text: "Work section", modelKey: "Work",),
                    col0: 1,col1: 3,
                    row0: 5, row1: 6,
                    modelKey: "Work",
                  ),
                  LayoutGridCouple(
                    widget: LeftGrid(),
                    col0: 1,col1: 2,
                    row0: 7, row1: 8,
                    modelKey: "LeftGrid",
                  ),
                  LayoutGridCouple(
                    widget: RightGrid(),
                    col0: 2,col1: 3,
                    row0: 7, row1: 8,
                    modelKey: "RightGrid",
                  ),
                  LayoutGridCouple(
                    widget: Section(text: "More work", modelKey: "MoreWork",),
                    col0: 1,col1: 3,
                    row0: 9, row1: 10,
                    modelKey: "MoreWork",
                  ),
                  LayoutGridCouple(
                    widget: Section(text: "Instagram section", modelKey: "Instagram",),
                    col0: 1,col1: 3,
                    row0: 10, row1: 11,
                    modelKey: "Instagram",
                  ),
                  LayoutGridCouple(
                    widget: Section(text: "Bottom contacts", modelKey: "Bottom",),
                    col0: 0,col1: 4,
                    row0: 11, row1: 12,
                    modelKey: "Bottom",
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

class LeftGrid extends StatelessWidget {
  LeftGrid({Key key}) : super(key: key);

  InheritedLayoutModel model;
  final String modelKey = "LeftGrid";

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
          LayoutPixel(pixels: model.getWidth(modelKey),priority: 1)
        ],

        rows: [
          LayoutPixel(pixels: 0),
          LayoutDependent(line: 1, function: (double value) => value),
          LayoutDependent(line: 1, function: (double value) => value * 0.625),
          LayoutDependent(line: 1, function: (double value) => value * 0.625),
          LayoutDependent(line: 1, function: (double value) => value * 0.625),
        ],

        couples: [
          LayoutGridCouple(
            widget: Section(text: "1", modelKey: "1",),
            col0: 0, col1: 1,
            row0: 0, row1: 1,
            modelKey: "1"
          ),
          LayoutGridCouple(
            widget: Section(text: "2", modelKey: "2",),
            col0: 0, col1: 1,
            row0: 1, row1: 2,
            modelKey: "2"
          ),
          LayoutGridCouple(
            widget: Section(text: "3", modelKey: "3",),
            col0: 0, col1: 1,
            row0: 2, row1: 3,
            modelKey: "3"
          ),
          LayoutGridCouple(
            widget: Section(text: "4", modelKey: "4",),
            col0: 0, col1: 1,
            row0: 3, row1: 4,
            modelKey: "4"
          ),
        ],
      ),
    );
  }
}

class RightGrid extends StatelessWidget {
  RightGrid({Key key}) : super(key: key);

  InheritedLayoutModel model;
  final String modelKey = "RightGrid";

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
          LayoutPixel(pixels: model.getWidth(modelKey),priority: 1)
        ],

        rows: [
          LayoutPixel(pixels: 0),
          LayoutDependent(line: 1, function: (double value) => value * 0.625),
          LayoutDependent(line: 1, function: (double value) => value),
          LayoutDependent(line: 1, function: (double value) => value * 0.625),
          LayoutDependent(line: 1, function: (double value) => value * 0.625),
          LayoutDependent(line: 1, function: (double value) => value * 0.625),
        ],

        couples: [
          LayoutGridCouple(
            widget: Section(text: "1", modelKey: "1",),
            col0: 0, col1: 1,
            row0: 0, row1: 1,
            modelKey: "1"
          ),
          LayoutGridCouple(
            widget: Section(text: "2", modelKey: "2",),
            col0: 0, col1: 1,
            row0: 1, row1: 2,
            modelKey: "2"
          ),
          LayoutGridCouple(
            widget: Section(text: "3", modelKey: "3",),
            col0: 0, col1: 1,
            row0: 2, row1: 3,
            modelKey: "3"
          ),
          LayoutGridCouple(
            widget: Section(text: "4", modelKey: "4",),
            col0: 0, col1: 1,
            row0: 3, row1: 4,
            modelKey: "4"
          ),
        ],
      ),
    );
  }
}

class Section extends StatelessWidget {
  Section({Key key, @required this.text, @required this.modelKey}) : super(key: key);

  final String text, modelKey;

  InheritedLayoutModel model;

  @override
  Widget build(BuildContext context) {

    model = InheritedLayoutModel.of(context);

    return Container(

      color: Color.fromRGBO(38, 38, 38, 1.0),

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
