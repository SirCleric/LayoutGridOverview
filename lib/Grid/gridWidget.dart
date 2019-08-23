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
    heightSize = gridSizeModel.getHeight(modelKey);

    return Container(

      width: gridSizeModel.getWidth(modelKey),
      height: gridSizeModel.getWidth(modelKey),

      foregroundDecoration: BoxDecoration(
        border: Border.all(
          color: Colors.white,
          width: 2,
        ),
        borderRadius: BorderRadius.circular(4.0),
      ),

      child: LayoutGrid(

        width: gridSizeModel.getWidth(modelKey),
        height: gridSizeModel.getWidth(modelKey),

        columns: [],

        rows: [],

        couples: [],

      ),
    );
  }
}