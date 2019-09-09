import 'package:flutter_web/material.dart';

class LayoutUnit{

  LayoutUnit({this.priority, this.referenceLine});

  int priority;
  int index = 0;
  int referenceLine = -1;
  Axis axis;
}