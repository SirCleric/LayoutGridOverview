define(['dart_sdk', 'packages/layout_grid_overview/LayoutGrid/src/Util/inherited_layout_model', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/layout_grid_overview/LayoutGrid/src/layout_grid', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_private_units', 'packages/layout_grid_overview/LayoutGrid/src/layout_grid_couple', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_units'], function(dart_sdk, inherited_layout_model, animation, material, animation$, layout_grid, layout_grid_private_units, layout_grid_couple, layout_grid_units) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const LayoutGrid__src__Util__inherited_layout_model = inherited_layout_model.LayoutGrid__src__Util__inherited_layout_model;
  const src__widgets__basic = animation.src__widgets__basic;
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
  const LayoutGrid__src__Util__layout_grid_units = layout_grid_units.LayoutGrid__src__Util__layout_grid_units;
  const Grid__gridWidget = Object.create(dart.library);
  let JSArrayOfLayoutUnit = () => (JSArrayOfLayoutUnit = dart.constFn(_interceptors.JSArray$(LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit)))();
  let JSArrayOfLayoutGridCouple = () => (JSArrayOfLayoutGridCouple = dart.constFn(_interceptors.JSArray$(LayoutGrid__src__layout_grid_couple.LayoutGridCouple)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let JSArrayOfListOfString = () => (JSArrayOfListOfString = dart.constFn(_interceptors.JSArray$(ListOfString())))();
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
      core.print(this.widthSize);
      return new src__widgets__basic.SizedBox.new({width: this.widthSize, height: this.widthSize, child: new src__widgets__container.Container.new({decoration: new src__painting__box_decoration.BoxDecoration.new({border: src__painting__box_border.Border.all({color: src__material__colors.Colors.white, width: 2.0}), borderRadius: new src__painting__border_radius.BorderRadius.circular(4.0)}), child: new LayoutGrid__src__layout_grid.LayoutGrid.new({width: this.widthSize, height: this.widthSize, columns: JSArrayOfLayoutUnit().of([]), rows: JSArrayOfLayoutUnit().of([]), couples: JSArrayOfLayoutGridCouple().of([]), $creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 16, file: "org-dartlang-app:///packages/layout_grid_overview/Grid/gridWidget.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 11, name: "width"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 11, name: "height"}))), const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 11, name: "columns"}))), const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 11, name: "rows"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 11, name: "couples"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/Grid/gridWidget.dart", parameterLocations: const$8 || (const$8 = dart.constList([const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 9, name: "decoration"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/Grid/gridWidget.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 7, name: "width"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 7, name: "height"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
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
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  Grid__gridWidget.SecondGrid = class SecondGrid extends src__widgets__framework.StatelessWidget {
    get widthSize() {
      return this[widthSize$];
    }
    set widthSize(value) {
      this[widthSize$] = value;
    }
    get heightSize() {
      return this[heightSize$];
    }
    set heightSize(value) {
      this[heightSize$] = value;
    }
    get gridSizeModel() {
      return this[gridSizeModel$];
    }
    set gridSizeModel(value) {
      this[gridSizeModel$] = value;
    }
    get modelKey() {
      return this[modelKey$];
    }
    set modelKey(value) {
      super.modelKey = value;
    }
    build(context) {
      this.gridSizeModel = LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel.of(context, {modelKey: this.modelKey});
      this.widthSize = this.gridSizeModel.getWidth(this.modelKey);
      core.print(this.widthSize);
      return new src__widgets__basic.SizedBox.new({width: this.widthSize, height: this.widthSize, child: new src__widgets__container.Container.new({decoration: new src__painting__box_decoration.BoxDecoration.new({border: src__painting__box_border.Border.all({color: src__material__colors.Colors.white, width: 2.0}), borderRadius: new src__painting__border_radius.BorderRadius.circular(4.0)}), child: new LayoutGrid__src__layout_grid.LayoutGrid.new({width: this.widthSize, height: this.widthSize, layoutModel: LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel.of(context), columns: JSArrayOfLayoutUnit().of([new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: 0.0}), new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: 25.0, priority: 1}), new LayoutGrid__src__Util__layout_grid_units.LayoutFraction.new({fraction: 1}), new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: 25.0, priority: 1})]), rows: JSArrayOfLayoutUnit().of([new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: 0.0}), new LayoutGrid__src__Util__layout_grid_units.LayoutFraction.new({fraction: 1})]), areas: JSArrayOfListOfString().of([JSArrayOfString().of(["a0", "a1", "a2"])]), couples: JSArrayOfLayoutGridCouple().of([new LayoutGrid__src__layout_grid_couple.LayoutGridCouple.new({widget: new Grid__gridWidget.Area.new({modelKey: "a0", $creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 99, column: 23, file: "org-dartlang-app:///packages/layout_grid_overview/Grid/gridWidget.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 99, column: 28, name: "modelKey"})))], src__widgets__widget_inspector._Location))})))}), col0: 0, col1: 1, row0: 0, row1: 1, modelKey: "a0"}), new LayoutGrid__src__layout_grid_couple.LayoutGridCouple.new({widget: new Grid__gridWidget.Area.new({modelKey: "a1", $creationLocationd_0dea112b090073317d4: const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 23, file: "org-dartlang-app:///packages/layout_grid_overview/Grid/gridWidget.dart", parameterLocations: const$19 || (const$19 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 28, name: "modelKey"})))], src__widgets__widget_inspector._Location))})))}), col0: 1, col1: 2, row0: 0, row1: 1, modelKey: "a1"}), new LayoutGrid__src__layout_grid_couple.LayoutGridCouple.new({widget: new Grid__gridWidget.Area.new({modelKey: "a2", $creationLocationd_0dea112b090073317d4: const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 111, column: 23, file: "org-dartlang-app:///packages/layout_grid_overview/Grid/gridWidget.dart", parameterLocations: const$22 || (const$22 = dart.constList([const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 111, column: 28, name: "modelKey"})))], src__widgets__widget_inspector._Location))})))}), col0: 2, col1: 3, row0: 0, row1: 1, modelKey: "a2"})]), $creationLocationd_0dea112b090073317d4: const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 16, file: "org-dartlang-app:///packages/layout_grid_overview/Grid/gridWidget.dart", parameterLocations: const$31 || (const$31 = dart.constList([const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 11, name: "width"}))), const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 11, name: "height"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 11, name: "layoutModel"}))), const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 11, name: "columns"}))), const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 90, column: 11, name: "rows"}))), const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 95, column: 11, name: "areas"}))), const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 97, column: 11, name: "couples"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/Grid/gridWidget.dart", parameterLocations: const$35 || (const$35 = dart.constList([const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 9, name: "decoration"}))), const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/Grid/gridWidget.dart", parameterLocations: const$40 || (const$40 = dart.constList([const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 7, name: "width"}))), const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 65, column: 7, name: "height"}))), const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (Grid__gridWidget.SecondGrid.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[widthSize$] = 0.0;
    this[heightSize$] = 0.0;
    this[gridSizeModel$] = null;
    this[modelKey$] = "Grid";
    Grid__gridWidget.SecondGrid.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = Grid__gridWidget.SecondGrid.prototype;
  dart.addTypeTests(Grid__gridWidget.SecondGrid);
  const widthSize$ = Symbol("SecondGrid.widthSize");
  const heightSize$ = Symbol("SecondGrid.heightSize");
  const gridSizeModel$ = Symbol("SecondGrid.gridSizeModel");
  const modelKey$ = Symbol("SecondGrid.modelKey");
  dart.setMethodSignature(Grid__gridWidget.SecondGrid, () => ({
    __proto__: dart.getMethods(Grid__gridWidget.SecondGrid.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(Grid__gridWidget.SecondGrid, "package:layout_grid_overview/Grid/gridWidget.dart");
  dart.setFieldSignature(Grid__gridWidget.SecondGrid, () => ({
    __proto__: dart.getFields(Grid__gridWidget.SecondGrid.__proto__),
    widthSize: dart.fieldType(core.double),
    heightSize: dart.fieldType(core.double),
    gridSizeModel: dart.fieldType(LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel),
    modelKey: dart.finalFieldType(core.String)
  }));
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  Grid__gridWidget.Area = class Area extends src__widgets__framework.StatelessWidget {
    get widthSize() {
      return this[widthSize$0];
    }
    set widthSize(value) {
      this[widthSize$0] = value;
    }
    get heightSize() {
      return this[heightSize$0];
    }
    set heightSize(value) {
      this[heightSize$0] = value;
    }
    get sizeModel() {
      return this[sizeModel];
    }
    set sizeModel(value) {
      this[sizeModel] = value;
    }
    get modelKey() {
      return this[modelKey$0];
    }
    set modelKey(value) {
      super.modelKey = value;
    }
    build(context) {
      this.sizeModel = LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel.of(context, {modelKey: this.modelKey});
      this.widthSize = this.sizeModel.getWidth(this.modelKey);
      this.heightSize = this.sizeModel.getHeight(this.modelKey);
      return new src__widgets__container.Container.new({width: this.widthSize, height: this.heightSize, decoration: new src__painting__box_decoration.BoxDecoration.new({border: src__painting__box_border.Border.all({width: 2.0, color: src__material__colors.Colors.white})}), $creationLocationd_0dea112b090073317d4: const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 138, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/Grid/gridWidget.dart", parameterLocations: const$45 || (const$45 = dart.constList([const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 139, column: 7, name: "width"}))), const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 140, column: 7, name: "height"}))), const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 142, column: 7, name: "decoration"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (Grid__gridWidget.Area.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let modelKey = opts && 'modelKey' in opts ? opts.modelKey : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[widthSize$0] = 0.0;
    this[heightSize$0] = 0.0;
    this[sizeModel] = null;
    this[modelKey$0] = modelKey;
    Grid__gridWidget.Area.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = Grid__gridWidget.Area.prototype;
  dart.addTypeTests(Grid__gridWidget.Area);
  const widthSize$0 = Symbol("Area.widthSize");
  const heightSize$0 = Symbol("Area.heightSize");
  const sizeModel = Symbol("Area.sizeModel");
  const modelKey$0 = Symbol("Area.modelKey");
  dart.setMethodSignature(Grid__gridWidget.Area, () => ({
    __proto__: dart.getMethods(Grid__gridWidget.Area.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(Grid__gridWidget.Area, "package:layout_grid_overview/Grid/gridWidget.dart");
  dart.setFieldSignature(Grid__gridWidget.Area, () => ({
    __proto__: dart.getFields(Grid__gridWidget.Area.__proto__),
    widthSize: dart.fieldType(core.double),
    heightSize: dart.fieldType(core.double),
    sizeModel: dart.fieldType(LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel),
    modelKey: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/layout_grid_overview/Grid/gridWidget", {
    "package:layout_grid_overview/Grid/gridWidget.dart": Grid__gridWidget
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/Grid/gridWidget.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAOS;;;;;;IAAiB;;;;;;IACH;;;;;;IACR;;;;;;UAGa;MACxB,qBAAqC,sEAAG,OAAO,aAAY;MAE3D,iBAAY,AAAc,4BAAS;MACnC,WAAM;AAEN,YAAO,8CACE,wBACC,uBACD,uDAEO,6DACK,6CACC,2CACP,qBAEkB,uDAAS,eAG/B,wDAEE,wBACC,yBAEC,oCAEH,uCAEG;IAKjB;;;QAxCe;;IAER,kBAAY;IAAK,mBAAa;IAChB;IACR,iBAAW;AAJD,8DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA8C/B;;;;;;IAAiB;;;;;;IACH;;;;;;IACR;;;;;;UAGa;MACxB,qBAAqC,sEAAG,OAAO,aAAY;MAE3D,iBAAY,AAAc,4BAAS;MACnC,WAAM;AAEN,YAAO,8CACE,wBACC,uBACD,uDAEO,6DACK,6CACC,2CACP,qBAEkB,uDAAS,eAG/B,wDAEE,wBACC,6BAE0B,sEAAG,OAAO,YAEnC,0BACP,sEAAoB,OACpB,sEAAoB,gBAAe,KACnC,2EAAyB,KACzB,sEAAoB,gBAAe,aAG/B,0BACJ,sEAAoB,OACpB,2EAAyB,cAGpB,4BAAC,sBAAC,MAAM,MAAM,mBAEZ,gCACP,sEACU,yCAAe,+dACjB,SAAQ,SACR,SAAQ,aACJ,QAEZ,sEACU,yCAAe,ieACjB,SAAQ,SACR,SAAQ,aACJ,QAEZ,sEACU,yCAAe,ieACjB,SAAQ,SACR,SAAQ,aACJ;IAMtB;;;QAtEgB;;IAET,mBAAY;IAAK,oBAAa;IAChB;IACR,kBAAW;AAJA,+DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;IA4EhC;;;;;;IAAiB;;;;;;IACH;;;;;;IACR;;;;;;UAGa;MAExB,iBAAiC,sEAAG,OAAO,aAAY;MAEvD,iBAAY,AAAU,wBAAS;MAC/B,kBAAa,AAAU,yBAAU;AAEjC,YAAO,mDACE,wBACC,6BAEI,6DACK,6CACN,YACO;IAItB;;;QAzBU;QAAU;;IAEb,oBAAY;IAAK,qBAAa;IAChB;IAHD;AAAa,yDAAW,GAAG;;EAAC","file":"gridWidget.ddc.js"}');
  // Exports:
  return {
    Grid__gridWidget: Grid__gridWidget
  };
});

//# sourceMappingURL=gridWidget.ddc.js.map
