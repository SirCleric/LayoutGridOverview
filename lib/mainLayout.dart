import 'package:flutter_web/material.dart';
import 'package:layout_grid_overview/LayoutGrid/src/Util/layout_grid_units.dart';
import 'package:layout_grid_overview/mainCredentials.dart';
import 'package:layout_grid_overview/mainImage.dart';

import 'LayoutGrid/layout_grid.dart';

class MainLayout extends StatelessWidget {
  MainLayout({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {

    return LayoutBuilder(
      builder: (BuildContext context, BoxConstraints constraints) {

        return SingleChildScrollView(

          child: LayoutGrid(

            width: constraints.maxWidth,

            layoutModel: InheritedLayoutModel.of(context),

            columns: [
              LayoutPixel(pixels: 0),
              LayoutFraction(fraction: 1),
              LayoutFraction(fraction: 4),
              LayoutFraction(fraction: 4),
              LayoutFraction(fraction: 1),
            ],

            rows: [
              LayoutPixel(pixels: 0),
              LayoutPixel(pixels: constraints.maxHeight),
              LayoutPixel(pixels: 100),
              LayoutPixel(pixels: constraints.maxHeight * 0.50),
              LayoutPixel(pixels: 100),
              LayoutPixel(pixels: constraints.maxHeight * 0.15),
              LayoutPixel(pixels: constraints.maxHeight * 0.50),
              LayoutPixel(pixels: constraints.maxHeight * 0.20),
            ],

            couples: [
              LayoutGridCouple(
                widget: MainImageStack(),
                col0: 0, col1: 4,
                row0: 0, row1: 1,
                modelKey: "MainImageStack"
              ),
              LayoutGridCouple(
                widget: MainCredentialsStack(),
                col0: 0, col1: 4,
                row0: 2, row1: 3,
                alignment: Alignment(0.0, 0.0),
                modelKey: "MainCredentialsStack"
              ),
            ],
          ),
        );
      },
    );
  }
}