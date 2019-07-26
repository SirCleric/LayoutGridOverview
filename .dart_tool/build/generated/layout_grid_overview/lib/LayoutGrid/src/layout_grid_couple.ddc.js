define(['dart_sdk', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/animation'], function(dart_sdk, animation, ui, animation$) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__painting__box_fit = animation.src__painting__box_fit;
  const src__painting__alignment = animation.src__painting__alignment;
  const ui$ = ui.ui;
  const src__widgets__framework = animation$.src__widgets__framework;
  const LayoutGrid__src__layout_grid_couple = Object.create(dart.library);
  let const$;
  let const$0;
  LayoutGrid__src__layout_grid_couple.LayoutGridCouple = class LayoutGridCouple extends core.Object {
    get widget() {
      return this[widget$];
    }
    set widget(value) {
      super.widget = value;
    }
    get col0() {
      return this[col0$];
    }
    set col0(value) {
      this[col0$] = value;
    }
    get col1() {
      return this[col1$];
    }
    set col1(value) {
      this[col1$] = value;
    }
    get row0() {
      return this[row0$];
    }
    set row0(value) {
      this[row0$] = value;
    }
    get row1() {
      return this[row1$];
    }
    set row1(value) {
      this[row1$] = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get boxFit() {
      return this[boxFit$];
    }
    set boxFit(value) {
      super.boxFit = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get sizeKey() {
      return this[sizeKey$];
    }
    set sizeKey(value) {
      super.sizeKey = value;
    }
  };
  (LayoutGrid__src__layout_grid_couple.LayoutGridCouple.new = function(opts) {
    let widget = opts && 'widget' in opts ? opts.widget : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let col0 = opts && 'col0' in opts ? opts.col0 : -1;
    let col1 = opts && 'col1' in opts ? opts.col1 : -1;
    let row0 = opts && 'row0' in opts ? opts.row0 : -1;
    let row1 = opts && 'row1' in opts ? opts.row1 : -1;
    let boxFit = opts && 'boxFit' in opts ? opts.boxFit : src__painting__box_fit.BoxFit.none;
    let alignment = opts && 'alignment' in opts ? opts.alignment : const$ || (const$ = dart.const(new src__painting__alignment.Alignment.new(0.0, 0.0)));
    let offset = opts && 'offset' in opts ? opts.offset : const$0 || (const$0 = dart.const(new ui$.Offset.new(0.0, 0.0)));
    let sizeKey = opts && 'sizeKey' in opts ? opts.sizeKey : null;
    this[widget$] = widget;
    this[name$] = name;
    this[col0$] = col0;
    this[col1$] = col1;
    this[row0$] = row0;
    this[row1$] = row1;
    this[boxFit$] = boxFit;
    this[alignment$] = alignment;
    this[offset$] = offset;
    this[sizeKey$] = sizeKey;
    ;
  }).prototype = LayoutGrid__src__layout_grid_couple.LayoutGridCouple.prototype;
  dart.addTypeTests(LayoutGrid__src__layout_grid_couple.LayoutGridCouple);
  const widget$ = Symbol("LayoutGridCouple.widget");
  const col0$ = Symbol("LayoutGridCouple.col0");
  const col1$ = Symbol("LayoutGridCouple.col1");
  const row0$ = Symbol("LayoutGridCouple.row0");
  const row1$ = Symbol("LayoutGridCouple.row1");
  const name$ = Symbol("LayoutGridCouple.name");
  const boxFit$ = Symbol("LayoutGridCouple.boxFit");
  const alignment$ = Symbol("LayoutGridCouple.alignment");
  const offset$ = Symbol("LayoutGridCouple.offset");
  const sizeKey$ = Symbol("LayoutGridCouple.sizeKey");
  dart.setLibraryUri(LayoutGrid__src__layout_grid_couple.LayoutGridCouple, "package:layout_grid_overview/LayoutGrid/src/layout_grid_couple.dart");
  dart.setFieldSignature(LayoutGrid__src__layout_grid_couple.LayoutGridCouple, () => ({
    __proto__: dart.getFields(LayoutGrid__src__layout_grid_couple.LayoutGridCouple.__proto__),
    widget: dart.finalFieldType(src__widgets__framework.Widget),
    col0: dart.fieldType(core.int),
    col1: dart.fieldType(core.int),
    row0: dart.fieldType(core.int),
    row1: dart.fieldType(core.int),
    name: dart.finalFieldType(core.String),
    boxFit: dart.finalFieldType(src__painting__box_fit.BoxFit),
    alignment: dart.finalFieldType(src__painting__alignment.Alignment),
    offset: dart.finalFieldType(ui$.Offset),
    sizeKey: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/layout_grid_overview/LayoutGrid/src/layout_grid_couple", {
    "package:layout_grid_overview/LayoutGrid/src/layout_grid_couple.dart": LayoutGrid__src__layout_grid_couple
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid_couple.dart"],"names":[],"mappings":";;;;;;;;;;;;;IAsBe;;;;;;IAGT;;;;;;IAAM;;;;;;IAAM;;;;;;IAAM;;;;;;IAGT;;;;;;IAMA;;;;;;IAEG;;;;;;IAGH;;;;;;IAGA;;;;;;;;QAhCO;QACX;QACA,4CAAO,CAAC;QACR,4CAAO,CAAC;QACR,4CAAO,CAAC;QACR,4CAAO,CAAC;QACR,kDAAgB;QAChB,2DAAkB,0EAAU,KAAK;QACjC,kDAAe,oDAAO,KAAK;QAC3B;IATW;IACX;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;;EAAS","file":"layout_grid_couple.ddc.js"}');
  // Exports:
  return {
    LayoutGrid__src__layout_grid_couple: LayoutGrid__src__layout_grid_couple
  };
});

//# sourceMappingURL=layout_grid_couple.ddc.js.map
