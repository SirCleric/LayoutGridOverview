import 'package:flutter_web/material.dart';


class styles {
  static TextStyle _header = TextStyle(color: Colors.yellowAccent,fontFamily: "ostrich", fontWeight: FontWeight.w700, fontSize: 64,);
  static TextStyle _body = TextStyle(color: Colors.white,fontFamily: "ostrich", fontWeight: FontWeight.w400, fontSize: 48,);

  static TextStyle getBodyStyle() {
    return _body;
  }
  static TextStyle getHeaderStyle() {
    return _header;
  }
}