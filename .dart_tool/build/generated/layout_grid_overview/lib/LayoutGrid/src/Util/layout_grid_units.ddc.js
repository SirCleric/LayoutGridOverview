define(['dart_sdk', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_private_units', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, layout_grid_private_units, animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const LayoutGrid__src__Util__layout_grid_private_units = layout_grid_private_units.LayoutGrid__src__Util__layout_grid_private_units;
  const src__painting__basic_types = animation.src__painting__basic_types;
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
    this[pixels$] = pixels;
    if (!(pixels != null)) dart.assertFailed(null, "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_units.dart", 10, 5, "pixels != null");
    LayoutGrid__src__Util__layout_grid_units.LayoutPixel.__proto__.new.call(this, {priority: priority});
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
    this[percentage$] = percentage;
    if (!(dart.notNull(percentage) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_units.dart", 25, 5, "percentage >= 0.0");
    LayoutGrid__src__Util__layout_grid_units.LayoutPercentage.__proto__.new.call(this, {priority: priority});
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
    this[fraction$] = fraction;
    if (!(fraction != null)) dart.assertFailed(null, "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_units.dart", 40, 5, "fraction != null");
    LayoutGrid__src__Util__layout_grid_units.LayoutFraction.__proto__.new.call(this, {priority: priority});
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
    let subPriority = opts && 'subPriority' in opts ? opts.subPriority : 0;
    this[minUnit$] = minUnit;
    this[maxUnit$] = maxUnit;
    this[unit$] = unit;
    this[subPriority$] = subPriority;
    if (!!(LayoutGrid__src__Util__layout_grid_units.LayoutFraction.is(minUnit) && LayoutGrid__src__Util__layout_grid_units.LayoutFraction.is(maxUnit))) dart.assertFailed(null, "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_units.dart", 58, 5, "!(minUnit is LayoutFraction && maxUnit is LayoutFraction)");
    LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.__proto__.new.call(this, {priority: priority});
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
    get function() {
      return this[func];
    }
    set function(value) {
      this[func] = value;
    }
    get lineAxis() {
      return this[lineAxis$];
    }
    set lineAxis(value) {
      this[lineAxis$] = value;
    }
    getValue(list) {
      return this.function(list[$_get](this.line));
    }
  };
  (LayoutGrid__src__Util__layout_grid_units.LayoutDependent.new = function(opts) {
    let line = opts && 'line' in opts ? opts.line : null;
    let lineAxis = opts && 'lineAxis' in opts ? opts.lineAxis : src__painting__basic_types.Axis.vertical;
    let function$0 = opts && 'function' in opts ? opts.function : null;
    let priority = opts && 'priority' in opts ? opts.priority : 0;
    this[line$] = line;
    this[lineAxis$] = lineAxis;
    this[func] = function$0;
    if (!(line != null)) dart.assertFailed(null, "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_units.dart", 72, 5, "line != null");
    LayoutGrid__src__Util__layout_grid_units.LayoutDependent.__proto__.new.call(this, {priority: priority});
    ;
  }).prototype = LayoutGrid__src__Util__layout_grid_units.LayoutDependent.prototype;
  dart.addTypeTests(LayoutGrid__src__Util__layout_grid_units.LayoutDependent);
  const line$ = Symbol("LayoutDependent.line");
  const func = Symbol("LayoutDependent.function");
  const lineAxis$ = Symbol("LayoutDependent.lineAxis");
  dart.setMethodSignature(LayoutGrid__src__Util__layout_grid_units.LayoutDependent, () => ({
    __proto__: dart.getMethods(LayoutGrid__src__Util__layout_grid_units.LayoutDependent.__proto__),
    getValue: dart.fnType(core.double, [core.List$(core.double)])
  }));
  dart.setLibraryUri(LayoutGrid__src__Util__layout_grid_units.LayoutDependent, "package:layout_grid_overview/LayoutGrid/src/Util/layout_grid_units.dart");
  dart.setFieldSignature(LayoutGrid__src__Util__layout_grid_units.LayoutDependent, () => ({
    __proto__: dart.getFields(LayoutGrid__src__Util__layout_grid_units.LayoutDependent.__proto__),
    line: dart.fieldType(core.int),
    function: dart.fieldType(dart.fnType(core.double, [core.double])),
    lineAxis: dart.fieldType(src__painting__basic_types.Axis)
  }));
  dart.trackLibraries("packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_units", {
    "package:layout_grid_overview/LayoutGrid/src/Util/layout_grid_units.dart": LayoutGrid__src__Util__layout_grid_units
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_units.dart"],"names":[],"mappings":";;;;;;;;;;IAYS;;;;;;;AAGL,YAAO;IACT;;;QAVO,kDAAS;QACV,wDAAW;IADV;UAGL,MAAM,IAAI;AACT,6FAAgB,QAAQ;;EAAC;;;;;;;;;;;;;IAiBrB;;;;;;aAEgB;AACrB,YAAkB,AAAM,cAAjB,mBAAa,mBAAM,KAAK;IACjC;;;QAVO,8DAAa;QACd,wDAAW;IADV;UAGM,aAAX,UAAU,KAAI;AACb,kGAAgB,QAAQ;;EAAC;;;;;;;;;;;;;IAiBxB;;;;;;aAEgB,gBAAuB;AACzC,YAAgB,AAAiB,cAA1B,8BAAW,cAAc,iBAAG,SAAS;IAC9C;;;QAVO,wDAAW;QACZ,wDAAW;IADV;UAGL,QAAQ,IAAI;AACX,gGAAgB,QAAQ;;EAAC;;;;;;;;;;;;;IAoBjB;;;;;;IAAK;;;;;;IAAS;;;;;;IACrB;;;;;;;;QAVG;QACA;QACA;QACD,wDAAW;QACV,iEAAc;IAJd;IACA;IACA;IAEA;SAEL,EAAU,2DAAR,OAAO,KAA8B,2DAAR,OAAO;AACrC,8FAAgB,QAAQ;;EAAC;;;;;;;;;;;;;;;IAgBxB;;;;;;IACoB;;;;;;IACnB;;;;;;aAEwB;AAC3B,YAAO,eAAS,AAAI,IAAA,QAAC;IACvB;;;QAdiB;QACV,wDAAgB;QACN;QACX,wDAAW;IAHA;IACV;IACU;UAGf,IAAI,IAAI;AACP,iGAAgB,QAAQ;;EAAC","file":"layout_grid_units.ddc.js"}');
  // Exports:
  return {
    LayoutGrid__src__Util__layout_grid_units: LayoutGrid__src__Util__layout_grid_units
  };
});

//# sourceMappingURL=layout_grid_units.ddc.js.map
