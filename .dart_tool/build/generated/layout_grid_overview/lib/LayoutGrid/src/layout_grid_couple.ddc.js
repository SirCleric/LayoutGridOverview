define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web/animation', 'packages/flutter_web/src/foundation/assertions'], function(dart_sdk, ui, animation, assertions) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui$ = ui.ui;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__foundation__key = assertions.src__foundation__key;
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
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    get shouldOverwrite() {
      return this[shouldOverwrite$];
    }
    set shouldOverwrite(value) {
      super.shouldOverwrite = value;
    }
    get key() {
      return this[key$];
    }
    set key(value) {
      super.key = value;
    }
    get modelKey() {
      return this[modelKey$];
    }
    set modelKey(value) {
      super.modelKey = value;
    }
  };
  (LayoutGrid__src__layout_grid_couple.LayoutGridCouple.new = function(opts) {
    let widget = opts && 'widget' in opts ? opts.widget : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let col0 = opts && 'col0' in opts ? opts.col0 : -1;
    let col1 = opts && 'col1' in opts ? opts.col1 : -1;
    let row0 = opts && 'row0' in opts ? opts.row0 : -1;
    let row1 = opts && 'row1' in opts ? opts.row1 : -1;
    let size = opts && 'size' in opts ? opts.size : const$ || (const$ = dart.const(new ui$.Size.new(0.0, 0.0)));
    let position = opts && 'position' in opts ? opts.position : const$0 || (const$0 = dart.const(new ui$.Offset.new(0.0, 0.0)));
    let shouldOverwrite = opts && 'shouldOverwrite' in opts ? opts.shouldOverwrite : false;
    let key = opts && 'key' in opts ? opts.key : null;
    let modelKey = opts && 'modelKey' in opts ? opts.modelKey : null;
    this[widget$] = widget;
    this[name$] = name;
    this[col0$] = col0;
    this[col1$] = col1;
    this[row0$] = row0;
    this[row1$] = row1;
    this[size$] = size;
    this[position$] = position;
    this[shouldOverwrite$] = shouldOverwrite;
    this[key$] = key;
    this[modelKey$] = modelKey;
    ;
  }).prototype = LayoutGrid__src__layout_grid_couple.LayoutGridCouple.prototype;
  dart.addTypeTests(LayoutGrid__src__layout_grid_couple.LayoutGridCouple);
  const widget$ = Symbol("LayoutGridCouple.widget");
  const col0$ = Symbol("LayoutGridCouple.col0");
  const col1$ = Symbol("LayoutGridCouple.col1");
  const row0$ = Symbol("LayoutGridCouple.row0");
  const row1$ = Symbol("LayoutGridCouple.row1");
  const name$ = Symbol("LayoutGridCouple.name");
  const size$ = Symbol("LayoutGridCouple.size");
  const position$ = Symbol("LayoutGridCouple.position");
  const shouldOverwrite$ = Symbol("LayoutGridCouple.shouldOverwrite");
  const key$ = Symbol("LayoutGridCouple.key");
  const modelKey$ = Symbol("LayoutGridCouple.modelKey");
  dart.setLibraryUri(LayoutGrid__src__layout_grid_couple.LayoutGridCouple, "package:layout_grid_overview/LayoutGrid/src/layout_grid_couple.dart");
  dart.setFieldSignature(LayoutGrid__src__layout_grid_couple.LayoutGridCouple, () => ({
    __proto__: dart.getFields(LayoutGrid__src__layout_grid_couple.LayoutGridCouple.__proto__),
    widget: dart.finalFieldType(src__widgets__framework.Widget),
    col0: dart.fieldType(core.int),
    col1: dart.fieldType(core.int),
    row0: dart.fieldType(core.int),
    row1: dart.fieldType(core.int),
    name: dart.finalFieldType(core.String),
    size: dart.finalFieldType(ui$.Size),
    position: dart.finalFieldType(ui$.Offset),
    shouldOverwrite: dart.finalFieldType(core.bool),
    key: dart.finalFieldType(src__foundation__key.Key),
    modelKey: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/layout_grid_overview/LayoutGrid/src/layout_grid_couple", {
    "package:layout_grid_overview/LayoutGrid/src/layout_grid_couple.dart": LayoutGrid__src__layout_grid_couple
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid_couple.dart"],"names":[],"mappings":";;;;;;;;;;;;IAuBe;;;;;;IAGT;;;;;;IAAM;;;;;;IAAM;;;;;;IAAM;;;;;;IAGT;;;;;;IAGF;;;;;;IAGE;;;;;;IAGF;;;;;;IAGD;;;;;;IAGG;;;;;;;;QAlCO;QACX;QACA,4CAAO,CAAC;QACR,4CAAO,CAAC;QACR,4CAAO,CAAC;QACR,4CAAO,CAAC;QACR,4CAAa,gDAAK,KAAK;QACvB,wDAAiB,oDAAO,KAAK;QAC7B,6EAAkB;QAClB;QACA;IAVW;IACX;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;;EAAU","file":"layout_grid_couple.ddc.js"}');
  // Exports:
  return {
    LayoutGrid__src__layout_grid_couple: LayoutGrid__src__layout_grid_couple
  };
});

//# sourceMappingURL=layout_grid_couple.ddc.js.map
