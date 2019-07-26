define(['dart_sdk', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit_classes'], function(dart_sdk, layout_grid_unit_classes) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const LayoutGrid__src__Util__layout_grid_unit_classes = layout_grid_unit_classes.LayoutGrid__src__Util__layout_grid_unit_classes;
  const LayoutGrid__src__Util__layout_grid_unit = Object.create(dart.library);
  LayoutGrid__src__Util__layout_grid_unit.LayoutPixel = class LayoutPixel extends LayoutGrid__src__Util__layout_grid_unit_classes.FreeSpaceIndependent {
    get pixels() {
      return this[pixels$];
    }
    set pixels(value) {
      this[pixels$] = value;
    }
    getValue() {
      return this.pixels;
    }
  };
  (LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.new = function(opts) {
    let pixels = opts && 'pixels' in opts ? opts.pixels : 0.0;
    this[pixels$] = pixels;
    if (!(pixels != null)) dart.assertFailed(null, "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit.dart", 7, 11, "pixels != null");
    ;
  }).prototype = LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.prototype;
  dart.addTypeTests(LayoutGrid__src__Util__layout_grid_unit.LayoutPixel);
  const pixels$ = Symbol("LayoutPixel.pixels");
  dart.setMethodSignature(LayoutGrid__src__Util__layout_grid_unit.LayoutPixel, () => ({
    __proto__: dart.getMethods(LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.__proto__),
    getValue: dart.fnType(core.double, [])
  }));
  dart.setLibraryUri(LayoutGrid__src__Util__layout_grid_unit.LayoutPixel, "package:layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit.dart");
  dart.setFieldSignature(LayoutGrid__src__Util__layout_grid_unit.LayoutPixel, () => ({
    __proto__: dart.getFields(LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.__proto__),
    pixels: dart.fieldType(core.double)
  }));
  LayoutGrid__src__Util__layout_grid_unit.LayoutPercentage = class LayoutPercentage extends LayoutGrid__src__Util__layout_grid_unit_classes.FreeSpaceIndependent {
    get percentage() {
      return this[percentage$];
    }
    set percentage(value) {
      this[percentage$] = value;
    }
    getValue(size) {
      return dart.notNull(this.percentage) / 100 * dart.notNull(size);
    }
  };
  (LayoutGrid__src__Util__layout_grid_unit.LayoutPercentage.new = function(opts) {
    let percentage = opts && 'percentage' in opts ? opts.percentage : 0.0;
    this[percentage$] = percentage;
    if (!(dart.notNull(percentage) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit.dart", 21, 11, "percentage >= 0.0");
    ;
  }).prototype = LayoutGrid__src__Util__layout_grid_unit.LayoutPercentage.prototype;
  dart.addTypeTests(LayoutGrid__src__Util__layout_grid_unit.LayoutPercentage);
  const percentage$ = Symbol("LayoutPercentage.percentage");
  dart.setMethodSignature(LayoutGrid__src__Util__layout_grid_unit.LayoutPercentage, () => ({
    __proto__: dart.getMethods(LayoutGrid__src__Util__layout_grid_unit.LayoutPercentage.__proto__),
    getValue: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(LayoutGrid__src__Util__layout_grid_unit.LayoutPercentage, "package:layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit.dart");
  dart.setFieldSignature(LayoutGrid__src__Util__layout_grid_unit.LayoutPercentage, () => ({
    __proto__: dart.getFields(LayoutGrid__src__Util__layout_grid_unit.LayoutPercentage.__proto__),
    percentage: dart.fieldType(core.double)
  }));
  LayoutGrid__src__Util__layout_grid_unit.LayoutFraction = class LayoutFraction extends LayoutGrid__src__Util__layout_grid_unit_classes.SingleUnit {
    get fraction() {
      return this[fraction$];
    }
    set fraction(value) {
      this[fraction$] = value;
    }
    getValue(sumOfFractions, freeSpace) {
      return dart.notNull(this.fraction) / dart.notNull(sumOfFractions) * dart.notNull(freeSpace);
    }
  };
  (LayoutGrid__src__Util__layout_grid_unit.LayoutFraction.new = function(opts) {
    let fraction = opts && 'fraction' in opts ? opts.fraction : 0;
    this[fraction$] = fraction;
    if (!(fraction != null)) dart.assertFailed(null, "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit.dart", 35, 11, "fraction != null");
    ;
  }).prototype = LayoutGrid__src__Util__layout_grid_unit.LayoutFraction.prototype;
  dart.addTypeTests(LayoutGrid__src__Util__layout_grid_unit.LayoutFraction);
  const fraction$ = Symbol("LayoutFraction.fraction");
  dart.setMethodSignature(LayoutGrid__src__Util__layout_grid_unit.LayoutFraction, () => ({
    __proto__: dart.getMethods(LayoutGrid__src__Util__layout_grid_unit.LayoutFraction.__proto__),
    getValue: dart.fnType(core.double, [core.int, core.double])
  }));
  dart.setLibraryUri(LayoutGrid__src__Util__layout_grid_unit.LayoutFraction, "package:layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit.dart");
  dart.setFieldSignature(LayoutGrid__src__Util__layout_grid_unit.LayoutFraction, () => ({
    __proto__: dart.getFields(LayoutGrid__src__Util__layout_grid_unit.LayoutFraction.__proto__),
    fraction: dart.fieldType(core.int)
  }));
  LayoutGrid__src__Util__layout_grid_unit.LayoutMinMax = class LayoutMinMax extends LayoutGrid__src__Util__layout_grid_unit_classes.OtherLayoutIndependent {
    get minUnit() {
      return this[minUnit$];
    }
    set minUnit(value) {
      this[minUnit$] = value;
    }
    get maxUnit() {
      return this[maxUnit$];
    }
    set maxUnit(value) {
      this[maxUnit$] = value;
    }
    getMinUnit() {
      return this.minUnit;
    }
    getMaxUnit() {
      return this.maxUnit;
    }
  };
  (LayoutGrid__src__Util__layout_grid_unit.LayoutMinMax.new = function(opts) {
    let minUnit = opts && 'minUnit' in opts ? opts.minUnit : null;
    let maxUnit = opts && 'maxUnit' in opts ? opts.maxUnit : null;
    this[minUnit$] = minUnit;
    this[maxUnit$] = maxUnit;
    if (!(minUnit != null)) dart.assertFailed(maxUnit != null, "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit.dart", 50, 11, "minUnit != null");
    ;
  }).prototype = LayoutGrid__src__Util__layout_grid_unit.LayoutMinMax.prototype;
  dart.addTypeTests(LayoutGrid__src__Util__layout_grid_unit.LayoutMinMax);
  const minUnit$ = Symbol("LayoutMinMax.minUnit");
  const maxUnit$ = Symbol("LayoutMinMax.maxUnit");
  dart.setMethodSignature(LayoutGrid__src__Util__layout_grid_unit.LayoutMinMax, () => ({
    __proto__: dart.getMethods(LayoutGrid__src__Util__layout_grid_unit.LayoutMinMax.__proto__),
    getMinUnit: dart.fnType(LayoutGrid__src__Util__layout_grid_unit_classes.FreeSpaceIndependent, []),
    getMaxUnit: dart.fnType(LayoutGrid__src__Util__layout_grid_unit_classes.SingleUnit, [])
  }));
  dart.setLibraryUri(LayoutGrid__src__Util__layout_grid_unit.LayoutMinMax, "package:layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit.dart");
  dart.setFieldSignature(LayoutGrid__src__Util__layout_grid_unit.LayoutMinMax, () => ({
    __proto__: dart.getFields(LayoutGrid__src__Util__layout_grid_unit.LayoutMinMax.__proto__),
    minUnit: dart.fieldType(LayoutGrid__src__Util__layout_grid_unit_classes.FreeSpaceIndependent),
    maxUnit: dart.fieldType(LayoutGrid__src__Util__layout_grid_unit_classes.SingleUnit)
  }));
  LayoutGrid__src__Util__layout_grid_unit.LayoutDependent = class LayoutDependent extends LayoutGrid__src__Util__layout_grid_unit_classes.OtherLayoutDependent {
    get line() {
      return this[line$];
    }
    set line(value) {
      this[line$] = value;
    }
    get multiplicator() {
      return this[multiplicator$];
    }
    set multiplicator(value) {
      this[multiplicator$] = value;
    }
  };
  (LayoutGrid__src__Util__layout_grid_unit.LayoutDependent.new = function(opts) {
    let line = opts && 'line' in opts ? opts.line : null;
    let multiplicator = opts && 'multiplicator' in opts ? opts.multiplicator : 1.0;
    this[line$] = line;
    this[multiplicator$] = multiplicator;
    if (!(line != null)) dart.assertFailed(multiplicator != null, "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit.dart", 71, 11, "line != null");
    ;
  }).prototype = LayoutGrid__src__Util__layout_grid_unit.LayoutDependent.prototype;
  dart.addTypeTests(LayoutGrid__src__Util__layout_grid_unit.LayoutDependent);
  const line$ = Symbol("LayoutDependent.line");
  const multiplicator$ = Symbol("LayoutDependent.multiplicator");
  dart.setLibraryUri(LayoutGrid__src__Util__layout_grid_unit.LayoutDependent, "package:layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit.dart");
  dart.setFieldSignature(LayoutGrid__src__Util__layout_grid_unit.LayoutDependent, () => ({
    __proto__: dart.getFields(LayoutGrid__src__Util__layout_grid_unit.LayoutDependent.__proto__),
    line: dart.fieldType(core.int),
    multiplicator: dart.fieldType(core.double)
  }));
  dart.trackLibraries("packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit", {
    "package:layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit.dart": LayoutGrid__src__Util__layout_grid_unit
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit.dart"],"names":[],"mappings":";;;;;;;;IASS;;;;;;;AAGL,YAAO;IACT;;;QATO,kDAAS;IAAT;UAEC,MAAM,IAAI;;EACX;;;;;;;;;;;;;IAgBA;;;;;;aAEgB;AACrB,YAAkB,AAAM,cAAjB,mBAAa,mBAAM,IAAI;IAChC;;;QATO,8DAAa;IAAb;UAEY,aAAX,UAAU,KAAI;;EACf;;;;;;;;;;;;;IAgBH;;;;;;aAEgB,gBAAuB;AACzC,YAAgB,AAAiB,cAA1B,8BAAW,cAAc,iBAAG,SAAS;IAC9C;;;QATO,wDAAW;IAAX;UAEC,QAAQ,IAAI;;EACb;;;;;;;;;;;;;IAkBc;;;;;;IACV;;;;;;;AAGT,YAAO;IACT;;AAGE,YAAO;IACT;;;QAhBO;QACA;IADA;IACA;UAEC,OAAO,IAAI,yBACX,OAAO,IAAI;;EACZ;;;;;;;;;;;;;;;;IAuBH;;;;;;IACG;;;;;;;;QARA;QACA,uEAAgB;IADhB;IACA;UAEC,IAAI,IAAI,yBACR,aAAa,IAAI;;EAClB","file":"layout_grid_unit.ddc.js"}');
  // Exports:
  return {
    LayoutGrid__src__Util__layout_grid_unit: LayoutGrid__src__Util__layout_grid_unit
  };
});

//# sourceMappingURL=layout_grid_unit.ddc.js.map
