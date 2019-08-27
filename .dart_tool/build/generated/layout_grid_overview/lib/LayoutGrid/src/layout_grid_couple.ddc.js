define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/animation', 'packages/flutter_web/src/foundation/assertions'], function(dart_sdk, ui, animation, animation$, assertions) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui$ = ui.ui;
  const src__painting__alignment = animation.src__painting__alignment;
  const src__widgets__framework = animation$.src__widgets__framework;
  const src__foundation__key = assertions.src__foundation__key;
  const LayoutGrid__src__layout_grid_couple = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $_set = dartx._set;
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
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
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
    get key() {
      return this[key$];
    }
    set key(value) {
      super.key = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get modelKey() {
      return this[modelKey$];
    }
    set modelKey(value) {
      super.modelKey = value;
    }
    static getPositionedGridCoupleList(areas, couples) {
      let _couples = couples;
      let _name = null;
      for (let _i = 0; _i < dart.notNull(_couples[$length]); _i = _i + 1) {
        _name = _couples[$_get](_i).name;
        if (_name != null) {
          _couples[$_set](_i, LayoutGrid__src__layout_grid_couple.LayoutGridCouple._getPositionededGridCouple(areas, _couples[$_get](_i)));
        }
      }
      return _couples;
    }
    static _getPositionededGridCouple(areas, couple) {
      let _couple = couple;
      for (let _i = 0; _i < dart.notNull(areas[$length]); _i = _i + 1) {
        for (let _j = 0; _j < dart.notNull(areas[$_get](_i)[$length]); _j = _j + 1) {
          if (areas[$_get](_i)[$_get](_j) == _couple.name) {
            if (dart.notNull(_couple.col0) > _j || _couple.col0 === -1) {
              _couple.col0 = _j;
            }
            if (dart.notNull(_couple.col1) < _j + 1 || _couple.col1 === -1) {
              _couple.col1 = _j + 1;
            }
            if (dart.notNull(_couple.row0) > _i || _couple.row0 === -1) {
              _couple.row0 = _i;
            }
            if (dart.notNull(_couple.row1) < _i + 1 || _couple.row1 === -1) {
              _couple.row1 = _i + 1;
            }
          }
        }
      }
      if (_couple.col0 === -1) {
        dart.throw("Could not find the area specified by the LayoutGridCouple, did you write it correctly?");
      }
      return _couple;
    }
  };
  (LayoutGrid__src__layout_grid_couple.LayoutGridCouple.new = function(opts) {
    let widget = opts && 'widget' in opts ? opts.widget : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let col0 = opts && 'col0' in opts ? opts.col0 : -1;
    let col1 = opts && 'col1' in opts ? opts.col1 : -1;
    let row0 = opts && 'row0' in opts ? opts.row0 : -1;
    let row1 = opts && 'row1' in opts ? opts.row1 : -1;
    let offset = opts && 'offset' in opts ? opts.offset : const$ || (const$ = dart.const(new ui$.Offset.new(0.0, 0.0)));
    let size = opts && 'size' in opts ? opts.size : null;
    let position = opts && 'position' in opts ? opts.position : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : const$0 || (const$0 = dart.const(new src__painting__alignment.Alignment.new(-1.0, -1.0)));
    let modelKey = opts && 'modelKey' in opts ? opts.modelKey : null;
    this[widget$] = widget;
    this[name$] = name;
    this[col0$] = col0;
    this[col1$] = col1;
    this[row0$] = row0;
    this[row1$] = row1;
    this[offset$] = offset;
    this[size$] = size;
    this[position$] = position;
    this[key$] = key;
    this[alignment$] = alignment;
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
  const offset$ = Symbol("LayoutGridCouple.offset");
  const size$ = Symbol("LayoutGridCouple.size");
  const position$ = Symbol("LayoutGridCouple.position");
  const key$ = Symbol("LayoutGridCouple.key");
  const alignment$ = Symbol("LayoutGridCouple.alignment");
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
    offset: dart.finalFieldType(ui$.Offset),
    size: dart.finalFieldType(ui$.Size),
    position: dart.finalFieldType(ui$.Offset),
    key: dart.finalFieldType(src__foundation__key.Key),
    alignment: dart.finalFieldType(src__painting__alignment.Alignment),
    modelKey: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/layout_grid_overview/LayoutGrid/src/layout_grid_couple", {
    "package:layout_grid_overview/LayoutGrid/src/layout_grid_couple.dart": LayoutGrid__src__layout_grid_couple
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid_couple.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IAwBe;;;;;;IAGT;;;;;;IAAM;;;;;;IAAM;;;;;;IAAM;;;;;;IAGT;;;;;;IAGA;;;;;;IAGF;;;;;;IAGE;;;;;;IAGH;;;;;;IAGM;;;;;;IAGH;;;;;;uCAEgE,OAA8B;AAClF,qBAAW,OAAO;AAClC;AAEP,eAAS,KAAK,GAAG,AAAG,EAAD,gBAAG,AAAS,QAAD,YAAS,KAAA,AAAE,EAAA;QACvC,QAAQ,AAAQ,AAAK,QAAL,QAAC,EAAE;AAEnB,YAAI,KAAK,IAAI;UACX,AAAQ,QAAA,QAAC,EAAE,EAAI,gFAA2B,KAAK,EAAE,AAAQ,QAAA,QAAC,EAAE;;;AAIhE,YAAO,SAAQ;IACjB;sCAEsE,OAAwB;AAC3E,oBAAU,MAAM;AAEjC,eAAS,KAAK,GAAG,AAAG,EAAD,gBAAG,AAAM,KAAD,YAAS,KAAA,AAAE,EAAA;AACpC,iBAAS,KAAK,GAAG,AAAG,EAAD,gBAAG,AAAK,AAAK,KAAL,QAAC,EAAE,aAAU,KAAA,AAAE,EAAA;AACxC,cAAI,AAAK,AAAI,AAAK,KAAT,QAAC,EAAE,SAAE,EAAE,KAAK,AAAQ,OAAD;AAC1B,gBAAiB,aAAb,AAAQ,OAAD,SAAQ,EAAE,IAAI,AAAQ,AAAK,OAAN,UAAS,CAAC;cACxC,AAAQ,OAAD,QAAQ,EAAE;;AAEnB,gBAAiB,aAAb,AAAQ,OAAD,SAAQ,AAAG,EAAD,GAAG,KAAK,AAAQ,AAAK,OAAN,UAAS,CAAC;cAC5C,AAAQ,OAAD,QAAQ,AAAG,EAAD,GAAG;;AAGtB,gBAAiB,aAAb,AAAQ,OAAD,SAAQ,EAAE,IAAI,AAAQ,AAAK,OAAN,UAAS,CAAC;cACxC,AAAQ,OAAD,QAAQ,EAAE;;AAEnB,gBAAiB,aAAb,AAAQ,OAAD,SAAQ,AAAG,EAAD,GAAG,KAAK,AAAQ,AAAK,OAAN,UAAS,CAAC;cAC5C,AAAQ,OAAD,QAAQ,AAAG,EAAD,GAAG;;;;;AAO5B,UAAI,AAAQ,AAAK,OAAN,UAAS,CAAC;QACnB,WAAO;;AAGT,YAAO,QAAO;IAChB;;;QApFoB;QACX;QACA,4CAAO,CAAC;QACR,4CAAO,CAAC;QACR,4CAAO,CAAC;QACR,4CAAO,CAAC;QACR,kDAAe,kDAAO,KAAK;QAC3B;QACA;QACA;QACA,2DAAkB,4EAAU,CAAC,KAAK,CAAC;QACnC;IAXW;IACX;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;;EAAU","file":"layout_grid_couple.ddc.js"}');
  // Exports:
  return {
    LayoutGrid__src__layout_grid_couple: LayoutGrid__src__layout_grid_couple
  };
});

//# sourceMappingURL=layout_grid_couple.ddc.js.map
