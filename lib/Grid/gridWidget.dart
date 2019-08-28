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
            LayoutPixel(pixels: 25.0),
            LayoutFraction(fraction: 1),
            LayoutPixel(pixels: 25.0),
          ],

          rows: [
            LayoutPixel(pixels: 0.0),
            LayoutFraction(fraction: 1),
          ],

          areas: [["a0", "a1", "a2"]],

          couples: [
            LayoutGridCouple(
              widget: area("a0", context),
              name: "a0",
              modelKey: "a0"
            ),
            LayoutGridCouple(
              widget: area("a1", context),
              name: "a1",
              modelKey: "a1"
            ),
            LayoutGridCouple(
              widget: area("a2", context),
              name: "a2",
              modelKey: "a2"
            ),
          ],
        ),
      ),
    );
  }
}

Container area(String name, BuildContext context) {

  double widthSize = 0.0, heightSize = 0.0;
  InheritedLayoutModel sizeModel;
  final String modelKey = name;

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
      )
    ),
  );
}