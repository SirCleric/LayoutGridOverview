define(['dart_sdk', 'packages/flutter_web/animation', 'packages/layout_grid_overview/LayoutGrid/src/Util/inherited_size_model', 'packages/flutter_web_ui/ui', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_child', 'packages/layout_grid_overview/LayoutGrid/src/Util/line_creation', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit_classes', 'packages/layout_grid_overview/LayoutGrid/src/layout_grid_couple'], function(dart_sdk, animation, inherited_size_model, ui, layout_grid_child, line_creation, layout_grid_unit_classes, layout_grid_couple) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__stack = animation.src__rendering__stack;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const LayoutGrid__src__Util__inherited_size_model = inherited_size_model.LayoutGrid__src__Util__inherited_size_model;
  const ui$ = ui.ui;
  const LayoutGrid__src__Util__layout_grid_child = layout_grid_child.LayoutGrid__src__Util__layout_grid_child;
  const LayoutGrid__src__Util__line_creation = line_creation.LayoutGrid__src__Util__line_creation;
  const LayoutGrid__src__Util__layout_grid_unit_classes = layout_grid_unit_classes.LayoutGrid__src__Util__layout_grid_unit_classes;
  const LayoutGrid__src__layout_grid_couple = layout_grid_couple.LayoutGrid__src__layout_grid_couple;
  const LayoutGrid__src__Util__nested_layout_grid = Object.create(dart.library);
  const $last = dartx.last;
  const $length = dartx.length;
  const $_get = dartx._get;
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(src__widgets__framework.Widget)))();
  let intToLayoutGridChild = () => (intToLayoutGridChild = dart.constFn(dart.fnType(LayoutGrid__src__Util__layout_grid_child.LayoutGridChild, [core.int])))();
  const _col = dart.privateName(LayoutGrid__src__Util__nested_layout_grid, "_col");
  const _rows = dart.privateName(LayoutGrid__src__Util__nested_layout_grid, "_rows");
  const _top = dart.privateName(LayoutGrid__src__Util__nested_layout_grid, "_top");
  const _left = dart.privateName(LayoutGrid__src__Util__nested_layout_grid, "_left");
  const _width = dart.privateName(LayoutGrid__src__Util__nested_layout_grid, "_width");
  const _height = dart.privateName(LayoutGrid__src__Util__nested_layout_grid, "_height");
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  LayoutGrid__src__Util__nested_layout_grid.NestedLayoutGrid = class NestedLayoutGrid extends src__widgets__framework.StatelessWidget {
    get columns() {
      return this[columns$];
    }
    set columns(value) {
      super.columns = value;
    }
    get rows() {
      return this[rows$];
    }
    set rows(value) {
      super.rows = value;
    }
    get couples() {
      return this[couples$];
    }
    set couples(value) {
      super.couples = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    build(context) {
      this.updateGrid(this.width, this.height);
      return new src__widgets__container.Container.new({height: this[_rows][$last], width: this[_col][$last], child: new src__widgets__basic.Stack.new({fit: src__rendering__stack.StackFit.expand, children: ListOfWidget().generate(this.couples[$length], dart.fn(index => {
            this[_top] = this[_rows][$_get](this.couples[$_get](index).row0);
            this[_left] = this[_col][$_get](this.couples[$_get](index).col0);
            this[_height] = dart.notNull(this[_rows][$_get](this.couples[$_get](index).row1)) - dart.notNull(this[_rows][$_get](this.couples[$_get](index).row0)) >= 0.0 ? dart.notNull(this[_rows][$_get](this.couples[$_get](index).row1)) - dart.notNull(this[_rows][$_get](this.couples[$_get](index).row0)) : 0.0;
            this[_width] = dart.notNull(this[_col][$_get](this.couples[$_get](index).col1)) - dart.notNull(this[_col][$_get](this.couples[$_get](index).col0)) >= 0.0 ? dart.notNull(this[_col][$_get](this.couples[$_get](index).col1)) - dart.notNull(this[_col][$_get](this.couples[$_get](index).col0)) : 0.0;
            if (this.couples[$_get](index).sizeKey != null) {
              LayoutGrid__src__Util__inherited_size_model.InheritedSizeModel.of(context).updateSize(this.couples[$_get](index).sizeKey, new ui$.Size.new(this.width, this.height));
            }
            return new LayoutGrid__src__Util__layout_grid_child.LayoutGridChild.new({key: new src__widgets__framework.UniqueKey.new(), top: dart.notNull(this[_top]) + dart.notNull(this.couples[$_get](index).offset.dy), left: dart.notNull(this[_left]) + dart.notNull(this.couples[$_get](index).offset.dx), height: this[_height], width: this[_width], widget: this.couples[$_get](index).widget, boxFit: this.couples[$_get](index).boxFit, alignment: this.couples[$_get](index).alignment, $creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 20, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/nested_layout_grid.dart", parameterLocations: const$7 || (const$7 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 15, name: "key"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 65, column: 15, name: "top"}))), const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 15, name: "left"}))), const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 67, column: 15, name: "height"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 15, name: "width"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 69, column: 15, name: "widget"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 15, name: "boxFit"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 71, column: 15, name: "alignment"})))], src__widgets__widget_inspector._Location))})))});
          }, intToLayoutGridChild())), $creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/nested_layout_grid.dart", parameterLocations: const$11 || (const$11 = dart.constList([const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 11, name: "fit"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 11, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/nested_layout_grid.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 7, name: "height"}))), const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 7, name: "width"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    updateGrid(width, height) {
      this[_col] = LayoutGrid__src__Util__line_creation.calculateGridLines(this.columns, width);
      this[_rows] = LayoutGrid__src__Util__line_creation.calculateGridLines(this.rows, height);
    }
  };
  (LayoutGrid__src__Util__nested_layout_grid.NestedLayoutGrid.new = function(opts) {
    let columns = opts && 'columns' in opts ? opts.columns : null;
    let rows = opts && 'rows' in opts ? opts.rows : null;
    let couples = opts && 'couples' in opts ? opts.couples : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_col] = null;
    this[_rows] = null;
    this[_top] = null;
    this[_left] = null;
    this[_width] = null;
    this[_height] = null;
    this[columns$] = columns;
    this[rows$] = rows;
    this[couples$] = couples;
    this[height$] = height;
    this[width$] = width;
    if (!(couples != null)) dart.assertFailed(null, "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/nested_layout_grid.dart", 21, 16, "couples != null");
    if (!(columns != null)) dart.assertFailed(null, "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/nested_layout_grid.dart", 22, 16, "columns != null");
    if (!(rows != null)) dart.assertFailed(null, "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/nested_layout_grid.dart", 23, 16, "rows != null");
    if (!(dart.notNull(width) >= 0)) dart.assertFailed(dart.notNull(height) >= 0, "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/nested_layout_grid.dart", 24, 16, "width >= 0");
    LayoutGrid__src__Util__nested_layout_grid.NestedLayoutGrid.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = LayoutGrid__src__Util__nested_layout_grid.NestedLayoutGrid.prototype;
  dart.addTypeTests(LayoutGrid__src__Util__nested_layout_grid.NestedLayoutGrid);
  const columns$ = Symbol("NestedLayoutGrid.columns");
  const rows$ = Symbol("NestedLayoutGrid.rows");
  const couples$ = Symbol("NestedLayoutGrid.couples");
  const width$ = Symbol("NestedLayoutGrid.width");
  const height$ = Symbol("NestedLayoutGrid.height");
  dart.setMethodSignature(LayoutGrid__src__Util__nested_layout_grid.NestedLayoutGrid, () => ({
    __proto__: dart.getMethods(LayoutGrid__src__Util__nested_layout_grid.NestedLayoutGrid.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    updateGrid: dart.fnType(dart.void, [core.double, core.double])
  }));
  dart.setLibraryUri(LayoutGrid__src__Util__nested_layout_grid.NestedLayoutGrid, "package:layout_grid_overview/LayoutGrid/src/Util/nested_layout_grid.dart");
  dart.setFieldSignature(LayoutGrid__src__Util__nested_layout_grid.NestedLayoutGrid, () => ({
    __proto__: dart.getFields(LayoutGrid__src__Util__nested_layout_grid.NestedLayoutGrid.__proto__),
    columns: dart.finalFieldType(core.List$(LayoutGrid__src__Util__layout_grid_unit_classes.LayoutUnit)),
    rows: dart.finalFieldType(core.List$(LayoutGrid__src__Util__layout_grid_unit_classes.LayoutUnit)),
    couples: dart.finalFieldType(core.List$(LayoutGrid__src__layout_grid_couple.LayoutGridCouple)),
    width: dart.finalFieldType(core.double),
    height: dart.finalFieldType(core.double),
    [_col]: dart.fieldType(core.List$(core.double)),
    [_rows]: dart.fieldType(core.List$(core.double)),
    [_top]: dart.fieldType(core.double),
    [_left]: dart.fieldType(core.double),
    [_width]: dart.fieldType(core.double),
    [_height]: dart.fieldType(core.double)
  }));
  dart.trackLibraries("packages/layout_grid_overview/LayoutGrid/src/Util/nested_layout_grid", {
    "package:layout_grid_overview/LayoutGrid/src/Util/nested_layout_grid.dart": LayoutGrid__src__Util__nested_layout_grid
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/nested_layout_grid.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IASyB;;;;;;IAAS;;;;;;IACH;;;;;;IAChB;;;;;;IAAO;;;;;;UAmBM;MAExB,gBAAW,YAAO;AAElB,YAAO,oDACG,AAAM,2BACP,AAAK,0BACL,wCACW,iDACN,wBAAwB,AAAQ,uBAAQ,QAAK;YACnD,aAAO,AAAK,mBAAC,AAAO,AAAQ,oBAAP,KAAK;YAC1B,cAAQ,AAAI,kBAAC,AAAO,AAAQ,oBAAP,KAAK;YAC1B,gBACgC,AAA6B,aAAxD,AAAK,mBAAC,AAAO,AAAQ,oBAAP,KAAK,wBAAU,AAAK,mBAAC,AAAO,AAAQ,oBAAP,KAAK,YAAW,MAC3B,aAA3B,AAAK,mBAAC,AAAO,AAAQ,oBAAP,KAAK,wBAAU,AAAK,mBAAC,AAAO,AAAQ,oBAAP,KAAK,WAChD;YACV,eAC+B,AAA4B,aAAtD,AAAI,kBAAC,AAAO,AAAQ,oBAAP,KAAK,wBAAU,AAAI,kBAAC,AAAO,AAAQ,oBAAP,KAAK,YAAW,MAC1B,aAA1B,AAAI,kBAAC,AAAO,AAAQ,oBAAP,KAAK,wBAAU,AAAI,kBAAC,AAAO,AAAQ,oBAAP,KAAK,WAC9C;AAIV,gBAAI,AAAO,AAAQ,oBAAP,KAAK,aAAa;cACT,AACd,kEADiB,OAAO,aACb,AAAO,AAAQ,oBAAP,KAAK,WAAW,iBAAK,YAAO;;AAOtD,kBAAO,wEACA,kDACK,aAAL,2BAAO,AAAO,AAAQ,AAAO,oBAAd,KAAK,oBACb,aAAN,4BAAQ,AAAO,AAAQ,AAAO,oBAAd,KAAK,sBACnB,sBACD,sBACC,AAAO,AAAQ,oBAAP,KAAK,kBACb,AAAO,AAAQ,oBAAP,KAAK,qBACV,AAAO,AAAQ,oBAAP,KAAK;;IAIpC;eAEuB,OAAc;MACnC,aAAO,wDAAmB,cAAS,KAAK;MAExC,cAAQ,wDAAmB,WAAM,MAAM;IACzC;;;QAlEiB;QACA;QACA;QACA;QACA;QACX;;IAOO;IAAM;IACZ;IAAM;IAAO;IAAQ;IAbX;IACA;IACA;IACA;IACA;UAEJ,OAAO,IAAI;UACX,OAAO,IAAI;UACX,IAAI,IAAI;UACF,aAAN,KAAK,KAAI,sBAAU,aAAP,MAAM,KAAI;AAC7B,8FAAW,GAAG;;EAAC","file":"nested_layout_grid.ddc.js"}');
  // Exports:
  return {
    LayoutGrid__src__Util__nested_layout_grid: LayoutGrid__src__Util__nested_layout_grid
  };
});

//# sourceMappingURL=nested_layout_grid.ddc.js.map
