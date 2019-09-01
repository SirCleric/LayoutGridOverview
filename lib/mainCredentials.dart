import 'package:flutter_web/material.dart';
import 'LayoutGrid/layout_grid.dart';

class MainCredentialsStack extends StatelessWidget {
  MainCredentialsStack({Key key}) : super(key: key);

  InheritedLayoutModel model;
  String modelKey = "MainCredentialsStack";

  @override
  Widget build(BuildContext context) {

    model = InheritedLayoutModel.of(context, modelKey: modelKey);
  
    return Container(

      width: model.getHeight(modelKey),
      height: model.getHeight(modelKey),

      child: Stack(
        alignment: Alignment(0.0, 0.0),
        fit: StackFit.expand,

        children: <Widget>[
          MainAvatar(radius: model.getHeight(modelKey) / 4)
          
        ],
      ),
    );
  }
}

class MainAvatar extends StatelessWidget {
  MainAvatar({Key key, @required this.radius}) : super(key: key);

  double radius;

  @override
  Widget build(BuildContext context) {
    return Container(

      alignment: Alignment(0.0, 0.0),

      width: radius * 2,
      height: radius * 2,

      decoration: BoxDecoration(
        shape: BoxShape.circle,

        image: DecorationImage(
          image: NetworkImage("https://pbs.twimg.com/profile_images/942158813259583488/muclNKDf_400x400.jpg"),
          fit: BoxFit.cover,
          alignment: Alignment(0.0, 0.0),
        ),
      ),
    );
  }
}