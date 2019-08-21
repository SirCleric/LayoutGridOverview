define(['dart_sdk', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/animation', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_private_units', 'packages/layout_grid_overview/LayoutGrid/src/layout_grid_couple', 'packages/layout_grid_overview/LayoutGrid/src/Util/inherited_layout_model', 'packages/layout_grid_overview/LayoutGrid/src/Util/area_creation', 'packages/layout_grid_overview/LayoutGrid/src/Util/custom_layout_grid_scroll_behavior', 'packages/flutter_web_ui/ui', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_child', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_creation'], function(dart_sdk, animation, animation$, layout_grid_private_units, layout_grid_couple, inherited_layout_model, area_creation, custom_layout_grid_scroll_behavior, ui, layout_grid_child, layout_creation) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__painting__basic_types = animation.src__painting__basic_types;
  const src__widgets__framework = animation$.src__widgets__framework;
  const src__widgets__scroll_controller = animation$.src__widgets__scroll_controller;
  const src__widgets__scroll_configuration = animation$.src__widgets__scroll_configuration;
  const src__widgets__container = animation$.src__widgets__container;
  const src__widgets__scroll_view = animation$.src__widgets__scroll_view;
  const src__widgets__basic = animation$.src__widgets__basic;
  const src__rendering__stack = animation$.src__rendering__stack;
  const src__widgets__widget_inspector = animation$.src__widgets__widget_inspector;
  const LayoutGrid__src__Util__layout_grid_private_units = layout_grid_private_units.LayoutGrid__src__Util__layout_grid_private_units;
  const LayoutGrid__src__layout_grid_couple = layout_grid_couple.LayoutGrid__src__layout_grid_couple;
  const LayoutGrid__src__Util__inherited_layout_model = inherited_layout_model.LayoutGrid__src__Util__inherited_layout_model;
  const LayoutGrid__src__Util__area_creation = area_creation.LayoutGrid__src__Util__area_creation;
  const LayoutGrid__src__Util__custom_layout_grid_scroll_behavior = custom_layout_grid_scroll_behavior.LayoutGrid__src__Util__custom_layout_grid_scroll_behavior;
  const ui$ = ui.ui;
  const LayoutGrid__src__Util__layout_grid_child = layout_grid_child.LayoutGrid__src__Util__layout_grid_child;
  const LayoutGrid__src__Util__layout_creation = layout_creation.LayoutGrid__src__Util__layout_creation;
  const LayoutGrid__src__layout_grid = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $sublist = dartx.sublist;
  const $forEach = dartx.forEach;
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(src__widgets__framework.Widget)))();
  let intToLayoutGridChild = () => (intToLayoutGridChild = dart.constFn(dart.fnType(LayoutGrid__src__Util__layout_grid_child.LayoutGridChild, [core.int])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let doubleTovoid = () => (doubleTovoid = dart.constFn(dart.fnType(dart.void, [core.double])))();
  const _calculatedCouples = dart.privateName(LayoutGrid__src__layout_grid, "_calculatedCouples");
  LayoutGrid__src__layout_grid.LayoutGrid = class LayoutGrid extends src__widgets__framework.StatefulWidget {
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
    get areas() {
      return this[areas$];
    }
    set areas(value) {
      super.areas = value;
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
    get scrollDirection() {
      return this[scrollDirection$];
    }
    set scrollDirection(value) {
      super.scrollDirection = value;
    }
    get scrollController() {
      return this[scrollController$];
    }
    set scrollController(value) {
      super.scrollController = value;
    }
    get layoutModel() {
      return this[layoutModel$];
    }
    set layoutModel(value) {
      super.layoutModel = value;
    }
    createState() {
      return new LayoutGrid__src__layout_grid._LayoutGridState.new();
    }
  };
  (LayoutGrid__src__layout_grid.LayoutGrid.new = function(opts) {
    let columns = opts && 'columns' in opts ? opts.columns : null;
    let rows = opts && 'rows' in opts ? opts.rows : null;
    let couples = opts && 'couples' in opts ? opts.couples : null;
    let areas = opts && 'areas' in opts ? opts.areas : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : src__painting__basic_types.Axis.vertical;
    let scrollController = opts && 'scrollController' in opts ? opts.scrollController : null;
    let layoutModel = opts && 'layoutModel' in opts ? opts.layoutModel : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_calculatedCouples] = null;
    this[columns$] = columns;
    this[rows$] = rows;
    this[couples$] = couples;
    this[areas$] = areas;
    this[width$] = width;
    this[height$] = height;
    this[scrollDirection$] = scrollDirection;
    this[scrollController$] = scrollController;
    this[layoutModel$] = layoutModel;
    LayoutGrid__src__layout_grid.LayoutGrid.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = LayoutGrid__src__layout_grid.LayoutGrid.prototype;
  dart.addTypeTests(LayoutGrid__src__layout_grid.LayoutGrid);
  const columns$ = Symbol("LayoutGrid.columns");
  const rows$ = Symbol("LayoutGrid.rows");
  const couples$ = Symbol("LayoutGrid.couples");
  const areas$ = Symbol("LayoutGrid.areas");
  const width$ = Symbol("LayoutGrid.width");
  const height$ = Symbol("LayoutGrid.height");
  const scrollDirection$ = Symbol("LayoutGrid.scrollDirection");
  const scrollController$ = Symbol("LayoutGrid.scrollController");
  const layoutModel$ = Symbol("LayoutGrid.layoutModel");
  dart.setMethodSignature(LayoutGrid__src__layout_grid.LayoutGrid, () => ({
    __proto__: dart.getMethods(LayoutGrid__src__layout_grid.LayoutGrid.__proto__),
    createState: dart.fnType(LayoutGrid__src__layout_grid._LayoutGridState, [])
  }));
  dart.setLibraryUri(LayoutGrid__src__layout_grid.LayoutGrid, "package:layout_grid_overview/LayoutGrid/src/layout_grid.dart");
  dart.setFieldSignature(LayoutGrid__src__layout_grid.LayoutGrid, () => ({
    __proto__: dart.getFields(LayoutGrid__src__layout_grid.LayoutGrid.__proto__),
    columns: dart.finalFieldType(core.List$(LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit)),
    rows: dart.finalFieldType(core.List$(LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit)),
    couples: dart.finalFieldType(core.List$(LayoutGrid__src__layout_grid_couple.LayoutGridCouple)),
    areas: dart.finalFieldType(core.List$(core.List$(core.String))),
    width: dart.finalFieldType(core.double),
    height: dart.finalFieldType(core.double),
    scrollDirection: dart.finalFieldType(src__painting__basic_types.Axis),
    scrollController: dart.finalFieldType(src__widgets__scroll_controller.ScrollController),
    layoutModel: dart.finalFieldType(LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel),
    [_calculatedCouples]: dart.fieldType(core.List$(LayoutGrid__src__layout_grid_couple.LayoutGridCouple))
  }));
  const _couples = dart.privateName(LayoutGrid__src__layout_grid, "_couples");
  const _col = dart.privateName(LayoutGrid__src__layout_grid, "_col");
  const _rows = dart.privateName(LayoutGrid__src__layout_grid, "_rows");
  const _top = dart.privateName(LayoutGrid__src__layout_grid, "_top");
  const _left = dart.privateName(LayoutGrid__src__layout_grid, "_left");
  const _width = dart.privateName(LayoutGrid__src__layout_grid, "_width");
  const _height = dart.privateName(LayoutGrid__src__layout_grid, "_height");
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
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  LayoutGrid__src__layout_grid._LayoutGridState = class _LayoutGridState extends src__widgets__framework.State$(LayoutGrid__src__layout_grid.LayoutGrid) {
    initState() {
      super.initState();
      if (this.widget[_calculatedCouples] == null) this.widget[_calculatedCouples] = LayoutGrid__src__Util__area_creation.getPositionedGridCoupleList(this.widget.areas, this.widget.couples);
      this[_couples] = this.widget[_calculatedCouples];
    }
    build(context) {
      return new src__widgets__scroll_configuration.ScrollConfiguration.new({behavior: new LayoutGrid__src__Util__custom_layout_grid_scroll_behavior.CustomLayoutGridScrollBehavior.new(), child: new src__widgets__container.Container.new({height: this.widget.height, width: this.widget.width, child: new src__widgets__scroll_view.ListView.new({controller: this.widget.scrollController, scrollDirection: this.widget.scrollDirection, children: JSArrayOfWidget().of([new src__widgets__container.Container.new({height: this.widget.height, width: this.widget.width, child: new src__widgets__basic.Stack.new({fit: src__rendering__stack.StackFit.expand, children: ListOfWidget().generate(this[_couples][$length], dart.fn(index => {
                    this.getWidgetParameters(index);
                    if (this[_couples][$_get](index).modelKey != null) {
                      this.widget.layoutModel.updateModel(this[_couples][$_get](index).modelKey, new ui$.Size.new(this[_width], this[_height]), new ui$.Offset.new(this[_left], this[_top]));
                    }
                    return new LayoutGrid__src__Util__layout_grid_child.LayoutGridChild.new({key: this[_couples][$_get](index).key != null ? this[_couples][$_get](index).key : new src__widgets__framework.UniqueKey.new(), top: this[_top], left: this[_left], height: this[_height], width: this[_width], widget: this[_couples][$_get](index).widget, $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 102, column: 26, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 103, column: 21, name: "key"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 104, column: 21, name: "top"}))), const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 21, name: "left"}))), const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 106, column: 21, name: "height"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 107, column: 21, name: "width"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 108, column: 21, name: "widget"})))], src__widgets__widget_inspector._Location))})))});
                  }, intToLayoutGridChild())), $creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 86, column: 22, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 17, name: "fit"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 88, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 13, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart", parameterLocations: const$14 || (const$14 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 15, name: "height"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 84, column: 15, name: "width"}))), const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 86, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 16, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart", parameterLocations: const$19 || (const$19 = dart.constList([const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 11, name: "controller"}))), const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 11, name: "scrollDirection"}))), const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 11, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart", parameterLocations: const$24 || (const$24 = dart.constList([const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 9, name: "height"}))), const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 9, name: "width"}))), const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 65, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart", parameterLocations: const$28 || (const$28 = dart.constList([const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 7, name: "behavior"}))), const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    getWidgetParameters(index) {
      let lineList = LayoutGrid__src__Util__layout_creation.createLayout(this.widget.columns, this.widget.rows, this.widget.width, this.widget.height);
      this[_col] = lineList[$sublist](0, this.widget.columns[$length]);
      this[_rows] = lineList[$sublist](this.widget.columns[$length]);
      this[_col][$forEach](dart.fn(a => core.print(a), doubleTovoid()));
      this[_rows][$forEach](dart.fn(a => core.print(a), doubleTovoid()));
      if (dart.test(this[_couples][$_get](index).shouldOverwrite)) {
        this[_top] = this[_couples][$_get](index).position.dy;
        this[_left] = this[_couples][$_get](index).position.dx;
        this[_height] = this[_couples][$_get](index).size.height;
        this[_width] = this[_couples][$_get](index).size.width;
      } else {
        this[_top] = this[_rows][$_get](this[_couples][$_get](index).row0);
        this[_left] = this[_col][$_get](this[_couples][$_get](index).col0);
        this[_height] = dart.notNull(this[_rows][$_get](this[_couples][$_get](index).row1)) - dart.notNull(this[_rows][$_get](this[_couples][$_get](index).row0)) >= 0.0 ? dart.notNull(this[_rows][$_get](this[_couples][$_get](index).row1)) - dart.notNull(this[_rows][$_get](this[_couples][$_get](index).row0)) : 0.0;
        this[_width] = dart.notNull(this[_col][$_get](this[_couples][$_get](index).col1)) - dart.notNull(this[_col][$_get](this[_couples][$_get](index).col0)) >= 0.0 ? dart.notNull(this[_col][$_get](this[_couples][$_get](index).col1)) - dart.notNull(this[_col][$_get](this[_couples][$_get](index).col0)) : 0.0;
      }
    }
  };
  (LayoutGrid__src__layout_grid._LayoutGridState.new = function() {
    this[_couples] = null;
    this[_col] = null;
    this[_rows] = null;
    this[_top] = null;
    this[_left] = null;
    this[_width] = null;
    this[_height] = null;
    LayoutGrid__src__layout_grid._LayoutGridState.__proto__.new.call(this);
    ;
  }).prototype = LayoutGrid__src__layout_grid._LayoutGridState.prototype;
  dart.addTypeTests(LayoutGrid__src__layout_grid._LayoutGridState);
  dart.setMethodSignature(LayoutGrid__src__layout_grid._LayoutGridState, () => ({
    __proto__: dart.getMethods(LayoutGrid__src__layout_grid._LayoutGridState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    getWidgetParameters: dart.fnType(dart.void, [core.int])
  }));
  dart.setLibraryUri(LayoutGrid__src__layout_grid._LayoutGridState, "package:layout_grid_overview/LayoutGrid/src/layout_grid.dart");
  dart.setFieldSignature(LayoutGrid__src__layout_grid._LayoutGridState, () => ({
    __proto__: dart.getFields(LayoutGrid__src__layout_grid._LayoutGridState.__proto__),
    [_couples]: dart.fieldType(core.List$(LayoutGrid__src__layout_grid_couple.LayoutGridCouple)),
    [_col]: dart.fieldType(core.List$(core.double)),
    [_rows]: dart.fieldType(core.List$(core.double)),
    [_top]: dart.fieldType(core.double),
    [_left]: dart.fieldType(core.double),
    [_width]: dart.fieldType(core.double),
    [_height]: dart.fieldType(core.double)
  }));
  dart.trackLibraries("packages/layout_grid_overview/LayoutGrid/src/layout_grid", {
    "package:layout_grid_overview/LayoutGrid/src/layout_grid.dart": LayoutGrid__src__layout_grid
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyByB;;;;;;IAAS;;;;;;IAEH;;;;;;IAEJ;;;;;;IAEZ;;;;;;IAAO;;;;;;IAET;;;;;;IACY;;;;;;IAEI;;;;;;;AAIO;IAAkB;;;QA3BnC;QACA;QACA;QACV;QACU;QACA;QACV,6EAAuB;QACvB;QACA;QACD;;IAgBiB;IAzBN;IACA;IACA;IACV;IACU;IACA;IACV;IACA;IACA;AAEH,2EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA4BX;AAMN,UAAI,AAAO,AAAmB,mCAAG,MAAM,AAAO,kCAAqB,iEAA4B,AAAO,mBAAO,AAAO;MACpH,iBAAW,AAAO;IACpB;UAG0B;AAExB,YAAO,2EAGK,2GAEH,mDAEG,AAAO,2BACR,AAAO,0BAEP,wDAEO,AAAO,+CACF,AAAO,uCAEN,sBAChB,mDAEU,AAAO,2BACR,AAAO,0BAEP,wCACS,iDACN,wBAAwB,AAAS,yBAAQ,QAAK;oBAEpD,yBAAoB,KAAK;AAIzB,wBAAI,AAAQ,AAAQ,sBAAP,KAAK,cAAc;sBAC9B,AAAO,AAAY,oCAAY,AAAQ,AAAQ,sBAAP,KAAK,YAAY,iBAAK,cAAQ,gBAAU,mBAAO,aAAM;;AAO/F,0BAAO,wEACC,AAAQ,AAAQ,AAAa,sBAApB,KAAK,SAAS,OAAQ,AAAQ,AAAQ,sBAAP,KAAK,QAAQ,kDACtD,kBACC,qBACE,sBACD,sBACC,AAAQ,AAAQ,sBAAP,KAAK;;IASxC;wBAE6B;AAEd,qBAAW,oDAAa,AAAO,qBAAS,AAAO,kBAAM,AAAO,mBAAO,AAAO;MAEvF,aAAO,AAAS,QAAD,WAAS,GAAE,AAAO,AAAQ;MACzC,cAAQ,AAAS,QAAD,WAAS,AAAO,AAAQ;MAExC,AAAK,qBAAQ,QAAC,KAAM,WAAM,CAAC;MAC3B,AAAM,sBAAQ,QAAC,KAAM,WAAM,CAAC;AAE5B,oBAAI,AAAQ,AAAQ,sBAAP,KAAK;QAEhB,aAAO,AAAQ,AAAQ,AAAS,sBAAhB,KAAK;QACrB,cAAQ,AAAQ,AAAQ,AAAS,sBAAhB,KAAK;QACtB,gBAAU,AAAQ,AAAQ,AAAK,sBAAZ,KAAK;QACxB,eAAS,AAAQ,AAAQ,AAAK,sBAAZ,KAAK;;QAGvB,aAAO,AAAK,mBAAC,AAAQ,AAAQ,sBAAP,KAAK;QAC3B,cAAQ,AAAI,kBAAC,AAAQ,AAAQ,sBAAP,KAAK;QAC3B,gBAAuC,AAA8B,aAA1D,AAAK,mBAAC,AAAQ,AAAQ,sBAAP,KAAK,wBAAU,AAAK,mBAAC,AAAQ,AAAQ,sBAAP,KAAK,YAAW,MAAmC,aAA5B,AAAK,mBAAC,AAAQ,AAAQ,sBAAP,KAAK,wBAAU,AAAK,mBAAC,AAAQ,AAAQ,sBAAP,KAAK,WAAU;QAC3I,eAAqC,AAA6B,aAAxD,AAAI,kBAAC,AAAQ,AAAQ,sBAAP,KAAK,wBAAU,AAAI,kBAAC,AAAQ,AAAQ,sBAAP,KAAK,YAAW,MAAkC,aAA3B,AAAI,kBAAC,AAAQ,AAAQ,sBAAP,KAAK,wBAAU,AAAI,kBAAC,AAAQ,AAAQ,sBAAP,KAAK,WAAU;;IAE1I;;;IAhGuB;IACV;IAAM;IACZ;IAAM;IAAO;IAAQ;;;EA+F9B","file":"layout_grid.ddc.js"}');
  // Exports:
  return {
    LayoutGrid__src__layout_grid: LayoutGrid__src__layout_grid
  };
});

//# sourceMappingURL=layout_grid.ddc.js.map
