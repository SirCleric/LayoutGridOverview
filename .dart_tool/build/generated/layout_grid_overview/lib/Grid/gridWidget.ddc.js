define(['dart_sdk', 'packages/layout_grid_overview/LayoutGrid/src/Util/inherited_layout_model', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/layout_grid_overview/LayoutGrid/src/layout_grid', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_private_units', 'packages/layout_grid_overview/LayoutGrid/src/layout_grid_couple'], function(dart_sdk, inherited_layout_model, animation, material, animation$, layout_grid, layout_grid_private_units, layout_grid_couple) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const LayoutGrid__src__Util__inherited_layout_model = inherited_layout_model.LayoutGrid__src__Util__inherited_layout_model;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__painting__box_border = animation.src__painting__box_border;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__material__colors = material.src__material__colors;
  const src__painting__border_radius = animation$.src__painting__border_radius;
  const LayoutGrid__src__layout_grid = layout_grid.LayoutGrid__src__layout_grid;
  const LayoutGrid__src__Util__layout_grid_private_units = layout_grid_private_units.LayoutGrid__src__Util__layout_grid_private_units;
  const LayoutGrid__src__layout_grid_couple = layout_grid_couple.LayoutGrid__src__layout_grid_couple;
  const Grid__gridWidget = Object.create(dart.library);
  let JSArrayOfLayoutUnit = () => (JSArrayOfLayoutUnit = dart.constFn(_interceptors.JSArray$(LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit)))();
  let JSArrayOfLayoutGridCouple = () => (JSArrayOfLayoutGridCouple = dart.constFn(_interceptors.JSArray$(LayoutGrid__src__layout_grid_couple.LayoutGridCouple)))();
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
  Grid__gridWidget.FirstGrid = class FirstGrid extends src__widgets__framework.StatelessWidget {
    get widthSize() {
      return this[widthSize];
    }
    set widthSize(value) {
      this[widthSize] = value;
    }
    get heightSize() {
      return this[heightSize];
    }
    set heightSize(value) {
      this[heightSize] = value;
    }
    get gridSizeModel() {
      return this[gridSizeModel];
    }
    set gridSizeModel(value) {
      this[gridSizeModel] = value;
    }
    get modelKey() {
      return this[modelKey];
    }
    set modelKey(value) {
      super.modelKey = value;
    }
    build(context) {
      this.gridSizeModel = LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel.of(context, {modelKey: this.modelKey});
      this.widthSize = this.gridSizeModel.getWidth(this.modelKey);
      this.heightSize = this.gridSizeModel.getHeight(this.modelKey);
      return new src__widgets__container.Container.new({width: this.gridSizeModel.getWidth(this.modelKey), height: this.gridSizeModel.getWidth(this.modelKey), foregroundDecoration: new src__painting__box_decoration.BoxDecoration.new({border: src__painting__box_border.Border.all({color: src__material__colors.Colors.white, width: 2.0}), borderRadius: new src__painting__border_radius.BorderRadius.circular(4.0)}), child: new LayoutGrid__src__layout_grid.LayoutGrid.new({width: this.gridSizeModel.getWidth(this.modelKey), height: this.gridSizeModel.getWidth(this.modelKey), columns: JSArrayOfLayoutUnit().of([]), rows: JSArrayOfLayoutUnit().of([]), couples: JSArrayOfLayoutGridCouple().of([]), $creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/Grid/gridWidget.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 9, name: "width"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 9, name: "height"}))), const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 9, name: "columns"}))), const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 9, name: "rows"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 9, name: "couples"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/Grid/gridWidget.dart", parameterLocations: const$10 || (const$10 = dart.constList([const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 7, name: "width"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 7, name: "height"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 7, name: "foregroundDecoration"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (Grid__gridWidget.FirstGrid.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[widthSize] = 0.0;
    this[heightSize] = 0.0;
    this[gridSizeModel] = null;
    this[modelKey] = "Grid";
    Grid__gridWidget.FirstGrid.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = Grid__gridWidget.FirstGrid.prototype;
  dart.addTypeTests(Grid__gridWidget.FirstGrid);
  const widthSize = Symbol("FirstGrid.widthSize");
  const heightSize = Symbol("FirstGrid.heightSize");
  const gridSizeModel = Symbol("FirstGrid.gridSizeModel");
  const modelKey = Symbol("FirstGrid.modelKey");
  dart.setMethodSignature(Grid__gridWidget.FirstGrid, () => ({
    __proto__: dart.getMethods(Grid__gridWidget.FirstGrid.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(Grid__gridWidget.FirstGrid, "package:layout_grid_overview/Grid/gridWidget.dart");
  dart.setFieldSignature(Grid__gridWidget.FirstGrid, () => ({
    __proto__: dart.getFields(Grid__gridWidget.FirstGrid.__proto__),
    widthSize: dart.fieldType(core.double),
    heightSize: dart.fieldType(core.double),
    gridSizeModel: dart.fieldType(LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel),
    modelKey: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/layout_grid_overview/Grid/gridWidget", {
    "package:layout_grid_overview/Grid/gridWidget.dart": Grid__gridWidget
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/Grid/gridWidget.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAOS;;;;;;IAAiB;;;;;;IACH;;;;;;IACR;;;;;;UAGa;MACxB,qBAAqC,sEAAG,OAAO,aAAY;MAE3D,iBAAY,AAAc,4BAAS;MACnC,kBAAa,AAAc,6BAAU;AAErC,YAAO,mDAEE,AAAc,4BAAS,wBACtB,AAAc,4BAAS,sCAET,6DACL,6CACC,2CACP,qBAEkB,uDAAS,eAG/B,wDAEE,AAAc,4BAAS,wBACtB,AAAc,4BAAS,yBAEtB,oCAEH,uCAEG;IAIf;;;QAvCe;;IAER,kBAAY;IAAK,mBAAa;IAChB;IACR,iBAAW;AAJD,8DAAW,GAAG;;EAAC","file":"gridWidget.ddc.js"}');
  // Exports:
  return {
    Grid__gridWidget: Grid__gridWidget
  };
});

//# sourceMappingURL=gridWidget.ddc.js.map
