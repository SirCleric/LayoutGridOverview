define(['dart_sdk', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/animation', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_private_units', 'packages/layout_grid_overview/LayoutGrid/src/layout_grid_couple', 'packages/layout_grid_overview/LayoutGrid/src/Util/inherited_layout_model', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_creation', 'packages/layout_grid_overview/LayoutGrid/src/Util/custom_layout_grid_scroll_behavior', 'packages/flutter_web_ui/ui', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_child'], function(dart_sdk, animation, animation$, layout_grid_private_units, layout_grid_couple, inherited_layout_model, layout_creation, custom_layout_grid_scroll_behavior, ui, layout_grid_child) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
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
  const LayoutGrid__src__Util__layout_creation = layout_creation.LayoutGrid__src__Util__layout_creation;
  const LayoutGrid__src__Util__custom_layout_grid_scroll_behavior = custom_layout_grid_scroll_behavior.LayoutGrid__src__Util__custom_layout_grid_scroll_behavior;
  const ui$ = ui.ui;
  const LayoutGrid__src__Util__layout_grid_child = layout_grid_child.LayoutGrid__src__Util__layout_grid_child;
  const LayoutGrid__src__layout_grid = Object.create(dart.library);
  const $length = dartx.length;
  const $sublist = dartx.sublist;
  const $last = dartx.last;
  const $_get = dartx._get;
  const $isNotEmpty = dartx.isNotEmpty;
  const $addAll = dartx.addAll;
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(src__widgets__framework.Widget)))();
  let intToLayoutGridChild = () => (intToLayoutGridChild = dart.constFn(dart.fnType(LayoutGrid__src__Util__layout_grid_child.LayoutGridChild, [core.int])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let LinkedMapOfString$double = () => (LinkedMapOfString$double = dart.constFn(_js_helper.LinkedMap$(core.String, core.double)))();
  let IdentityMapOfString$double = () => (IdentityMapOfString$double = dart.constFn(_js_helper.IdentityMap$(core.String, core.double)))();
  const _calculatedCouples = dart.privateName(LayoutGrid__src__layout_grid, "_calculatedCouples");
  const _calculatedLayout = dart.privateName(LayoutGrid__src__layout_grid, "_calculatedLayout");
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
    this[_calculatedLayout] = null;
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
    [_calculatedCouples]: dart.fieldType(core.List$(LayoutGrid__src__layout_grid_couple.LayoutGridCouple)),
    [_calculatedLayout]: dart.fieldType(core.List$(core.double))
  }));
  const _couples = dart.privateName(LayoutGrid__src__layout_grid, "_couples");
  const _cols = dart.privateName(LayoutGrid__src__layout_grid, "_cols");
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
      if (this.widget[_calculatedCouples] == null) this.widget[_calculatedCouples] = LayoutGrid__src__layout_grid_couple.LayoutGridCouple.getPositionedGridCoupleList(this.widget.areas, this.widget.couples);
      this[_couples] = this.widget[_calculatedCouples];
    }
    build(context) {
      this.widget[_calculatedLayout] = LayoutGrid__src__Util__layout_creation.Layout.createLayout(this.widget.columns, this.widget.rows, this.widget.width != null ? this.widget.width : 0.0, this.widget.height != null ? this.widget.height : 0.0);
      this[_cols] = this.widget[_calculatedLayout][$sublist](0, this.widget.columns[$length]);
      this[_rows] = this.widget[_calculatedLayout][$sublist](this.widget.columns[$length]);
      return new src__widgets__scroll_configuration.ScrollConfiguration.new({behavior: new LayoutGrid__src__Util__custom_layout_grid_scroll_behavior.CustomLayoutGridScrollBehavior.new(), child: new src__widgets__container.Container.new({child: new src__widgets__scroll_view.ListView.new({controller: this.widget.scrollController, scrollDirection: this.widget.scrollDirection, children: JSArrayOfWidget().of([new src__widgets__container.Container.new({height: this.widget.height != null ? this.widget.height : this.widget[_calculatedLayout][$last], width: this.widget.width != null ? this.widget.width : this.widget[_calculatedLayout][$_get](dart.notNull(this.widget.columns[$length]) - 1), child: dart.test(this[_couples][$isNotEmpty]) ? new src__widgets__basic.Stack.new({fit: src__rendering__stack.StackFit.expand, children: ListOfWidget().generate(this[_couples][$length], dart.fn(index => {
                    this.setParameters(LayoutGrid__src__layout_grid.getWidgetParameters(index, this[_couples], this[_cols], this[_rows]));
                    if (this[_couples][$_get](index).modelKey != null) {
                      this.widget.layoutModel.updateModel(this[_couples][$_get](index).modelKey, new ui$.Size.new(this[_width], this[_height]), new ui$.Offset.new(this[_left], this[_top]));
                    }
                    return new LayoutGrid__src__Util__layout_grid_child.LayoutGridChild.new({key: this[_couples][$_get](index).key != null ? this[_couples][$_get](index).key : new src__widgets__framework.UniqueKey.new(), top: this[_top], left: this[_left], height: this[_height], width: this[_width], widget: this[_couples][$_get](index).widget, $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 95, column: 26, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 96, column: 21, name: "key"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 97, column: 21, name: "top"}))), const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 98, column: 21, name: "left"}))), const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 99, column: 21, name: "height"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 21, name: "width"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 101, column: 21, name: "widget"})))], src__widgets__widget_inspector._Location))})))});
                  }, intToLayoutGridChild())), $creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 85, column: 46, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 86, column: 17, name: "fit"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))}) : new src__widgets__container.Container.new({$creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 104, column: 20, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart", parameterLocations: const$11 || (const$11 = dart.constList([], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 13, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 82, column: 15, name: "height"}))), const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 15, name: "width"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 85, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 74, column: 16, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart", parameterLocations: const$21 || (const$21 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 11, name: "controller"}))), const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 11, name: "scrollDirection"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 11, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart", parameterLocations: const$24 || (const$24 = dart.constList([const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 74, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart", parameterLocations: const$28 || (const$28 = dart.constList([const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 7, name: "behavior"}))), const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    setParameters(map) {
      this[_top] = map[$_get]("top");
      this[_left] = map[$_get]("left");
      this[_height] = map[$_get]("height");
      this[_width] = map[$_get]("width");
    }
  };
  (LayoutGrid__src__layout_grid._LayoutGridState.new = function() {
    this[_couples] = null;
    this[_cols] = null;
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
    setParameters: dart.fnType(dart.void, [core.Map$(core.String, core.double)])
  }));
  dart.setLibraryUri(LayoutGrid__src__layout_grid._LayoutGridState, "package:layout_grid_overview/LayoutGrid/src/layout_grid.dart");
  dart.setFieldSignature(LayoutGrid__src__layout_grid._LayoutGridState, () => ({
    __proto__: dart.getFields(LayoutGrid__src__layout_grid._LayoutGridState.__proto__),
    [_couples]: dart.fieldType(core.List$(LayoutGrid__src__layout_grid_couple.LayoutGridCouple)),
    [_cols]: dart.fieldType(core.List$(core.double)),
    [_rows]: dart.fieldType(core.List$(core.double)),
    [_top]: dart.fieldType(core.double),
    [_left]: dart.fieldType(core.double),
    [_width]: dart.fieldType(core.double),
    [_height]: dart.fieldType(core.double)
  }));
  LayoutGrid__src__layout_grid.getWidgetParameters = function(index, couples, cols, rows) {
    let _map = new (LinkedMapOfString$double()).new();
    if (couples[$_get](index).position != null) {
      _map[$addAll](new (IdentityMapOfString$double()).from(["top", couples[$_get](index).position.dy, "left", couples[$_get](index).position.dx]));
    } else {
      _map[$addAll](new (IdentityMapOfString$double()).from(["top", rows[$_get](couples[$_get](index).row0), "left", cols[$_get](couples[$_get](index).col0)]));
    }
    if (couples[$_get](index).size != null) {
      _map[$addAll](new (IdentityMapOfString$double()).from(["height", couples[$_get](index).size.height, "width", couples[$_get](index).size.width]));
    } else {
      _map[$addAll](new (IdentityMapOfString$double()).from(["height", dart.notNull(rows[$_get](couples[$_get](index).row1)) - dart.notNull(rows[$_get](couples[$_get](index).row0)) >= 0.0 ? dart.notNull(rows[$_get](couples[$_get](index).row1)) - dart.notNull(rows[$_get](couples[$_get](index).row0)) : 0.0, "width", dart.notNull(cols[$_get](couples[$_get](index).col1)) - dart.notNull(cols[$_get](couples[$_get](index).col0)) >= 0.0 ? dart.notNull(cols[$_get](couples[$_get](index).col1)) - dart.notNull(cols[$_get](couples[$_get](index).col0)) : 0.0]));
    }
    return _map;
  };
  dart.trackLibraries("packages/layout_grid_overview/LayoutGrid/src/layout_grid", {
    "package:layout_grid_overview/LayoutGrid/src/layout_grid.dart": LayoutGrid__src__layout_grid
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart"],"names":[],"mappings":"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","file":"layout_grid.ddc.js"}');
  // Exports:
  return {
    LayoutGrid__src__layout_grid: LayoutGrid__src__layout_grid
  };
});

//# sourceMappingURL=layout_grid.ddc.js.map
