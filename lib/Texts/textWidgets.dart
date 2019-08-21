import 'package:flutter_web/material.dart';

import '../LayoutGrid/layout_grid.dart';
import 'styles.dart';

class FirstText extends StatelessWidget {
  FirstText({Key key}) : super(key: key);

  final String modelKey = "FirstText";
  double widthSize = 0.0, heightSize = 0.0;
  InheritedLayoutModel sizeModel;
  InheritedLayoutModel gridSizeModel;

  @override
  Widget build(BuildContext context) {

    sizeModel = InheritedLayoutModel.of(context, modelKey: modelKey);
    gridSizeModel = InheritedLayoutModel.of(context, modelKey: "Tutorial");

    widthSize = gridSizeModel.getWidth("Tutorial");
    heightSize = gridSizeModel.getHeight("Tutorial");

    return Container(

      width: sizeModel.getWidth(modelKey),
      height: sizeModel.getHeight(modelKey),

      child: Column(

        mainAxisAlignment: MainAxisAlignment.start,

        children: <Widget>[
          Text("This is a LayoutGrid",style: styles.getHeaderStyle()),
          Text("It has been created with the width of $widthSize and height of $heightSize\px",style: styles.getBodyStyle()),
        ],
      ),
    );    
  }
}

class SecondText extends StatelessWidget {
  SecondText({Key key}) : super(key: key);

  final String modelKey = "SecondText";
  double widthSize = 0.0, heightSize = 0.0;
  InheritedLayoutModel sizeModel;

  @override
  Widget build(BuildContext context) {

    sizeModel = InheritedLayoutModel.of(context, modelKey: modelKey);

    return Container(

      width: sizeModel.getWidth(modelKey),
      height: sizeModel.getHeight(modelKey),

      child: Column(

        mainAxisAlignment: MainAxisAlignment.start,

        children: <Widget>[
          Text("You can divide it in areas with lines",style: styles.getHeaderStyle()),
          Text("Ex. col = [LayoutFraction(fraction: 1), LayoutFraction(fraction: 2), LayoutFraction(fraction: 1), ]",style: styles.getBodyStyle()),
        ],
      ),
    );    
  }
}