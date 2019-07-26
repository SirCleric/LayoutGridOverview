define(['dart_sdk', 'packages/flutter_web/src/animation/animation', 'packages/layout_grid_overview/LayoutGrid/src/Util/inherited_size_model', 'packages/flutter_web/animation', 'packages/layout_grid_overview/LayoutGrid/src/Util/custom_layout_grid_scroll_behavior', 'packages/flutter_web_ui/ui', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_child', 'packages/layout_grid_overview/LayoutGrid/src/Util/line_creation', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit_classes', 'packages/layout_grid_overview/LayoutGrid/src/layout_grid_couple'], function(dart_sdk, animation, inherited_size_model, animation$, custom_layout_grid_scroll_behavior, ui, layout_grid_child, line_creation, layout_grid_unit_classes, layout_grid_couple) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__painting__basic_types = animation.src__painting__basic_types;
  const LayoutGrid__src__Util__inherited_size_model = inherited_size_model.LayoutGrid__src__Util__inherited_size_model;
  const src__widgets__layout_builder = animation$.src__widgets__layout_builder;
  const src__widgets__scroll_configuration = animation$.src__widgets__scroll_configuration;
  const src__widgets__scroll_view = animation$.src__widgets__scroll_view;
  const src__widgets__container = animation$.src__widgets__container;
  const src__widgets__basic = animation$.src__widgets__basic;
  const src__rendering__stack = animation$.src__rendering__stack;
  const src__widgets__framework = animation$.src__widgets__framework;
  const src__widgets__widget_inspector = animation$.src__widgets__widget_inspector;
  const src__rendering__box = animation$.src__rendering__box;
  const src__widgets__scroll_controller = animation$.src__widgets__scroll_controller;
  const LayoutGrid__src__Util__custom_layout_grid_scroll_behavior = custom_layout_grid_scroll_behavior.LayoutGrid__src__Util__custom_layout_grid_scroll_behavior;
  const ui$ = ui.ui;
  const LayoutGrid__src__Util__layout_grid_child = layout_grid_child.LayoutGrid__src__Util__layout_grid_child;
  const LayoutGrid__src__Util__line_creation = line_creation.LayoutGrid__src__Util__line_creation;
  const LayoutGrid__src__Util__layout_grid_unit_classes = layout_grid_unit_classes.LayoutGrid__src__Util__layout_grid_unit_classes;
  const LayoutGrid__src__layout_grid_couple = layout_grid_couple.LayoutGrid__src__layout_grid_couple;
  const LayoutGrid__src__Util__ancestor_layout_grid = Object.create(dart.library);
  const $last = dartx.last;
  const $length = dartx.length;
  const $_get = dartx._get;
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(src__widgets__framework.Widget)))();
  let intToLayoutGridChild = () => (intToLayoutGridChild = dart.constFn(dart.fnType(LayoutGrid__src__Util__layout_grid_child.LayoutGridChild, [core.int])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let BuildContextAndBoxConstraintsToScrollConfiguration = () => (BuildContextAndBoxConstraintsToScrollConfiguration = dart.constFn(dart.fnType(src__widgets__scroll_configuration.ScrollConfiguration, [src__widgets__framework.BuildContext, src__rendering__box.BoxConstraints])))();
  const _lastConstraints = dart.privateName(LayoutGrid__src__Util__ancestor_layout_grid, "_lastConstraints");
  const _col = dart.privateName(LayoutGrid__src__Util__ancestor_layout_grid, "_col");
  const _rows = dart.privateName(LayoutGrid__src__Util__ancestor_layout_grid, "_rows");
  const _top = dart.privateName(LayoutGrid__src__Util__ancestor_layout_grid, "_top");
  const _left = dart.privateName(LayoutGrid__src__Util__ancestor_layout_grid, "_left");
  const _width = dart.privateName(LayoutGrid__src__Util__ancestor_layout_grid, "_width");
  const _height = dart.privateName(LayoutGrid__src__Util__ancestor_layout_grid, "_height");
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
  let const$30;
  let const$31;
  let const$32;
  LayoutGrid__src__Util__ancestor_layout_grid.AncestorLayoutGrid = class AncestorLayoutGrid extends src__widgets__framework.StatelessWidget {
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
    build(context) {
      return new LayoutGrid__src__Util__inherited_size_model.InheritedSizeModel.new({child: new src__widgets__layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => {
            if (!dart.equals(this[_lastConstraints], constraints)) {
              this.updateGrid(constraints, this.scrollDirection);
              this[_lastConstraints] = constraints;
            }
            return new src__widgets__scroll_configuration.ScrollConfiguration.new({behavior: new LayoutGrid__src__Util__custom_layout_grid_scroll_behavior.CustomLayoutGridScrollBehavior.new(), child: new src__widgets__scroll_view.ListView.new({controller: this.scrollController != null ? this.scrollController : null, scrollDirection: this.scrollDirection, children: JSArrayOfWidget().of([new src__widgets__container.Container.new({height: this[_rows][$last], width: this[_col][$last], child: new src__widgets__basic.Stack.new({fit: src__rendering__stack.StackFit.expand, children: ListOfWidget().generate(this.couples[$length], dart.fn(index => {
                        this[_top] = this[_rows][$_get](this.couples[$_get](index).row0);
                        this[_left] = this[_col][$_get](this.couples[$_get](index).col0);
                        this[_height] = dart.notNull(this[_rows][$_get](this.couples[$_get](index).row1)) - dart.notNull(this[_rows][$_get](this.couples[$_get](index).row0)) >= 0.0 ? dart.notNull(this[_rows][$_get](this.couples[$_get](index).row1)) - dart.notNull(this[_rows][$_get](this.couples[$_get](index).row0)) : 0.0;
                        this[_width] = dart.notNull(this[_col][$_get](this.couples[$_get](index).col1)) - dart.notNull(this[_col][$_get](this.couples[$_get](index).col0)) >= 0.0 ? dart.notNull(this[_col][$_get](this.couples[$_get](index).col1)) - dart.notNull(this[_col][$_get](this.couples[$_get](index).col0)) : 0.0;
                        if (this.couples[$_get](index).sizeKey != null) {
                          LayoutGrid__src__Util__inherited_size_model.InheritedSizeModel.of(context).updateSize(this.couples[$_get](index).sizeKey, new ui$.Size.new(this[_width], this[_height]));
                        }
                        return new LayoutGrid__src__Util__layout_grid_child.LayoutGridChild.new({key: new src__widgets__framework.UniqueKey.new(), top: dart.notNull(this[_top]) + dart.notNull(this.couples[$_get](index).offset.dy), left: dart.notNull(this[_left]) + dart.notNull(this.couples[$_get](index).offset.dx), height: this[_height], width: this[_width], widget: this.couples[$_get](index).widget, boxFit: this.couples[$_get](index).boxFit, alignment: this.couples[$_get](index).alignment, $creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 89, column: 30, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/ancestor_layout_grid.dart", parameterLocations: const$7 || (const$7 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 90, column: 25, name: "key"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 91, column: 25, name: "top"}))), const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 92, column: 25, name: "left"}))), const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 93, column: 25, name: "height"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 94, column: 25, name: "width"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 95, column: 25, name: "widget"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 96, column: 25, name: "boxFit"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 97, column: 25, name: "alignment"})))], src__widgets__widget_inspector._Location))})))});
                      }, intToLayoutGridChild())), $creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 59, column: 24, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/ancestor_layout_grid.dart", parameterLocations: const$11 || (const$11 = dart.constList([const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 60, column: 21, name: "fit"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 21, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 15, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/ancestor_layout_grid.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 56, column: 17, name: "height"}))), const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 17, name: "width"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 59, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 17, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/ancestor_layout_grid.dart", parameterLocations: const$21 || (const$21 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 50, column: 19, name: "controller"}))), const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 19, name: "scrollDirection"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 19, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 18, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/ancestor_layout_grid.dart", parameterLocations: const$25 || (const$25 = dart.constList([const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 13, name: "behavior"}))), const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))});
          }, BuildContextAndBoxConstraintsToScrollConfiguration()), $creationLocationd_0dea112b090073317d4: const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/ancestor_layout_grid.dart", parameterLocations: const$28 || (const$28 = dart.constList([const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 9, name: "builder"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/ancestor_layout_grid.dart", parameterLocations: const$31 || (const$31 = dart.constList([const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    updateGrid(constraints, scrollDirection) {
      if (dart.equals(scrollDirection, src__painting__basic_types.Axis.vertical)) {
        this[_col] = LayoutGrid__src__Util__line_creation.calculateGridLines(this.columns, constraints.maxWidth);
        this[_rows] = LayoutGrid__src__Util__line_creation.calculateGridLinesWithDependetUnit(this.rows, constraints.maxHeight, this[_col]);
      } else if (dart.equals(scrollDirection, src__painting__basic_types.Axis.horizontal)) {
        this[_rows] = LayoutGrid__src__Util__line_creation.calculateGridLines(this.columns, constraints.maxWidth);
        this[_col] = LayoutGrid__src__Util__line_creation.calculateGridLinesWithDependetUnit(this.rows, constraints.maxHeight, this[_rows]);
      }
    }
  };
  (LayoutGrid__src__Util__ancestor_layout_grid.AncestorLayoutGrid.new = function(opts) {
    let couples = opts && 'couples' in opts ? opts.couples : null;
    let columns = opts && 'columns' in opts ? opts.columns : null;
    let rows = opts && 'rows' in opts ? opts.rows : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : src__painting__basic_types.Axis.vertical;
    let scrollController = opts && 'scrollController' in opts ? opts.scrollController : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_lastConstraints] = null;
    this[_col] = null;
    this[_rows] = null;
    this[_top] = null;
    this[_left] = null;
    this[_width] = null;
    this[_height] = null;
    this[couples$] = couples;
    this[columns$] = columns;
    this[rows$] = rows;
    this[scrollDirection$] = scrollDirection;
    this[scrollController$] = scrollController;
    if (!(couples != null)) dart.assertFailed(null, "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/ancestor_layout_grid.dart", 18, 16, "couples != null");
    if (!(columns != null)) dart.assertFailed(null, "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/ancestor_layout_grid.dart", 19, 16, "columns != null");
    if (!(rows != null)) dart.assertFailed(null, "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/ancestor_layout_grid.dart", 20, 16, "rows != null");
    LayoutGrid__src__Util__ancestor_layout_grid.AncestorLayoutGrid.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = LayoutGrid__src__Util__ancestor_layout_grid.AncestorLayoutGrid.prototype;
  dart.addTypeTests(LayoutGrid__src__Util__ancestor_layout_grid.AncestorLayoutGrid);
  const columns$ = Symbol("AncestorLayoutGrid.columns");
  const rows$ = Symbol("AncestorLayoutGrid.rows");
  const couples$ = Symbol("AncestorLayoutGrid.couples");
  const scrollDirection$ = Symbol("AncestorLayoutGrid.scrollDirection");
  const scrollController$ = Symbol("AncestorLayoutGrid.scrollController");
  dart.setMethodSignature(LayoutGrid__src__Util__ancestor_layout_grid.AncestorLayoutGrid, () => ({
    __proto__: dart.getMethods(LayoutGrid__src__Util__ancestor_layout_grid.AncestorLayoutGrid.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    updateGrid: dart.fnType(dart.void, [src__rendering__box.BoxConstraints, src__painting__basic_types.Axis])
  }));
  dart.setLibraryUri(LayoutGrid__src__Util__ancestor_layout_grid.AncestorLayoutGrid, "package:layout_grid_overview/LayoutGrid/src/Util/ancestor_layout_grid.dart");
  dart.setFieldSignature(LayoutGrid__src__Util__ancestor_layout_grid.AncestorLayoutGrid, () => ({
    __proto__: dart.getFields(LayoutGrid__src__Util__ancestor_layout_grid.AncestorLayoutGrid.__proto__),
    columns: dart.finalFieldType(core.List$(LayoutGrid__src__Util__layout_grid_unit_classes.LayoutUnit)),
    rows: dart.finalFieldType(core.List$(LayoutGrid__src__Util__layout_grid_unit_classes.LayoutUnit)),
    couples: dart.finalFieldType(core.List$(LayoutGrid__src__layout_grid_couple.LayoutGridCouple)),
    scrollDirection: dart.finalFieldType(src__painting__basic_types.Axis),
    scrollController: dart.finalFieldType(src__widgets__scroll_controller.ScrollController),
    [_lastConstraints]: dart.fieldType(src__rendering__box.BoxConstraints),
    [_col]: dart.fieldType(core.List$(core.double)),
    [_rows]: dart.fieldType(core.List$(core.double)),
    [_top]: dart.fieldType(core.double),
    [_left]: dart.fieldType(core.double),
    [_width]: dart.fieldType(core.double),
    [_height]: dart.fieldType(core.double)
  }));
  dart.trackLibraries("packages/layout_grid_overview/LayoutGrid/src/Util/ancestor_layout_grid", {
    "package:layout_grid_overview/LayoutGrid/src/Util/ancestor_layout_grid.dart": LayoutGrid__src__Util__ancestor_layout_grid
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/ancestor_layout_grid.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsByB;;;;;;IAAS;;;;;;IACH;;;;;;IAClB;;;;;;IACY;;;;;;UAOG;AACxB,YAAO,gFACE,6DACI,SAAc,SAAwB;AAE7C,6BAAI,wBAAoB,WAAW;cAEjC,gBAAW,WAAW,EAAE;cACxB,yBAAmB,WAAW;;AAGhC,kBAAO,2EAEK,2GAGN,wDACe,AAA0B,yBAAN,OAAQ,wBAAmB,uBAC3C,gCACC,sBACtB,mDAGU,AAAM,2BACP,AAAK,0BAEL,wCACW,iDACN,wBACkB,AAAQ,uBAAQ,QAAK;wBAC7C,aAAO,AAAK,mBAAC,AAAO,AAAQ,oBAAP,KAAK;wBAC1B,cAAQ,AAAI,kBAAC,AAAO,AAAQ,oBAAP,KAAK;wBAC1B,gBAAsC,AACC,aAD5B,AAAK,mBAAC,AAAO,AAAQ,oBAAP,KAAK,wBAClB,AAAK,mBAAC,AAAO,AAAQ,oBAAP,KAAK,YACvB,MACyB,aAA3B,AAAK,mBAAC,AAAO,AAAQ,oBAAP,KAAK,wBACjB,AAAK,mBAAC,AAAO,AAAQ,oBAAP,KAAK,WACrB;wBACN,eAAoC,AACE,aAD5B,AAAI,kBAAC,AAAO,AAAQ,oBAAP,KAAK,wBAChB,AAAI,kBAAC,AAAO,AAAQ,oBAAP,KAAK,YACtB,MACwB,aAA1B,AAAI,kBAAC,AAAO,AAAQ,oBAAP,KAAK,wBAChB,AAAI,kBAAC,AAAO,AAAQ,oBAAP,KAAK,WACpB;AAIN,4BAAI,AAAO,AAAQ,oBAAP,KAAK,aAAa;0BACT,AAAY,kEAAT,OAAO,aACzB,AAAO,AAAQ,oBAAP,KAAK,WAAW,iBAAK,cAAQ;;AAO3C,8BAAO,wEACA,kDACK,aAAL,2BAAO,AAAO,AAAQ,AAAO,oBAAd,KAAK,oBACb,aAAN,4BAAQ,AAAO,AAAQ,AAAO,oBAAd,KAAK,sBACnB,sBACD,sBACC,AAAO,AAAQ,oBAAP,KAAK,kBACb,AAAO,AAAQ,oBAAP,KAAK,qBACV,AAAO,AAAQ,oBAAP,KAAK;;;IAS9C;eAE+B,aAAkB;AAS/C,UAAoB,YAAhB,eAAe,EAAS;QAC1B,aAAO,wDAAmB,cAAS,AAAY,WAAD;QAC9C,cACI,wEAAmC,WAAM,AAAY,WAAD,YAAY;YAC/D,KAAoB,YAAhB,eAAe,EAAS;QACjC,cAAQ,wDAAmB,cAAS,AAAY,WAAD;QAC/C,aAAO,wEACH,WAAM,AAAY,WAAD,YAAY;;IAErC;;;QAlHiB;QACA;QACA;QACV,6EAAuB;QACvB;QACD;;IAWS;IACF;IAAM;IACZ;IAAM;IAAO;IAAQ;IAlBX;IACA;IACA;IACV;IACA;UAEM,OAAO,IAAI;UACX,OAAO,IAAI;UACX,IAAI,IAAI;AACf,kGAAW,GAAG;;EAAC","file":"ancestor_layout_grid.ddc.js"}');
  // Exports:
  return {
    LayoutGrid__src__Util__ancestor_layout_grid: LayoutGrid__src__Util__ancestor_layout_grid
  };
});

//# sourceMappingURL=ancestor_layout_grid.ddc.js.map
