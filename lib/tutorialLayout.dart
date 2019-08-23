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

          return LayoutGrid(

            width: constraints.maxWidth,

            scrollController: scrollController,

            layoutModel: InheritedLayoutModel.of(context),

            columns: [
              LayoutPixel(pixels: 0.0),
              LayoutMinMax(minUnit: LayoutPixel(pixels: 400), unit: LayoutFraction(fraction: 2)),
              LayoutMinMax(maxUnit: LayoutPixel(pixels: 100), unit: LayoutFraction(fraction: 1)),
              LayoutMinMax(minUnit: LayoutPixel(pixels: 400), unit: LayoutFraction(fraction: 2)),
            ],
            rows: [
              LayoutPixel(pixels: 50.0),
              LayoutPixel(pixels: constraints.maxHeight - 100),
              LayoutPixel(pixels: 100.0),
              LayoutPixel(pixels: constraints.maxHeight - 50),
            ],

            couples: [
              LayoutGridCouple(
                widget: FirstText(),
                col0: 0, col1: 1, row0: 0, row1: 1,
                modelKey: "Text",
              ),
              LayoutGridCouple(
                widget: FirstGrid(),
                col0: 2, col1: 3, row0: 0, row1: 1,
                modelKey: "Grid"
              ),
              LayoutGridCouple(
                widget: SecondText(),
                col0: 0, col1: 1, row0: 2, row1: 3,
              ),
            ],
          );
        },
      ), 
    );
  }
}