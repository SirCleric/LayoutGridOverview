import 'package:flutter_web/material.dart';
import 'package:layout_grid_overview/LayoutGrid/src/Util/layout_grid_units.dart';

import 'LayoutGrid/layout_grid.dart';
import 'Texts/textWidgets.dart';

class TutorialLayout extends StatelessWidget {
  TutorialLayout({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 50,vertical: 50),

      child: LayoutBuilder(
        builder: (BuildContext context, BoxConstraints constraints) {

          double wid = constraints.maxWidth;
          print("width: $wid");

          return LayoutGrid(
            width: constraints.maxWidth,
            height: constraints.maxHeight,

            layoutModel: InheritedLayoutModel.of(context),

            columns: [
              LayoutPixel(pixels: 0.0),
              LayoutMinMax(minUnit: LayoutPixel(pixels: 100), unit: LayoutFraction(fraction: 1), maxUnit: LayoutPixel(pixels: 200), priority: 1, subPriority: 0),
              LayoutMinMax(minUnit: LayoutPixel(pixels: 400), unit: LayoutFraction(fraction: 1), priority: 1, subPriority: 1),
              LayoutMinMax(minUnit: LayoutPixel(pixels: 100), unit: LayoutFraction(fraction: 1), maxUnit: LayoutPixel(pixels: 200), priority: 1, subPriority: 0),
              LayoutFraction(fraction: 1, priority: 1)
            ],
            rows: [
              LayoutPixel(pixels: 0.0),
              LayoutPixel(pixels: constraints.maxHeight),
            ],

            couples: [
              LayoutGridCouple(
                widget: SecondText(), col0: 1, col1: 2, row0: 0, row1: 1,
                        modelKey: "SecondText",
              ),
            ],
          );
        },
      ), 
    );
  }
}