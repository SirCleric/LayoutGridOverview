import 'package:flutter_web/material.dart';

import '../LayoutGrid/layout_grid.dart';

class FirstGrid extends StatelessWidget {
  FirstGrid({Key key}) : super(key: key);

  double widthSize = 0.0, heightSize = 0.0;
  InheritedLayoutModel gridSizeModel;
  final String modelKey = "Grid";

  @override
  Widget build(BuildContext context) {
    gridSizeModel = InheritedLayoutModel.of(context, modelKey: modelKey);

    widthSize = gridSizeModel.getWidth(modelKey);
    print(widthSize);

    return SizedBox(
      width: widthSize,
      height: widthSize,
      child: Container(

        decoration: BoxDecoration(
          border: Border.all(
            color: Colors.white,
            width: 2,
          ),
          borderRadius: BorderRadius.circular(4.0),
        ),

        child: LayoutGrid(

          width: widthSize,
          height: widthSize,

          columns: [],

          rows: [],

          couples: [],

        ),
      ),
    );
  }
}

class SecondGrid extends StatelessWidget {
  SecondGrid({Key key}) : super(key: key);

  double widthSize = 0.0, heightSize = 0.0;
  InheritedLayoutModel gridSizeModel;
  final String modelKey = "Grid";

  @override
  Widget build(BuildContext context) {
    gridSizeModel = InheritedLayoutModel.of(context, modelKey: modelKey);

    widthSize = gridSizeModel.getWidth(modelKey);
    print(widthSize);

    return SizedBox(
      width: widthSize,
      height: widthSize,
      child: Container(
        
        decoration: BoxDecoration(
          border: Border.all(
            color: Colors.white,
            width: 2,
          ),
          borderRadius: BorderRadius.circular(4.0),
        ),

        child: LayoutGrid(

          width: widthSize,
          height: widthSize,

          layoutModel: InheritedLayoutModel.of(context),

          columns: [
            LayoutPixel(pixels: 0.0),
            LayoutPixel(pixels: 25.0,priority: 1),
            LayoutFraction(fraction: 1),
            LayoutPixel(pixels: 25.0,priority: 1),
          ],

          rows: [
            LayoutPixel(pixels: 0.0),
            LayoutFraction(fraction: 1),
          ],

          areas: [["a0", "a1", "a2"]],

          couples: [
            LayoutGridCouple(
              widget: Area(modelKey: "a0",),
              col0: 0,col1: 1,
              row0: 0,row1: 1,
              modelKey: "a0"
            ),
            LayoutGridCouple(
              widget: Area(modelKey: "a1",),
              col0: 1,col1: 2,
              row0: 0,row1: 1,
              modelKey: "a1"
            ),
            LayoutGridCouple(
              widget: Area(modelKey: "a2",),
              col0: 2,col1: 3,
              row0: 0,row1: 1,
              modelKey: "a2"
            ),
          ],
        ),
      ),
    );
  }
}

class Area extends StatelessWidget {
  Area({Key key, this.modelKey}) : super(key: key);

  double widthSize = 0.0, heightSize = 0.0;
  InheritedLayoutModel sizeModel;
  final String modelKey;

  @override
  Widget build(BuildContext context) {

    sizeModel = InheritedLayoutModel.of(context, modelKey: modelKey);

    widthSize = sizeModel.getWidth(modelKey);
    heightSize = sizeModel.getHeight(modelKey);

    return Container(
      width: widthSize,
      height: heightSize,

      decoration: BoxDecoration(
        border: Border.all(
          width: 2.0,
          color: Colors.white,
        ),
      ),
    );
  }
}