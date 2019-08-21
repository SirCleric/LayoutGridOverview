import 'package:flutter_web/material.dart';

class LayoutUnit{

  LayoutUnit({this.priority = 0});

  int priority;
  int index = 0;
  Axis axis;
}

class LayoutNull extends LayoutUnit {}