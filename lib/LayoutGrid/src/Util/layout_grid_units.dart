import 'layout_grid_private_units.dart';

class LayoutPixel extends LayoutUnit {
  LayoutPixel({
    this.pixels = 0.0,
    int priority = 0,
    int referenceLine = -1,
  }) : assert(
    pixels != null,
  ), super(priority: priority, referenceLine: referenceLine);

  double pixels;

  double getValue() {
    return pixels;
  }
}

class LayoutPercentage extends LayoutUnit {
  LayoutPercentage({
    this.percentage = 0.0,
    int priority = 0,
    int referenceLine = -1,
  }) : assert(
    percentage >= 0.0,
  ), super(priority: priority, referenceLine: referenceLine);

  double percentage;

  double getValue(double space) {
    return percentage / 100 * space;
  }
}

class LayoutFraction extends LayoutUnit {
  LayoutFraction({
    this.fraction = 0,
    int priority = 0,
    int referenceLine = -1,
  }) : assert(
    fraction != null,
  ), super(priority: priority, referenceLine: referenceLine);

  int fraction;

  double getValue(int sumOfFractions, double freeSpace) {
    return fraction / sumOfFractions * freeSpace;
  }
}

class LayoutMinMax extends LayoutUnit {
  LayoutMinMax({
    this.minUnit,
    this.maxUnit,
    this.unit,
    int priority = 0,
    int referenceLine = -1,
    this.subPriority = 0,
  }) : assert(
    !(minUnit is LayoutFraction && maxUnit is LayoutFraction),
  ), super(priority: priority, referenceLine: referenceLine);

  LayoutUnit unit,minUnit, maxUnit;
  int subPriority;
}

class LayoutDependent extends LayoutUnit {
  LayoutDependent({
    this.line,
    this.multiplicator = 1.0,
    int priority = 0,
    int referenceLine = -1,
  }) : assert(
    line != null,
    multiplicator != null,
  ), super(priority: priority, referenceLine: referenceLine);

  int line;
  double multiplicator;

  double getValue(List<double> list) {
    return list[line] * multiplicator;
  }
}