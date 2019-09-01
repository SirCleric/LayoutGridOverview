define(['dart_sdk', 'packages/flutter_web/animation', 'packages/layout_grid_overview/LayoutGrid/src/layout_grid', 'packages/layout_grid_overview/LayoutGrid/src/Util/inherited_layout_model', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_units', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_private_units', 'packages/layout_grid_overview/LayoutGrid/src/layout_grid_couple', 'packages/layout_grid_overview/mainImage', 'packages/layout_grid_overview/mainCredentials', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, animation, layout_grid, inherited_layout_model, layout_grid_units, layout_grid_private_units, layout_grid_couple, mainImage, mainCredentials, animation$) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__layout_builder = animation.src__widgets__layout_builder;
  const src__widgets__single_child_scroll_view = animation.src__widgets__single_child_scroll_view;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__rendering__box = animation.src__rendering__box;
  const LayoutGrid__src__layout_grid = layout_grid.LayoutGrid__src__layout_grid;
  const LayoutGrid__src__Util__inherited_layout_model = inherited_layout_model.LayoutGrid__src__Util__inherited_layout_model;
  const LayoutGrid__src__Util__layout_grid_units = layout_grid_units.LayoutGrid__src__Util__layout_grid_units;
  const LayoutGrid__src__Util__layout_grid_private_units = layout_grid_private_units.LayoutGrid__src__Util__layout_grid_private_units;
  const LayoutGrid__src__layout_grid_couple = layout_grid_couple.LayoutGrid__src__layout_grid_couple;
  const mainImage$ = mainImage.mainImage;
  const mainCredentials$ = mainCredentials.mainCredentials;
  const src__painting__alignment = animation$.src__painting__alignment;
  const mainLayout = Object.create(dart.library);
  let JSArrayOfLayoutUnit = () => (JSArrayOfLayoutUnit = dart.constFn(_interceptors.JSArray$(LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit)))();
  let JSArrayOfLayoutGridCouple = () => (JSArrayOfLayoutGridCouple = dart.constFn(_interceptors.JSArray$(LayoutGrid__src__layout_grid_couple.LayoutGridCouple)))();
  let BuildContextAndBoxConstraintsToSingleChildScrollView = () => (BuildContextAndBoxConstraintsToSingleChildScrollView = dart.constFn(dart.fnType(src__widgets__single_child_scroll_view.SingleChildScrollView, [src__widgets__framework.BuildContext, src__rendering__box.BoxConstraints])))();
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
  mainLayout.MainLayout = class MainLayout extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => new src__widgets__single_child_scroll_view.SingleChildScrollView.new({child: new LayoutGrid__src__layout_grid.LayoutGrid.new({width: constraints.maxWidth, layoutModel: LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel.of(context), columns: JSArrayOfLayoutUnit().of([new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: 0.0}), new LayoutGrid__src__Util__layout_grid_units.LayoutFraction.new({fraction: 1}), new LayoutGrid__src__Util__layout_grid_units.LayoutFraction.new({fraction: 4}), new LayoutGrid__src__Util__layout_grid_units.LayoutFraction.new({fraction: 4}), new LayoutGrid__src__Util__layout_grid_units.LayoutFraction.new({fraction: 1})]), rows: JSArrayOfLayoutUnit().of([new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: 0.0}), new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: constraints.maxHeight}), new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: 100.0}), new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: dart.notNull(constraints.maxHeight) * 0.5}), new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: 100.0}), new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: dart.notNull(constraints.maxHeight) * 0.15}), new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: dart.notNull(constraints.maxHeight) * 0.5}), new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: dart.notNull(constraints.maxHeight) * 0.2})]), couples: JSArrayOfLayoutGridCouple().of([new LayoutGrid__src__layout_grid_couple.LayoutGridCouple.new({widget: new mainImage$.MainImageStack.new({$creationLocationd_0dea112b090073317d4: const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 25, file: "org-dartlang-app:///packages/layout_grid_overview/mainLayout.dart", parameterLocations: const$ || (const$ = dart.constList([], src__widgets__widget_inspector._Location))})))}), col0: 0, col1: 4, row0: 0, row1: 1, modelKey: "MainImageStack"}), new LayoutGrid__src__layout_grid_couple.LayoutGridCouple.new({widget: new mainCredentials$.MainCredentialsStack.new({$creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 54, column: 25, file: "org-dartlang-app:///packages/layout_grid_overview/mainLayout.dart", parameterLocations: const$1 || (const$1 = dart.constList([], src__widgets__widget_inspector._Location))})))}), col0: 0, col1: 4, row0: 2, row1: 3, alignment: new src__painting__alignment.Alignment.new(0.0, 0.0), modelKey: "MainCredentialsStack"})]), $creationLocationd_0dea112b090073317d4: const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 18, file: "org-dartlang-app:///packages/layout_grid_overview/mainLayout.dart", parameterLocations: const$8 || (const$8 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 13, name: "width"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 13, name: "layoutModel"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 13, name: "columns"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 13, name: "rows"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 13, name: "couples"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 16, file: "org-dartlang-app:///packages/layout_grid_overview/mainLayout.dart", parameterLocations: const$11 || (const$11 = dart.constList([const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), BuildContextAndBoxConstraintsToSingleChildScrollView()), $creationLocationd_0dea112b090073317d4: const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/mainLayout.dart", parameterLocations: const$14 || (const$14 = dart.constList([const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 7, name: "builder"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (mainLayout.MainLayout.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    mainLayout.MainLayout.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = mainLayout.MainLayout.prototype;
  dart.addTypeTests(mainLayout.MainLayout);
  dart.setMethodSignature(mainLayout.MainLayout, () => ({
    __proto__: dart.getMethods(mainLayout.MainLayout.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(mainLayout.MainLayout, "package:layout_grid_overview/mainLayout.dart");
  dart.trackLibraries("packages/layout_grid_overview/mainLayout", {
    "package:layout_grid_overview/mainLayout.dart": mainLayout
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/mainLayout.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAa4B;AAExB,YAAO,8DACI,SAAc,SAAwB,gBAEtC,6EAEE,wDAEE,AAAY,WAAD,wBAEgB,sEAAG,OAAO,YAEnC,0BACP,sEAAoB,OACpB,2EAAyB,KACzB,2EAAyB,KACzB,2EAAyB,KACzB,2EAAyB,aAGrB,0BACJ,sEAAoB,OACpB,sEAAoB,AAAY,WAAD,cAC/B,sEAAoB,SACpB,sEAA0C,aAAtB,AAAY,WAAD,cAAa,OAC5C,sEAAoB,SACpB,sEAA0C,aAAtB,AAAY,WAAD,cAAa,QAC5C,sEAA0C,aAAtB,AAAY,WAAD,cAAa,OAC5C,sEAA0C,aAAtB,AAAY,WAAD,cAAa,kBAGrC,gCACP,sEACU,kXACF,SAAS,SACT,SAAS,aACL,oBAEZ,sEACU,gYACF,SAAS,SACT,SAAS,cACJ,2CAAU,KAAK,gBAChB;IAOxB;;;QAvDM;;AACD,yDAAW,GAAG;;EAAC","file":"mainLayout.ddc.js"}');
  // Exports:
  return {
    mainLayout: mainLayout
  };
});

//# sourceMappingURL=mainLayout.ddc.js.map
