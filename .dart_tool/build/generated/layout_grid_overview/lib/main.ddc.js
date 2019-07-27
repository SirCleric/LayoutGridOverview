define(['dart_sdk', 'packages/flutter_web/material', 'packages/layout_grid_overview/LayoutGrid/src/Util/inherited_size_model', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/layout_grid_overview/LayoutGrid/src/layout_grid', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit_classes', 'packages/layout_grid_overview/LayoutGrid/src/layout_grid_couple'], function(dart_sdk, material, inherited_size_model, animation, animation$, ui, layout_grid, layout_grid_unit, layout_grid_unit_classes, layout_grid_couple) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__app = material.src__material__app;
  const src__material__theme_data = material.src__material__theme_data;
  const src__material__colors = material.src__material__colors;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__app_bar = material.src__material__app_bar;
  const src__material__flat_button = material.src__material__flat_button;
  const LayoutGrid__src__Util__inherited_size_model = inherited_size_model.LayoutGrid__src__Util__inherited_size_model;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__layout_builder = animation.src__widgets__layout_builder;
  const src__rendering__box = animation.src__rendering__box;
  const src__widgets__binding = animation.src__widgets__binding;
  const src__painting__text_style = animation$.src__painting__text_style;
  const ui$ = ui.ui;
  const LayoutGrid__src__layout_grid = layout_grid.LayoutGrid__src__layout_grid;
  const LayoutGrid__src__Util__layout_grid_unit = layout_grid_unit.LayoutGrid__src__Util__layout_grid_unit;
  const LayoutGrid__src__Util__layout_grid_unit_classes = layout_grid_unit_classes.LayoutGrid__src__Util__layout_grid_unit_classes;
  const LayoutGrid__src__layout_grid_couple = layout_grid_couple.LayoutGrid__src__layout_grid_couple;
  const main = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let JSArrayOfLayoutUnit = () => (JSArrayOfLayoutUnit = dart.constFn(_interceptors.JSArray$(LayoutGrid__src__Util__layout_grid_unit_classes.LayoutUnit)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let JSArrayOfListOfString = () => (JSArrayOfListOfString = dart.constFn(_interceptors.JSArray$(ListOfString())))();
  let JSArrayOfLayoutGridCouple = () => (JSArrayOfLayoutGridCouple = dart.constFn(_interceptors.JSArray$(LayoutGrid__src__layout_grid_couple.LayoutGridCouple)))();
  let BuildContextAndBoxConstraintsToLayoutGrid = () => (BuildContextAndBoxConstraintsToLayoutGrid = dart.constFn(dart.fnType(LayoutGrid__src__layout_grid.LayoutGrid, [src__widgets__framework.BuildContext, src__rendering__box.BoxConstraints])))();
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
  main.MyApp = class MyApp extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__app.MaterialApp.new({debugShowCheckedModeBanner: false, title: "Layout grid overview", theme: src__material__theme_data.ThemeData.new({primarySwatch: src__material__colors.Colors.deepPurple}), home: new LayoutGrid__src__Util__inherited_size_model.InheritedSizeModel.new({child: new main.MyHomePage.new({title: "Layout grid overview", $creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 39, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 50, name: "title"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 13, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$3 || (const$3 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 32, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 7, name: "debugShowCheckedModeBanner"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 7, name: "title"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 7, name: "theme"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 7, name: "home"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main.MyApp.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, "package:layout_grid_overview/main.dart");
  main.MyHomePage = class MyHomePage extends src__widgets__framework.StatefulWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    createState() {
      return new main._MyHomePageState.new();
    }
  };
  (main.MyHomePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    main.MyHomePage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyHomePage.prototype;
  dart.addTypeTests(main.MyHomePage);
  const title$ = Symbol("MyHomePage.title");
  dart.setMethodSignature(main.MyHomePage, () => ({
    __proto__: dart.getMethods(main.MyHomePage.__proto__),
    createState: dart.fnType(main._MyHomePageState, [])
  }));
  dart.setLibraryUri(main.MyHomePage, "package:layout_grid_overview/main.dart");
  dart.setFieldSignature(main.MyHomePage, () => ({
    __proto__: dart.getFields(main.MyHomePage.__proto__),
    title: dart.finalFieldType(core.String)
  }));
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
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  let const$49;
  let const$50;
  let const$51;
  let const$52;
  let const$53;
  let const$54;
  let const$55;
  let const$56;
  let const$57;
  let const$58;
  main._MyHomePageState = class _MyHomePageState extends src__widgets__framework.State$(main.MyHomePage) {
    build(context) {
      return new src__widgets__container.Container.new({child: new src__material__scaffold.Scaffold.new({backgroundColor: src__material__colors.Colors.deepPurple.shade800, appBar: new src__material__app_bar.AppBar.new({title: new src__widgets__text.Text.new(this.widget.title, {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontFamily: "ostrich", fontWeight: ui$.FontWeight.w700, fontSize: 32.0}), $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 18, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 30, name: "data"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 37, name: "style"})))], src__widgets__widget_inspector._Location))})))}), backgroundColor: src__material__colors.Colors.deepPurple.shade900, elevation: 0.0, actions: JSArrayOfWidget().of([new src__material__flat_button.FlatButton.new({color: src__material__colors.Colors.yellowAccent, child: new src__widgets__text.Text.new("GitHub", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.black, fontFamily: "ostrich", fontWeight: ui$.FontWeight.w700, fontSize: 24.0}), $creationLocationd_0dea112b090073317d4: const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 22, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$17 || (const$17 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 27, name: "data"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 36, name: "style"})))], src__widgets__widget_inspector._Location))})))}), onPressed: dart.fn(() => {
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 13, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$22 || (const$22 = dart.constList([const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 15, name: "color"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 15, name: "child"}))), const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 15, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 17, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$28 || (const$28 = dart.constList([const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 11, name: "title"}))), const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 11, name: "backgroundColor"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 11, name: "elevation"}))), const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 11, name: "actions"})))], src__widgets__widget_inspector._Location))})))}), body: new src__widgets__basic.Padding.new({padding: const$30 || (const$30 = dart.const(new src__painting__edge_insets.EdgeInsets.symmetric({horizontal: 50.0, vertical: 50.0}))), child: new src__widgets__layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => new LayoutGrid__src__layout_grid.LayoutGrid.new({width: constraints.maxWidth, height: constraints.maxHeight, sizeModel: LayoutGrid__src__Util__inherited_size_model.InheritedSizeModel.of(context), columns: JSArrayOfLayoutUnit().of([new LayoutGrid__src__Util__layout_grid_unit.LayoutMinMax.new({minUnit: new LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.new({pixels: 350.0}), maxUnit: new LayoutGrid__src__Util__layout_grid_unit.LayoutFraction.new({fraction: 1})}), new LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.new({pixels: 20.0}), new LayoutGrid__src__Util__layout_grid_unit.LayoutMinMax.new({minUnit: new LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.new({pixels: 200.0}), maxUnit: new LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.new({pixels: 800.0})})]), rows: JSArrayOfLayoutUnit().of([new LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.new({pixels: 50.0}), new LayoutGrid__src__Util__layout_grid_unit.LayoutDependent.new({line: 3, multiplicator: 1.0}), new LayoutGrid__src__Util__layout_grid_unit.LayoutFraction.new({fraction: 1})]), areas: JSArrayOfListOfString().of([JSArrayOfString().of(["....", "...", "................"]), JSArrayOfString().of(["text", "...", "NestedLayoutGrid"]), JSArrayOfString().of(["text", "...", "................"])]), couples: JSArrayOfLayoutGridCouple().of([new LayoutGrid__src__layout_grid_couple.LayoutGridCouple.new({widget: new main.TestContainer.new({$creationLocationd_0dea112b090073317d4: const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 82, column: 52, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$31 || (const$31 = dart.constList([], src__widgets__widget_inspector._Location))})))}), name: "text", sizeKey: "ok"}), new LayoutGrid__src__layout_grid_couple.LayoutGridCouple.new({widget: new main.TestContainer2.new({$creationLocationd_0dea112b090073317d4: const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 52, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$33 || (const$33 = dart.constList([], src__widgets__widget_inspector._Location))})))}), name: "NestedLayoutGrid", sizeKey: "ok2"})]), $creationLocationd_0dea112b090073317d4: const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 62, column: 22, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$42 || (const$42 = dart.constList([const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 17, name: "width"}))), const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 17, name: "height"}))), const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 17, name: "sizeModel"}))), const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 17, name: "columns"}))), const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 17, name: "rows"}))), const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 17, name: "areas"}))), const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 82, column: 17, name: "couples"})))], src__widgets__widget_inspector._Location))})))}), BuildContextAndBoxConstraintsToLayoutGrid()), $creationLocationd_0dea112b090073317d4: const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 59, column: 18, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$45 || (const$45 = dart.constList([const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 60, column: 13, name: "builder"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 56, column: 15, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$49 || (const$49 = dart.constList([const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 11, name: "padding"}))), const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 59, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$54 || (const$54 = dart.constList([const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 9, name: "backgroundColor"}))), const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 9, name: "appBar"}))), const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 56, column: 9, name: "body"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$57 || (const$57 = dart.constList([const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main._MyHomePageState.new = function() {
    main._MyHomePageState.__proto__.new.call(this);
    ;
  }).prototype = main._MyHomePageState.prototype;
  dart.addTypeTests(main._MyHomePageState);
  dart.setMethodSignature(main._MyHomePageState, () => ({
    __proto__: dart.getMethods(main._MyHomePageState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(main._MyHomePageState, "package:layout_grid_overview/main.dart");
  let const$59;
  let const$60;
  let const$61;
  let const$62;
  let const$63;
  let const$64;
  let const$65;
  let const$66;
  let const$67;
  main.TestContainer = class TestContainer extends src__widgets__framework.StatelessWidget {
    build(context) {
      let sizeModel = LayoutGrid__src__Util__inherited_size_model.InheritedSizeModel.of(context, {sizeKey: "ok"});
      core.print(sizeModel.getWidth("ok"));
      return new src__widgets__container.Container.new({width: sizeModel.getWidth("ok"), height: sizeModel.getHeight("ok"), color: src__material__colors.Colors.white, child: new src__widgets__text.Text.new("OK", {$creationLocationd_0dea112b090073317d4: const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 108, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$60 || (const$60 = dart.constList([const$59 || (const$59 = dart.const(new src__widgets__widget_inspector._Location.new({line: 108, column: 19, name: "data"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$67 || (const$67 = dart.const(new src__widgets__widget_inspector._Location.new({line: 102, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$66 || (const$66 = dart.constList([const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 104, column: 7, name: "width"}))), const$63 || (const$63 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 7, name: "height"}))), const$64 || (const$64 = dart.const(new src__widgets__widget_inspector._Location.new({line: 107, column: 7, name: "color"}))), const$65 || (const$65 = dart.const(new src__widgets__widget_inspector._Location.new({line: 108, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main.TestContainer.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.TestContainer.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.TestContainer.prototype;
  dart.addTypeTests(main.TestContainer);
  dart.setMethodSignature(main.TestContainer, () => ({
    __proto__: dart.getMethods(main.TestContainer.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(main.TestContainer, "package:layout_grid_overview/main.dart");
  let const$68;
  let const$69;
  let const$70;
  let const$71;
  let const$72;
  let const$73;
  let const$74;
  let const$75;
  let const$76;
  main.TestContainer2 = class TestContainer2 extends src__widgets__framework.StatelessWidget {
    build(context) {
      let sizeModel = LayoutGrid__src__Util__inherited_size_model.InheritedSizeModel.of(context, {sizeKey: "ok2"});
      core.print(sizeModel.getWidth("ok2"));
      return new src__widgets__container.Container.new({width: sizeModel.getWidth("ok2"), height: sizeModel.getHeight("ok2"), color: src__material__colors.Colors.white, child: new src__widgets__text.Text.new("OK2", {$creationLocationd_0dea112b090073317d4: const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 128, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$69 || (const$69 = dart.constList([const$68 || (const$68 = dart.const(new src__widgets__widget_inspector._Location.new({line: 128, column: 19, name: "data"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$76 || (const$76 = dart.const(new src__widgets__widget_inspector._Location.new({line: 122, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$75 || (const$75 = dart.constList([const$71 || (const$71 = dart.const(new src__widgets__widget_inspector._Location.new({line: 124, column: 7, name: "width"}))), const$72 || (const$72 = dart.const(new src__widgets__widget_inspector._Location.new({line: 125, column: 7, name: "height"}))), const$73 || (const$73 = dart.const(new src__widgets__widget_inspector._Location.new({line: 127, column: 7, name: "color"}))), const$74 || (const$74 = dart.const(new src__widgets__widget_inspector._Location.new({line: 128, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main.TestContainer2.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.TestContainer2.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.TestContainer2.prototype;
  dart.addTypeTests(main.TestContainer2);
  dart.setMethodSignature(main.TestContainer2, () => ({
    __proto__: dart.getMethods(main.TestContainer2.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(main.TestContainer2, "package:layout_grid_overview/main.dart");
  let const$77;
  let const$78;
  main.main = function() {
    return src__widgets__binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: const$78 || (const$78 = dart.const(new src__widgets__widget_inspector._Location.new({line: 5, column: 23, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$77 || (const$77 = dart.constList([], src__widgets__widget_inspector._Location))})))}));
  };
  dart.trackLibraries("packages/layout_grid_overview/main", {
    "package:layout_grid_overview/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAQ4B;AACxB,YAAO,qEAEuB,cACrB,+BAEA,wDACiB,iDAElB,+EAA0B,gCAAkB;IAEtD;;;;;;EACF;;;;;;;;IAKe;;;;;;;AAEqB;IAAkB;;;QAJpC;QAAU;;;AAAU,mDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAUzB;AAExB,YAAO,mDACE,2DAEmB,AAAW,0DAE3B,8CACC,gCAAK,AAAO,2BAAc,oDAAwB,gDAAkB,uBAAkC,+BAAgB,2lBACrG,AAAW,6DACxB,cACM,sBACf,sDACgB,kDACP,gCAAK,kBAAgB,oDAAwB,gDAAkB,uBAAkC,+BAAgB,qlBAC7G;8jDAOX,8CACW,oGAAiC,gBAAa,iBAEtD,6DACI,SAAc,SAAwB,gBAEtC,wDACE,AAAY,WAAD,mBACV,AAAY,WAAD,uBAEW,kEAAG,OAAO,YAE/B,0BAAC,uEAAsB,qEAAoB,kBAAe,0EAAyB,OAClF,qEAAoB,QACpB,uEAAsB,qEAAoB,kBAAe,qEAAoB,mBAEjF,0BACJ,qEAAoB,QACpB,uEAAsB,kBAAkB,OACxC,0EAAyB,cAGpB,4BAAC,sBAAC,QAAO,OAAM,sBACd,sBAAC,QAAO,OAAM,sBACd,sBAAC,QAAO,OAAM,iCAEb,gCAAC,sEAAyB,2WAAsB,iBAAiB,QAChE,sEAAyB,4WAAuB,6BAA6B;IAOrG;;;;;EACF;;;;;;;;;;;;;;;;;UAM4B;AAEC,sBAA+B,kEAAG,OAAO,YAAW;MAC7E,WAAM,AAAU,SAAD,UAAU;AAEzB,YAAO,mDAEE,AAAU,SAAD,UAAU,eAClB,AAAU,SAAD,WAAW,cAEd,2CACP,gCAAK;IAEhB;;;;;;EACF;;;;;;;;;;;;;;;;;UAM4B;AAEC,sBAA+B,kEAAG,OAAO,YAAW;MAC7E,WAAM,AAAU,SAAD,UAAU;AAEzB,YAAO,mDAEE,AAAU,SAAD,UAAU,gBAClB,AAAU,SAAD,WAAW,eAEd,2CACP,gCAAK;IAEhB;;;;;;EACF;;;;;;;;;;AA9He,wCAAO;EAAQ","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
