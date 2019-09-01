import 'package:flutter_web/material.dart';
import 'package:layout_grid_overview/Grid/gridWidget.dart';
import 'package:layout_grid_overview/LayoutGrid/src/Util/layout_grid_units.dart';

import 'LayoutGrid/layout_grid.dart';
import 'Texts/textWidgets.dart';

class TutorialLayout extends StatelessWidget {
  TutorialLayout({
    Key key,
  }) : super(key: key);

  ScrollController scrollController = ScrollController();

  @override
  Widget build(BuildContext context) {

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 50),

      child: LayoutBuilder(
        builder: (BuildContext context, BoxConstraints constraints) {

          return SingleChildScrollView(

            child: LayoutGrid(

              width: constraints.maxWidth,

              layoutModel: InheritedLayoutModel.of(context),

              columns: [
                LayoutPixel(pixels: 0.0),
                LayoutMinMax(minUnit: LayoutPixel(pixels: 400), unit: LayoutFraction(fraction: 2)),
                LayoutMinMax(maxUnit: LayoutPixel(pixels: 100), unit: LayoutFraction(fraction: 1)),
                LayoutMinMax(minUnit: LayoutPixel(pixels: 200), unit: LayoutFraction(fraction: 2)),
              ],
              rows: [
                LayoutPixel(pixels: 0.0),
                LayoutPixel(pixels: 50.0),
                LayoutPixel(pixels: constraints.maxHeight - 100),
                LayoutPixel(pixels: 100.0),
                LayoutPixel(pixels: constraints.maxHeight - 50),
              ],

              couples: [
                LayoutGridCouple(
                  widget: FirstText(),
                  col0: 0, col1: 1, row0: 1, row1: 2,
                  modelKey: "Text",
                ),
                LayoutGridCouple(
                  widget: FirstGrid(),
                  col0: 2, col1: 3, row0: 1, row1: 2,
                  modelKey: "Grid",
                ),
                LayoutGridCouple(
                  widget: SecondText(),
                  col0: 0, col1: 1, row0: 3, row1: 4,
                ),
                LayoutGridCouple(
                  widget: SecondGrid(),
                  col0: 2, col1: 3, row0: 3, row1: 4,
                ),
              ],
            ),
          );
        },
      ), 
    );
  }
}