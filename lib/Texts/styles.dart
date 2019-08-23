import 'package:flutter_web/material.dart';


class styles {
  static TextStyle _header = TextStyle(color: Colors.yellowAccent,fontFamily: "ostrich", fontWeight: FontWeight.w700, fontSize: 64,);
  static TextStyle _body = TextStyle(color: Colors.white,fontFamily: "ostrich", fontWeight: FontWeight.w400, fontSize: 48,);
  static TextStyle _title = TextStyle(color: Colors.white,fontFamily: "ostrich", fontWeight: FontWeight.w700, fontSize: 32,);
  static TextStyle _gitHub = TextStyle(color: Colors.black,fontFamily: "ostrich", fontWeight: FontWeight.w700, fontSize: 24,);

  static TextStyle getBodyStyle() {
    return _body;
  }
  static TextStyle getHeaderStyle() {
    return _header;
  }
  static TextStyle getTitleStyle() {
    return _title;
  }
  static TextStyle getGitHubStyle() {
    return _gitHub;
  }
}