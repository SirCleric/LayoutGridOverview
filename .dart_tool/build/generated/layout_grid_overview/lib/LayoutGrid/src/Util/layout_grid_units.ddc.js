define(['dart_sdk', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_private_units'], function(dart_sdk, layout_grid_private_units) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const LayoutGrid__src__Util__layout_grid_private_units = layout_grid_private_units.LayoutGrid__src__Util__layout_grid_private_units;
  const LayoutGrid__src__Util__layout_grid_units = Object.create(dart.library);
  const $_get = dartx._get;
  LayoutGrid__src__Util__layout_grid_units.LayoutPixel = class LayoutPixel extends LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit {
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
  (LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new = function(opts) {
    let pixels = opts && 'pixels' in opts ? opts.pixels : 0.0;
    let priority = opts && 'priority' in opts ? opts.priority : 0;
    let referenceLine = opts && 'referenceLine' in opts ? opts.referenceLine : -1;
    this[pixels$] = pixels;
    if (!(pixels != null)) dart.assertFailed(null, "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_units.dart", 9, 5, "pixels != null");
    LayoutGrid__src__Util__layout_grid_units.LayoutPixel.__proto__.new.call(this, {priority: priority, referenceLine: referenceLine});
    ;
  }).prototype = LayoutGrid__src__Util__layout_grid_units.LayoutPixel.prototype;
  dart.addTypeTests(LayoutGrid__src__Util__layout_grid_units.LayoutPixel);
  const pixels$ = Symbol("LayoutPixel.pixels");
  dart.setMethodSignature(LayoutGrid__src__Util__layout_grid_units.LayoutPixel, () => ({
    __proto__: dart.getMethods(LayoutGrid__src__Util__layout_grid_units.LayoutPixel.__proto__),
    getValue: dart.fnType(core.double, [])
  }));
  dart.setLibraryUri(LayoutGrid__src__Util__layout_grid_units.LayoutPixel, "package:layout_grid_overview/LayoutGrid/src/Util/layout_grid_units.dart");
  dart.setFieldSignature(LayoutGrid__src__Util__layout_grid_units.LayoutPixel, () => ({
    __proto__: dart.getFields(LayoutGrid__src__Util__layout_grid_units.LayoutPixel.__proto__),
    pixels: dart.fieldType(core.double)
  }));
  LayoutGrid__src__Util__layout_grid_units.LayoutPercentage = class LayoutPercentage extends LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit {
    get percentage() {
      return this[percentage$];
    }
    set percentage(value) {
      this[percentage$] = value;
    }
    getValue(space) {
      return dart.notNull(this.percentage) / 100 * dart.notNull(space);
    }
  };
  (LayoutGrid__src__Util__layout_grid_units.LayoutPercentage.new = function(opts) {
    let percentage = opts && 'percentage' in opts ? opts.percentage : 0.0;
    let priority = opts && 'priority' in opts ? opts.priority : 0;
    let referenceLine = opts && 'referenceLine' in opts ? opts.referenceLine : -1;
    this[percentage$] = percentage;
    if (!(dart.notNull(percentage) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_units.dart", 25, 5, "percentage >= 0.0");
    LayoutGrid__src__Util__layout_grid_units.LayoutPercentage.__proto__.new.call(this, {priority: priority, referenceLine: referenceLine});
    ;
  }).prototype = LayoutGrid__src__Util__layout_grid_units.LayoutPercentage.prototype;
  dart.addTypeTests(LayoutGrid__src__Util__layout_grid_units.LayoutPercentage);
  const percentage$ = Symbol("LayoutPercentage.percentage");
  dart.setMethodSignature(LayoutGrid__src__Util__layout_grid_units.LayoutPercentage, () => ({
    __proto__: dart.getMethods(LayoutGrid__src__Util__layout_grid_units.LayoutPercentage.__proto__),
    getValue: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(LayoutGrid__src__Util__layout_grid_units.LayoutPercentage, "package:layout_grid_overview/LayoutGrid/src/Util/layout_grid_units.dart");
  dart.setFieldSignature(LayoutGrid__src__Util__layout_grid_units.LayoutPercentage, () => ({
    __proto__: dart.getFields(LayoutGrid__src__Util__layout_grid_units.LayoutPercentage.__proto__),
    percentage: dart.fieldType(core.double)
  }));
  LayoutGrid__src__Util__layout_grid_units.LayoutFraction = class LayoutFraction extends LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit {
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
  (LayoutGrid__src__Util__layout_grid_units.LayoutFraction.new = function(opts) {
    let fraction = opts && 'fraction' in opts ? opts.fraction : 0;
    let priority = opts && 'priority' in opts ? opts.priority : 0;
    let referenceLine = opts && 'referenceLine' in opts ? opts.referenceLine : -1;
    this[fraction$] = fraction;
    if (!(fraction != null)) dart.assertFailed(null, "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_units.dart", 41, 5, "fraction != null");
    LayoutGrid__src__Util__layout_grid_units.LayoutFraction.__proto__.new.call(this, {priority: priority, referenceLine: referenceLine});
    ;
  }).prototype = LayoutGrid__src__Util__layout_grid_units.LayoutFraction.prototype;
  dart.addTypeTests(LayoutGrid__src__Util__layout_grid_units.LayoutFraction);
  const fraction$ = Symbol("LayoutFraction.fraction");
  dart.setMethodSignature(LayoutGrid__src__Util__layout_grid_units.LayoutFraction, () => ({
    __proto__: dart.getMethods(LayoutGrid__src__Util__layout_grid_units.LayoutFraction.__proto__),
    getValue: dart.fnType(core.double, [core.int, core.double])
  }));
  dart.setLibraryUri(LayoutGrid__src__Util__layout_grid_units.LayoutFraction, "package:layout_grid_overview/LayoutGrid/src/Util/layout_grid_units.dart");
  dart.setFieldSignature(LayoutGrid__src__Util__layout_grid_units.LayoutFraction, () => ({
    __proto__: dart.getFields(LayoutGrid__src__Util__layout_grid_units.LayoutFraction.__proto__),
    fraction: dart.fieldType(core.int)
  }));
  LayoutGrid__src__Util__layout_grid_units.LayoutMinMax = class LayoutMinMax extends LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit {
    get unit() {
      return this[unit$];
    }
    set unit(value) {
      this[unit$] = value;
    }
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
    get subPriority() {
      return this[subPriority$];
    }
    set subPriority(value) {
      this[subPriority$] = value;
    }
  };
  (LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.new = function(opts) {
    let minUnit = opts && 'minUnit' in opts ? opts.minUnit : null;
    let maxUnit = opts && 'maxUnit' in opts ? opts.maxUnit : null;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let priority = opts && 'priority' in opts ? opts.priority : 0;
    let referenceLine = opts && 'referenceLine' in opts ? opts.referenceLine : -1;
    let subPriority = opts && 'subPriority' in opts ? opts.subPriority : 0;
    this[minUnit$] = minUnit;
    this[maxUnit$] = maxUnit;
    this[unit$] = unit;
    this[subPriority$] = subPriority;
    if (!!(LayoutGrid__src__Util__layout_grid_units.LayoutFraction.is(minUnit) && LayoutGrid__src__Util__layout_grid_units.LayoutFraction.is(maxUnit))) dart.assertFailed(null, "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_units.dart", 60, 5, "!(minUnit is LayoutFraction && maxUnit is LayoutFraction)");
    LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.__proto__.new.call(this, {priority: priority, referenceLine: referenceLine});
    ;
  }).prototype = LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.prototype;
  dart.addTypeTests(LayoutGrid__src__Util__layout_grid_units.LayoutMinMax);
  const unit$ = Symbol("LayoutMinMax.unit");
  const minUnit$ = Symbol("LayoutMinMax.minUnit");
  const maxUnit$ = Symbol("LayoutMinMax.maxUnit");
  const subPriority$ = Symbol("LayoutMinMax.subPriority");
  dart.setLibraryUri(LayoutGrid__src__Util__layout_grid_units.LayoutMinMax, "package:layout_grid_overview/LayoutGrid/src/Util/layout_grid_units.dart");
  dart.setFieldSignature(LayoutGrid__src__Util__layout_grid_units.LayoutMinMax, () => ({
    __proto__: dart.getFields(LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.__proto__),
    unit: dart.fieldType(LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit),
    minUnit: dart.fieldType(LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit),
    maxUnit: dart.fieldType(LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit),
    subPriority: dart.fieldType(core.int)
  }));
  LayoutGrid__src__Util__layout_grid_units.LayoutDependent = class LayoutDependent extends LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit {
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
    getValue(list) {
      return dart.notNull(list[$_get](this.line)) * dart.notNull(this.multiplicator);
    }
  };
  (LayoutGrid__src__Util__layout_grid_units.LayoutDependent.new = function(opts) {
    let line = opts && 'line' in opts ? opts.line : null;
    let multiplicator = opts && 'multiplicator' in opts ? opts.multiplicator : 1.0;
    let priority = opts && 'priority' in opts ? opts.priority : 0;
    let referenceLine = opts && 'referenceLine' in opts ? opts.referenceLine : -1;
    this[line$] = line;
    this[multiplicator$] = multiplicator;
    if (!(line != null)) dart.assertFailed(multiplicator != null, "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_units.dart", 74, 5, "line != null");
    LayoutGrid__src__Util__layout_grid_units.LayoutDependent.__proto__.new.call(this, {priority: priority, referenceLine: referenceLine});
    ;
  }).prototype = LayoutGrid__src__Util__layout_grid_units.LayoutDependent.prototype;
  dart.addTypeTests(LayoutGrid__src__Util__layout_grid_units.LayoutDependent);
  const line$ = Symbol("LayoutDependent.line");
  const multiplicator$ = Symbol("LayoutDependent.multiplicator");
  dart.setMethodSignature(LayoutGrid__src__Util__layout_grid_units.LayoutDependent, () => ({
    __proto__: dart.getMethods(LayoutGrid__src__Util__layout_grid_units.LayoutDependent.__proto__),
    getValue: dart.fnType(core.double, [core.List$(core.double)])
  }));
  dart.setLibraryUri(LayoutGrid__src__Util__layout_grid_units.LayoutDependent, "package:layout_grid_overview/LayoutGrid/src/Util/layout_grid_units.dart");
  dart.setFieldSignature(LayoutGrid__src__Util__layout_grid_units.LayoutDependent, () => ({
    __proto__: dart.getFields(LayoutGrid__src__Util__layout_grid_units.LayoutDependent.__proto__),
    line: dart.fieldType(core.int),
    multiplicator: dart.fieldType(core.double)
  }));
  dart.trackLibraries("packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_units", {
    "package:layout_grid_overview/LayoutGrid/src/Util/layout_grid_units.dart": LayoutGrid__src__Util__layout_grid_units
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_units.dart"],"names":[],"mappings":";;;;;;;;;IAWS;;;;;;;AAGL,YAAO;IACT;;;QAXO,kDAAS;QACV,wDAAW;QACX,uEAAgB,CAAC;IAFhB;UAIL,MAAM,IAAI;AACT,6FAAgB,QAAQ,iBAAiB,aAAa;;EAAC;;;;;;;;;;;;;IAkBnD;;;;;;aAEgB;AACrB,YAAkB,AAAM,cAAjB,mBAAa,mBAAM,KAAK;IACjC;;;QAXO,8DAAa;QACd,wDAAW;QACX,uEAAgB,CAAC;IAFhB;UAIM,aAAX,UAAU,KAAI;AACb,kGAAgB,QAAQ,iBAAiB,aAAa;;EAAC;;;;;;;;;;;;;IAkBtD;;;;;;aAEgB,gBAAuB;AACzC,YAAgB,AAAiB,cAA1B,8BAAW,cAAc,iBAAG,SAAS;IAC9C;;;QAXO,wDAAW;QACZ,wDAAW;QACX,uEAAgB,CAAC;IAFhB;UAIL,QAAQ,IAAI;AACX,gGAAgB,QAAQ,iBAAiB,aAAa;;EAAC;;;;;;;;;;;;;IAqB/C;;;;;;IAAK;;;;;;IAAS;;;;;;IACrB;;;;;;;;QAXG;QACA;QACA;QACD,wDAAW;QACX,uEAAgB,CAAC;QAChB,iEAAc;IALd;IACA;IACA;IAGA;SAEL,EAAU,2DAAR,OAAO,KAA8B,2DAAR,OAAO;AACrC,8FAAgB,QAAQ,iBAAiB,aAAa;;EAAC;;;;;;;;;;;;;;;IAiBtD;;;;;;IACG;;;;;;aAEsB;AAC3B,YAAkB,cAAX,AAAI,IAAA,QAAC,2BAAQ;IACtB;;;QAdO;QACA,uEAAgB;QACjB,wDAAW;QACX,uEAAgB,CAAC;IAHhB;IACA;UAIL,IAAI,IAAI,yBACR,aAAa,IAAI;AAChB,iGAAgB,QAAQ,iBAAiB,aAAa;;EAAC","file":"layout_grid_units.ddc.js"}');
  // Exports:
  return {
    LayoutGrid__src__Util__layout_grid_units: LayoutGrid__src__Util__layout_grid_units
  };
});

//# sourceMappingURL=layout_grid_units.ddc.js.map
