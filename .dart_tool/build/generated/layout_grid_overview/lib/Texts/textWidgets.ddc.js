define(['dart_sdk', 'packages/layout_grid_overview/LayoutGrid/src/Util/inherited_layout_model', 'packages/flutter_web/animation', 'packages/layout_grid_overview/Texts/styles'], function(dart_sdk, inherited_layout_model, animation, styles) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const LayoutGrid__src__Util__inherited_layout_model = inherited_layout_model.LayoutGrid__src__Util__inherited_layout_model;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const Texts__styles = styles.Texts__styles;
  const Texts__textWidgets = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
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
  Texts__textWidgets.FirstText = class FirstText extends src__widgets__framework.StatelessWidget {
    get modelKey() {
      return this[modelKey];
    }
    set modelKey(value) {
      super.modelKey = value;
    }
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
    get sizeModel() {
      return this[sizeModel];
    }
    set sizeModel(value) {
      this[sizeModel] = value;
    }
    get gridSizeModel() {
      return this[gridSizeModel];
    }
    set gridSizeModel(value) {
      this[gridSizeModel] = value;
    }
    build(context) {
      this.sizeModel = LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel.of(context, {modelKey: this.modelKey});
      this.gridSizeModel = LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel.of(context, {modelKey: "Grid"});
      this.widthSize = this.gridSizeModel.getWidth("Grid");
      this.heightSize = this.gridSizeModel.getHeight("Grid");
      return new src__widgets__container.Container.new({width: this.sizeModel.getWidth(this.modelKey), height: this.sizeModel.getHeight(this.modelKey), child: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new src__widgets__text.Text.new("This is a LayoutGrid", {style: Texts__styles.styles.getHeaderStyle(), $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 11, file: "org-dartlang-app:///packages/layout_grid_overview/Texts/textWidgets.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 16, name: "data"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 39, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("It has been created with the width of " + dart.str(this.widthSize) + " and height of " + dart.str(this.heightSize) + "px", {style: Texts__styles.styles.getBodyStyle(), $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 11, file: "org-dartlang-app:///packages/layout_grid_overview/Texts/textWidgets.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 95, name: "data"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 96, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/Texts/textWidgets.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 9, name: "mainAxisAlignment"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/Texts/textWidgets.dart", parameterLocations: const$14 || (const$14 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 7, name: "width"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 7, name: "height"}))), const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (Texts__textWidgets.FirstText.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[modelKey] = "Text";
    this[widthSize] = 0.0;
    this[heightSize] = 0.0;
    this[sizeModel] = null;
    this[gridSizeModel] = null;
    Texts__textWidgets.FirstText.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = Texts__textWidgets.FirstText.prototype;
  dart.addTypeTests(Texts__textWidgets.FirstText);
  const modelKey = Symbol("FirstText.modelKey");
  const widthSize = Symbol("FirstText.widthSize");
  const heightSize = Symbol("FirstText.heightSize");
  const sizeModel = Symbol("FirstText.sizeModel");
  const gridSizeModel = Symbol("FirstText.gridSizeModel");
  dart.setMethodSignature(Texts__textWidgets.FirstText, () => ({
    __proto__: dart.getMethods(Texts__textWidgets.FirstText.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(Texts__textWidgets.FirstText, "package:layout_grid_overview/Texts/textWidgets.dart");
  dart.setFieldSignature(Texts__textWidgets.FirstText, () => ({
    __proto__: dart.getFields(Texts__textWidgets.FirstText.__proto__),
    modelKey: dart.finalFieldType(core.String),
    widthSize: dart.fieldType(core.double),
    heightSize: dart.fieldType(core.double),
    sizeModel: dart.fieldType(LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel),
    gridSizeModel: dart.fieldType(LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel)
  }));
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
  Texts__textWidgets.SecondText = class SecondText extends src__widgets__framework.StatelessWidget {
    get modelKey() {
      return this[modelKey$];
    }
    set modelKey(value) {
      super.modelKey = value;
    }
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
    get sizeModel() {
      return this[sizeModel$];
    }
    set sizeModel(value) {
      this[sizeModel$] = value;
    }
    build(context) {
      this.sizeModel = LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel.of(context, {modelKey: this.modelKey});
      return new src__widgets__container.Container.new({width: this.sizeModel.getWidth(this.modelKey), height: this.sizeModel.getHeight(this.modelKey), child: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new src__widgets__text.Text.new("You can divide it in areas with lines", {style: Texts__styles.styles.getHeaderStyle(), $creationLocationd_0dea112b090073317d4: const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 11, file: "org-dartlang-app:///packages/layout_grid_overview/Texts/textWidgets.dart", parameterLocations: const$18 || (const$18 = dart.constList([const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 16, name: "data"}))), const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 56, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("Ex. col = [LayoutPixel(pixels: 25.0), LayoutFraction(fraction: 2), LayoutPixel(pixels: 25.0), ]", {style: Texts__styles.styles.getBodyStyle(), $creationLocationd_0dea112b090073317d4: const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 11, file: "org-dartlang-app:///packages/layout_grid_overview/Texts/textWidgets.dart", parameterLocations: const$22 || (const$22 = dart.constList([const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 16, name: "data"}))), const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 114, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/Texts/textWidgets.dart", parameterLocations: const$26 || (const$26 = dart.constList([const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 60, column: 9, name: "mainAxisAlignment"}))), const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 62, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/Texts/textWidgets.dart", parameterLocations: const$31 || (const$31 = dart.constList([const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 7, name: "width"}))), const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 56, column: 7, name: "height"}))), const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (Texts__textWidgets.SecondText.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[modelKey$] = "Text";
    this[widthSize$] = 0.0;
    this[heightSize$] = 0.0;
    this[sizeModel$] = null;
    Texts__textWidgets.SecondText.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = Texts__textWidgets.SecondText.prototype;
  dart.addTypeTests(Texts__textWidgets.SecondText);
  const modelKey$ = Symbol("SecondText.modelKey");
  const widthSize$ = Symbol("SecondText.widthSize");
  const heightSize$ = Symbol("SecondText.heightSize");
  const sizeModel$ = Symbol("SecondText.sizeModel");
  dart.setMethodSignature(Texts__textWidgets.SecondText, () => ({
    __proto__: dart.getMethods(Texts__textWidgets.SecondText.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(Texts__textWidgets.SecondText, "package:layout_grid_overview/Texts/textWidgets.dart");
  dart.setFieldSignature(Texts__textWidgets.SecondText, () => ({
    __proto__: dart.getFields(Texts__textWidgets.SecondText.__proto__),
    modelKey: dart.finalFieldType(core.String),
    widthSize: dart.fieldType(core.double),
    heightSize: dart.fieldType(core.double),
    sizeModel: dart.fieldType(LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel)
  }));
  dart.trackLibraries("packages/layout_grid_overview/Texts/textWidgets", {
    "package:layout_grid_overview/Texts/textWidgets.dart": Texts__textWidgets
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/Texts/textWidgets.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQe;;;;;;IACN;;;;;;IAAiB;;;;;;IACH;;;;;;IACA;;;;;;UAGK;MAExB,iBAAiC,sEAAG,OAAO,aAAY;MACvD,qBAAqC,sEAAG,OAAO,aAAY;MAE3D,iBAAY,AAAc,4BAAS;MACnC,kBAAa,AAAc,6BAAU;AAErC,YAAO,mDAEE,AAAU,wBAAS,wBAClB,AAAU,yBAAU,uBAErB,uDAEgC,wDAEnB,sBAChB,gCAAK,gCAAqC,4mBAC1C,gCAAK,AAA+E,oDAAvC,kBAAS,6BAAgB,mBAAU,cAAmB;IAI3G;;;QA/Be;;IAEF,iBAAW;IACjB,kBAAY;IAAK,mBAAa;IAChB;IACA;AALE,gEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAqCzB;;;;;;IACN;;;;;;IAAiB;;;;;;IACH;;;;;;UAGK;MAExB,iBAAiC,sEAAG,OAAO,aAAY;AAEvD,YAAO,mDAEE,AAAU,wBAAS,wBAClB,AAAU,yBAAU,uBAErB,uDAEgC,wDAEnB,sBAChB,gCAAK,iDAAsD,snBAC3D,gCAAK,2GAAgH;IAI7H;;;QA1BgB;;IAEH,kBAAW;IACjB,mBAAY;IAAK,oBAAa;IAChB;AAJG,iEAAW,GAAG;;EAAC","file":"textWidgets.ddc.js"}');
  // Exports:
  return {
    Texts__textWidgets: Texts__textWidgets
  };
});

//# sourceMappingURL=textWidgets.ddc.js.map
