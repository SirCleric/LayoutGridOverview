define(['dart_sdk', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/animation', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit_classes', 'packages/layout_grid_overview/LayoutGrid/src/layout_grid_couple', 'packages/layout_grid_overview/LayoutGrid/src/Util/area_creation', 'packages/layout_grid_overview/LayoutGrid/src/Util/ancestor_layout_grid', 'packages/layout_grid_overview/LayoutGrid/src/Util/nested_layout_grid'], function(dart_sdk, animation, animation$, layout_grid_unit_classes, layout_grid_couple, area_creation, ancestor_layout_grid, nested_layout_grid) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__painting__basic_types = animation.src__painting__basic_types;
  const src__widgets__framework = animation$.src__widgets__framework;
  const src__widgets__scroll_controller = animation$.src__widgets__scroll_controller;
  const src__widgets__widget_inspector = animation$.src__widgets__widget_inspector;
  const LayoutGrid__src__Util__layout_grid_unit_classes = layout_grid_unit_classes.LayoutGrid__src__Util__layout_grid_unit_classes;
  const LayoutGrid__src__layout_grid_couple = layout_grid_couple.LayoutGrid__src__layout_grid_couple;
  const LayoutGrid__src__Util__area_creation = area_creation.LayoutGrid__src__Util__area_creation;
  const LayoutGrid__src__Util__ancestor_layout_grid = ancestor_layout_grid.LayoutGrid__src__Util__ancestor_layout_grid;
  const LayoutGrid__src__Util__nested_layout_grid = nested_layout_grid.LayoutGrid__src__Util__nested_layout_grid;
  const LayoutGrid__src__layout_grid = Object.create(dart.library);
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
    get isAncestor() {
      return this[isAncestor$];
    }
    set isAncestor(value) {
      super.isAncestor = value;
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
    let isAncestor = opts && 'isAncestor' in opts ? opts.isAncestor : false;
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
    this[isAncestor$] = isAncestor;
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
  const isAncestor$ = Symbol("LayoutGrid.isAncestor");
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
    isAncestor: dart.finalFieldType(core.bool),
    calculatedCouples: dart.fieldType(core.List$(LayoutGrid__src__layout_grid_couple.LayoutGridCouple))
  }));
  const _couples = dart.privateName(LayoutGrid__src__layout_grid, "_couples");
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
  LayoutGrid__src__layout_grid._LayoutGridState = class _LayoutGridState extends src__widgets__framework.State$(LayoutGrid__src__layout_grid.LayoutGrid) {
    initState() {
      super.initState();
      if (this.widget.calculatedCouples == null) this.widget.calculatedCouples = LayoutGrid__src__Util__area_creation.getPositionedGridCoupleList(this.widget.areas, this.widget.couples);
      this[_couples] = this.widget.calculatedCouples;
    }
    build(context) {
      if (dart.test(this.widget.isAncestor)) {
        return new LayoutGrid__src__Util__ancestor_layout_grid.AncestorLayoutGrid.new({key: new src__widgets__framework.UniqueKey.new(), columns: this.widget.columns, rows: this.widget.rows, couples: this[_couples], scrollDirection: this.widget.scrollDirection, scrollController: this.widget.scrollController, $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 167, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 168, column: 9, name: "key"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 169, column: 9, name: "columns"}))), const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 170, column: 9, name: "rows"}))), const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 171, column: 9, name: "couples"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 172, column: 9, name: "scrollDirection"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 173, column: 9, name: "scrollController"})))], src__widgets__widget_inspector._Location))})))});
      } else {
        return new LayoutGrid__src__Util__nested_layout_grid.NestedLayoutGrid.new({key: new src__widgets__framework.UniqueKey.new(), columns: this.widget.columns, rows: this.widget.rows, couples: this[_couples], height: this.widget.height, width: this.widget.width, $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 176, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 177, column: 9, name: "key"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 178, column: 9, name: "columns"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 179, column: 9, name: "rows"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 180, column: 9, name: "couples"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 181, column: 9, name: "height"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 182, column: 9, name: "width"})))], src__widgets__widget_inspector._Location))})))});
      }
    }
  };
  (LayoutGrid__src__layout_grid._LayoutGridState.new = function() {
    this[_couples] = null;
    LayoutGrid__src__layout_grid._LayoutGridState.__proto__.new.call(this);
    ;
  }).prototype = LayoutGrid__src__layout_grid._LayoutGridState.prototype;
  dart.addTypeTests(LayoutGrid__src__layout_grid._LayoutGridState);
  dart.setMethodSignature(LayoutGrid__src__layout_grid._LayoutGridState, () => ({
    __proto__: dart.getMethods(LayoutGrid__src__layout_grid._LayoutGridState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(LayoutGrid__src__layout_grid._LayoutGridState, "package:layout_grid_overview/LayoutGrid/src/layout_grid.dart");
  dart.setFieldSignature(LayoutGrid__src__layout_grid._LayoutGridState, () => ({
    __proto__: dart.getFields(LayoutGrid__src__layout_grid._LayoutGridState.__proto__),
    [_couples]: dart.fieldType(core.List$(LayoutGrid__src__layout_grid_couple.LayoutGridCouple))
  }));
  dart.trackLibraries("packages/layout_grid_overview/LayoutGrid/src/layout_grid", {
    "package:layout_grid_overview/LayoutGrid/src/layout_grid.dart": LayoutGrid__src__layout_grid
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IAqGyB;;;;;;IAAS;;;;;;IASH;;;;;;IAiBJ;;;;;;IAGZ;;;;;;IAAO;;;;;;IAET;;;;;;IACY;;;;;;IAGZ;;;;;;IAGY;;;;;;;AAEW;IAAkB;;;QApFnC;QACA;QACA;QACV;QACA;QACA;QACA,6EAAuB;QACvB;QACA,8DAAa;QACd;;IAyEiB;IAlFN;IACA;IACA;IACV;IACA;IACA;IACA;IACA;IACA;AAEF,2EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAkFZ;AAMN,UAAI,AAAO,AAAkB,iCAAG,MAC9B,AAAO,gCACH,iEAA4B,AAAO,mBAAO,AAAO;MACvD,iBAAW,AAAO;IACpB;UAG0B;AAGxB,oBAAI,AAAO;AACT,cAAO,8EACA,sDACI,AAAO,2BACV,AAAO,2BACJ,iCACQ,AAAO,+CACN,AAAO;;AAG3B,cAAO,0EACA,sDACI,AAAO,2BACV,AAAO,2BACJ,wBACD,AAAO,2BACR,AAAO;;IAGpB;;;IAvCuB;;;EAwCzB","file":"layout_grid.ddc.js"}');
  // Exports:
  return {
    LayoutGrid__src__layout_grid: LayoutGrid__src__layout_grid
  };
});

//# sourceMappingURL=layout_grid.ddc.js.map
