import 'package:flutter_web/material.dart';
import 'LayoutGrid/layout_grid.dart';

import 'package:layout_grid_overview/colors.dart';

class MainImageStack extends StatelessWidget {
  MainImageStack({Key key}) : super(key: key);

  InheritedLayoutModel model;
  String modelKey = "MainImageStack";

  @override
  Widget build(BuildContext context) {

    model = InheritedLayoutModel.of(context, modelKey: modelKey);
  
    return Container(

      width: model.getWidth(modelKey),
      height: model.getHeight(modelKey),

      child: Stack(
        alignment: Alignment(0.0, 0.0),
        fit: StackFit.expand,

        children: <Widget>[
          MainImage(),
          MainImageText(),
          Positioned(
            bottom: 25,
            child: MainScrollIcon(),
          )
        ],
      ),
    );
  }
}

class MainImage extends StatelessWidget {
  const MainImage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(

      foregroundDecoration: BoxDecoration(
        color: MyColors.slate.withOpacity(0.90),
      ),

      child: Image.network(
        "https://images.unsplash.com/photo-1559183533-ee5f4826d3db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=1080",
        fit: BoxFit.cover,
      )
    );
  }
}

class MainImageText extends StatelessWidget {
  const MainImageText({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(

      alignment: Alignment(0.0,0.0),

      child: Text(
        "DO NOT EAT\nPINEAPPLE PIZZA",
        style: TextStyle(
          color: MyColors.whitish,
          fontWeight: FontWeight.bold,
          fontSize: 64,
        ),
        textAlign: TextAlign.center,
      ),
    );
  }
}

class MainScrollIcon extends StatelessWidget {
  const MainScrollIcon({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(

      child: Column(
        children: <Widget>[
          Text(
            "You don't need reasons",
            style: TextStyle(
              color: MyColors.whitish,
              fontWeight: FontWeight.normal,
              fontSize: 24,

              decoration: TextDecoration.lineThrough
            ),
            textAlign: TextAlign.center,
          ),
          Text(
            "Reasons",
            style: TextStyle(
              color: MyColors.whitish,
              fontWeight: FontWeight.normal,
              fontSize: 32,
            ),
            textAlign: TextAlign.center,
          ),
          Icon(
            Icons.arrow_downward,
            size: 32,
            color: MyColors.whitish,
          ),
        ],
      ),
    );
  }
}