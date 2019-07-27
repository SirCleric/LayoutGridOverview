define(['dart_sdk', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/animation', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit_classes', 'packages/layout_grid_overview/LayoutGrid/src/layout_grid_couple', 'packages/layout_grid_overview/LayoutGrid/src/Util/inherited_size_model', 'packages/layout_grid_overview/LayoutGrid/src/Util/area_creation', 'packages/layout_grid_overview/LayoutGrid/src/Util/custom_layout_grid_scroll_behavior', 'packages/flutter_web_ui/ui', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_child', 'packages/layout_grid_overview/LayoutGrid/src/Util/line_creation'], function(dart_sdk, animation, animation$, layout_grid_unit_classes, layout_grid_couple, inherited_size_model, area_creation, custom_layout_grid_scroll_behavior, ui, layout_grid_child, line_creation) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__painting__basic_types = animation.src__painting__basic_types;
  const src__widgets__framework = animation$.src__widgets__framework;
  const src__widgets__scroll_controller = animation$.src__widgets__scroll_controller;
  const src__widgets__scroll_configuration = animation$.src__widgets__scroll_configuration;
  const src__widgets__scroll_view = animation$.src__widgets__scroll_view;
  const src__widgets__container = animation$.src__widgets__container;
  const src__widgets__basic = animation$.src__widgets__basic;
  const src__rendering__stack = animation$.src__rendering__stack;
  const src__widgets__widget_inspector = animation$.src__widgets__widget_inspector;
  const LayoutGrid__src__Util__layout_grid_unit_classes = layout_grid_unit_classes.LayoutGrid__src__Util__layout_grid_unit_classes;
  const LayoutGrid__src__layout_grid_couple = layout_grid_couple.LayoutGrid__src__layout_grid_couple;
  const LayoutGrid__src__Util__inherited_size_model = inherited_size_model.LayoutGrid__src__Util__inherited_size_model;
  const LayoutGrid__src__Util__area_creation = area_creation.LayoutGrid__src__Util__area_creation;
  const LayoutGrid__src__Util__custom_layout_grid_scroll_behavior = custom_layout_grid_scroll_behavior.LayoutGrid__src__Util__custom_layout_grid_scroll_behavior;
  const ui$ = ui.ui;
  const LayoutGrid__src__Util__layout_grid_child = layout_grid_child.LayoutGrid__src__Util__layout_grid_child;
  const LayoutGrid__src__Util__line_creation = line_creation.LayoutGrid__src__Util__line_creation;
  const LayoutGrid__src__layout_grid = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(src__widgets__framework.Widget)))();
  let intToLayoutGridChild = () => (intToLayoutGridChild = dart.constFn(dart.fnType(LayoutGrid__src__Util__layout_grid_child.LayoutGridChild, [core.int])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
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
    get sizeModel() {
      return this[sizeModel$];
    }
    set sizeModel(value) {
      super.sizeModel = value;
    }
    get calculatedCouples() {
      return this[calculatedCouples];
    }
    set calculatedCouples(value) {
      this[calculatedCouples] = value;
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
    let sizeModel = opts && 'sizeModel' in opts ? opts.sizeModel : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[calculatedCouples] = null;
    this[columns$] = columns;
    this[rows$] = rows;
    this[couples$] = couples;
    this[areas$] = areas;
    this[width$] = width;
    this[height$] = height;
    this[scrollDirection$] = scrollDirection;
    this[scrollController$] = scrollController;
    this[sizeModel$] = sizeModel;
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
  const sizeModel$ = Symbol("LayoutGrid.sizeModel");
  const calculatedCouples = Symbol("LayoutGrid.calculatedCouples");
  dart.setMethodSignature(LayoutGrid__src__layout_grid.LayoutGrid, () => ({
    __proto__: dart.getMethods(LayoutGrid__src__layout_grid.LayoutGrid.__proto__),
    createState: dart.fnType(LayoutGrid__src__layout_grid._LayoutGridState, [])
  }));
  dart.setLibraryUri(LayoutGrid__src__layout_grid.LayoutGrid, "package:layout_grid_overview/LayoutGrid/src/layout_grid.dart");
  dart.setFieldSignature(LayoutGrid__src__layout_grid.LayoutGrid, () => ({
    __proto__: dart.getFields(LayoutGrid__src__layout_grid.LayoutGrid.__proto__),
    columns: dart.finalFieldType(core.List$(LayoutGrid__src__Util__layout_grid_unit_classes.LayoutUnit)),
    rows: dart.finalFieldType(core.List$(LayoutGrid__src__Util__layout_grid_unit_classes.LayoutUnit)),
    couples: dart.finalFieldType(core.List$(LayoutGrid__src__layout_grid_couple.LayoutGridCouple)),
    areas: dart.finalFieldType(core.List$(core.List$(core.String))),
    width: dart.finalFieldType(core.double),
    height: dart.finalFieldType(core.double),
    scrollDirection: dart.finalFieldType(src__painting__basic_types.Axis),
    scrollController: dart.finalFieldType(src__widgets__scroll_controller.ScrollController),
    sizeModel: dart.finalFieldType(LayoutGrid__src__Util__inherited_size_model.InheritedSizeModel),
    calculatedCouples: dart.fieldType(core.List$(LayoutGrid__src__layout_grid_couple.LayoutGridCouple))
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
  LayoutGrid__src__layout_grid._LayoutGridState = class _LayoutGridState extends src__widgets__framework.State$(LayoutGrid__src__layout_grid.LayoutGrid) {
    initState() {
      super.initState();
      if (this.widget.calculatedCouples == null) this.widget.calculatedCouples = LayoutGrid__src__Util__area_creation.getPositionedGridCoupleList(this.widget.areas, this.widget.couples);
      this[_couples] = this.widget.calculatedCouples;
    }
    build(context) {
      this.updateGrid(this.widget.width, this.widget.height, this.widget.scrollDirection);
      return new src__widgets__scroll_configuration.ScrollConfiguration.new({behavior: new LayoutGrid__src__Util__custom_layout_grid_scroll_behavior.CustomLayoutGridScrollBehavior.new(), child: new src__widgets__scroll_view.ListView.new({controller: this.widget.scrollController, scrollDirection: this.widget.scrollDirection, children: JSArrayOfWidget().of([new src__widgets__container.Container.new({height: this.widget.height, width: this.widget.width, child: new src__widgets__basic.Stack.new({fit: src__rendering__stack.StackFit.expand, children: ListOfWidget().generate(this[_couples][$length], dart.fn(index => {
                  this[_top] = this[_rows][$_get](this[_couples][$_get](index).row0);
                  this[_left] = this[_col][$_get](this[_couples][$_get](index).col0);
                  this[_height] = dart.notNull(this[_rows][$_get](this[_couples][$_get](index).row1)) - dart.notNull(this[_rows][$_get](this[_couples][$_get](index).row0)) >= 0.0 ? dart.notNull(this[_rows][$_get](this[_couples][$_get](index).row1)) - dart.notNull(this[_rows][$_get](this[_couples][$_get](index).row0)) : 0.0;
                  this[_width] = dart.notNull(this[_col][$_get](this[_couples][$_get](index).col1)) - dart.notNull(this[_col][$_get](this[_couples][$_get](index).col0)) >= 0.0 ? dart.notNull(this[_col][$_get](this[_couples][$_get](index).col1)) - dart.notNull(this[_col][$_get](this[_couples][$_get](index).col0)) : 0.0;
                  if (this[_couples][$_get](index).sizeKey != null) {
                    this.widget.sizeModel.updateSize(this[_couples][$_get](index).sizeKey, new ui$.Size.new(this[_width], this[_height]));
                  }
                  return new LayoutGrid__src__Util__layout_grid_child.LayoutGridChild.new({key: new src__widgets__framework.UniqueKey.new(), top: dart.notNull(this[_top]) + dart.notNull(this[_couples][$_get](index).offset.dy), left: dart.notNull(this[_left]) + dart.notNull(this[_couples][$_get](index).offset.dx), height: this[_height], width: this[_width], widget: this[_couples][$_get](index).widget, boxFit: this[_couples][$_get](index).boxFit, alignment: this[_couples][$_get](index).alignment, $creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 205, column: 24, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart", parameterLocations: const$7 || (const$7 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 206, column: 19, name: "key"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 207, column: 19, name: "top"}))), const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 208, column: 19, name: "left"}))), const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 209, column: 19, name: "height"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 210, column: 19, name: "width"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 211, column: 19, name: "widget"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 212, column: 19, name: "boxFit"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 213, column: 19, name: "alignment"})))], src__widgets__widget_inspector._Location))})))});
                }, intToLayoutGridChild())), $creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 186, column: 20, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart", parameterLocations: const$11 || (const$11 = dart.constList([const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 187, column: 15, name: "fit"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 188, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 180, column: 11, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 183, column: 13, name: "height"}))), const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 184, column: 13, name: "width"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 186, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 175, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart", parameterLocations: const$21 || (const$21 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 176, column: 9, name: "controller"}))), const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 177, column: 9, name: "scrollDirection"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 179, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 171, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart", parameterLocations: const$25 || (const$25 = dart.constList([const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 173, column: 7, name: "behavior"}))), const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 175, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    updateGrid(width, height, scrollDirection) {
      if (dart.equals(scrollDirection, src__painting__basic_types.Axis.vertical)) {
        this[_col] = LayoutGrid__src__Util__line_creation.calculateGridLines(this.widget.columns, width);
        this[_rows] = LayoutGrid__src__Util__line_creation.calculateGridLinesWithDependetUnit(this.widget.rows, height, this[_col]);
      } else if (dart.equals(scrollDirection, src__painting__basic_types.Axis.horizontal)) {
        this[_rows] = LayoutGrid__src__Util__line_creation.calculateGridLines(this.widget.columns, width);
        this[_col] = LayoutGrid__src__Util__line_creation.calculateGridLinesWithDependetUnit(this.widget.rows, this.widget.height, this[_rows]);
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
    updateGrid: dart.fnType(dart.void, [core.double, core.double, src__painting__basic_types.Axis])
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
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuGyB;;;;;;IAAS;;;;;;IASH;;;;;;IAiBJ;;;;;;IAGZ;;;;;;IAAO;;;;;;IAET;;;;;;IACY;;;;;;IAEE;;;;;;IAGF;;;;;;;AAEW;IAAkB;;;QAnFnC;QACA;QACA;QACV;QACU;QACA;QACV,6EAAuB;QACvB;QACA;QACD;;IAwEiB;IAjFN;IACA;IACA;IACV;IACU;IACA;IACV;IACA;IACA;AAEF,2EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAoFZ;AAMN,UAAI,AAAO,AAAkB,iCAAG,MAAM,AAAO,gCAAoB,iEAA4B,AAAO,mBAAO,AAAO;MAElH,iBAAW,AAAO;IACpB;UAG0B;MAGxB,gBAAW,AAAO,mBAAM,AAAO,oBAAQ,AAAO;AAE9C,YAAO,2EAEK,2GAEH,wDACO,AAAO,+CACF,AAAO,uCAEN,sBAChB,mDAGU,AAAO,2BACR,AAAO,0BAEP,wCACS,iDACN,wBAAwB,AAAS,yBAAQ,QAAK;kBAEpD,aAAO,AAAK,mBAAC,AAAQ,AAAQ,sBAAP,KAAK;kBAC3B,cAAQ,AAAI,kBAAC,AAAQ,AAAQ,sBAAP,KAAK;kBAC3B,gBAAuC,AAA8B,aAA1D,AAAK,mBAAC,AAAQ,AAAQ,sBAAP,KAAK,wBAAU,AAAK,mBAAC,AAAQ,AAAQ,sBAAP,KAAK,YAAW,MAAmC,aAA5B,AAAK,mBAAC,AAAQ,AAAQ,sBAAP,KAAK,wBAAU,AAAK,mBAAC,AAAQ,AAAQ,sBAAP,KAAK,WAAU;kBAC3I,eAAqC,AAA6B,aAAxD,AAAI,kBAAC,AAAQ,AAAQ,sBAAP,KAAK,wBAAU,AAAI,kBAAC,AAAQ,AAAQ,sBAAP,KAAK,YAAW,MAAkC,aAA3B,AAAI,kBAAC,AAAQ,AAAQ,sBAAP,KAAK,wBAAU,AAAI,kBAAC,AAAQ,AAAQ,sBAAP,KAAK,WAAU;AAItI,sBAAI,AAAQ,AAAQ,sBAAP,KAAK,aAAa;oBAC7B,AAAO,AAAU,iCAAW,AAAQ,AAAQ,sBAAP,KAAK,WAAW,iBAAK,cAAQ;;AAOpE,wBAAO,wEACA,kDACK,aAAL,2BAAO,AAAQ,AAAQ,AAAO,sBAAd,KAAK,oBACd,aAAN,4BAAQ,AAAQ,AAAQ,AAAO,sBAAd,KAAK,sBACpB,sBACD,sBACC,AAAQ,AAAQ,sBAAP,KAAK,kBACd,AAAQ,AAAQ,sBAAP,KAAK,qBACX,AAAQ,AAAQ,sBAAP,KAAK;;IAQzC;eAEuB,OAAc,QAAa;AAShD,UAAoB,YAAhB,eAAe,EAAS;QAC1B,aAAO,wDAAmB,AAAO,qBAAS,KAAK;QAC/C,cAAQ,wEAAmC,AAAO,kBAAM,MAAM,EAAE;YAC3D,KAAoB,YAAhB,eAAe,EAAS;QACjC,cAAQ,wDAAmB,AAAO,qBAAS,KAAK;QAChD,aAAO,wEAAmC,AAAO,kBAAM,AAAO,oBAAQ;;IAE1E;;;IA3FuB;IACV;IAAM;IACZ;IAAM;IAAO;IAAQ;;;EA0F9B","file":"layout_grid.ddc.js"}');
  // Exports:
  return {
    LayoutGrid__src__layout_grid: LayoutGrid__src__layout_grid
  };
});

//# sourceMappingURL=layout_grid.ddc.js.map
