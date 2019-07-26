define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/layout_grid_overview/LayoutGrid/src/layout_grid', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit_classes', 'packages/layout_grid_overview/LayoutGrid/src/layout_grid_couple', 'packages/layout_grid_overview/LayoutGrid/src/Util/inherited_size_model'], function(dart_sdk, material, animation, animation$, ui, layout_grid, layout_grid_unit, layout_grid_unit_classes, layout_grid_couple, inherited_size_model) {
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
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__container = animation.src__widgets__container;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__painting__box_border = animation.src__painting__box_border;
  const src__widgets__binding = animation.src__widgets__binding;
  const src__painting__text_style = animation$.src__painting__text_style;
  const src__painting__border_radius = animation$.src__painting__border_radius;
  const ui$ = ui.ui;
  const LayoutGrid__src__layout_grid = layout_grid.LayoutGrid__src__layout_grid;
  const LayoutGrid__src__Util__layout_grid_unit = layout_grid_unit.LayoutGrid__src__Util__layout_grid_unit;
  const LayoutGrid__src__Util__layout_grid_unit_classes = layout_grid_unit_classes.LayoutGrid__src__Util__layout_grid_unit_classes;
  const LayoutGrid__src__layout_grid_couple = layout_grid_couple.LayoutGrid__src__layout_grid_couple;
  const LayoutGrid__src__Util__inherited_size_model = inherited_size_model.LayoutGrid__src__Util__inherited_size_model;
  const main = Object.create(dart.library);
  let JSArrayOfLayoutUnit = () => (JSArrayOfLayoutUnit = dart.constFn(_interceptors.JSArray$(LayoutGrid__src__Util__layout_grid_unit_classes.LayoutUnit)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let JSArrayOfListOfString = () => (JSArrayOfListOfString = dart.constFn(_interceptors.JSArray$(ListOfString())))();
  let JSArrayOfLayoutGridCouple = () => (JSArrayOfLayoutGridCouple = dart.constFn(_interceptors.JSArray$(LayoutGrid__src__layout_grid_couple.LayoutGridCouple)))();
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
  main.MyApp = class MyApp extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__app.MaterialApp.new({debugShowCheckedModeBanner: false, title: "Flutter Demo", theme: src__material__theme_data.ThemeData.new({primarySwatch: src__material__colors.Colors.deepPurple}), home: new main.MyHomePage.new({title: "Flutter Demo Home Page", $creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 13, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 24, name: "title"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$6 || (const$6 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 7, name: "debugShowCheckedModeBanner"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 7, name: "title"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 7, name: "theme"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 7, name: "home"})))], src__widgets__widget_inspector._Location))})))});
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
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  main.MyHomePage = class MyHomePage extends src__widgets__framework.StatelessWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    build(context) {
      return new src__material__scaffold.Scaffold.new({backgroundColor: src__material__colors.Colors.deepPurple.shade800, appBar: new src__material__app_bar.AppBar.new({title: new src__widgets__text.Text.new(this.title, {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontFamily: "ostrich", fontWeight: ui$.FontWeight.w700, fontSize: 32.0}), $creationLocationd_0dea112b090073317d4: const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 16, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$10 || (const$10 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 21, name: "data"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 28, name: "style"})))], src__widgets__widget_inspector._Location))})))}), backgroundColor: src__material__colors.Colors.deepPurple.shade900, elevation: 0.0, $creationLocationd_0dea112b090073317d4: const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 15, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$15 || (const$15 = dart.constList([const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 9, name: "title"}))), const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 9, name: "backgroundColor"}))), const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 9, name: "elevation"})))], src__widgets__widget_inspector._Location))})))}), body: new src__widgets__basic.Padding.new({padding: const$17 || (const$17 = dart.const(new src__painting__edge_insets.EdgeInsets.symmetric({horizontal: 50.0}))), child: new LayoutGrid__src__layout_grid.LayoutGrid.new({isAncestor: true, columns: JSArrayOfLayoutUnit().of([new LayoutGrid__src__Util__layout_grid_unit.LayoutMinMax.new({minUnit: new LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.new({pixels: 350.0}), maxUnit: new LayoutGrid__src__Util__layout_grid_unit.LayoutFraction.new({fraction: 1})}), new LayoutGrid__src__Util__layout_grid_unit.LayoutMinMax.new({minUnit: new LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.new({pixels: 200.0}), maxUnit: new LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.new({pixels: 400.0})})]), rows: JSArrayOfLayoutUnit().of([new LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.new({pixels: 100.0}), new LayoutGrid__src__Util__layout_grid_unit.LayoutDependent.new({line: 2, multiplicator: 1.0}), new LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.new({pixels: 100.0}), new LayoutGrid__src__Util__layout_grid_unit.LayoutDependent.new({line: 1, multiplicator: 1.0}), new LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.new({pixels: 100.0}), new LayoutGrid__src__Util__layout_grid_unit.LayoutDependent.new({line: 1, multiplicator: 1.0}), new LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.new({pixels: 100.0}), new LayoutGrid__src__Util__layout_grid_unit.LayoutDependent.new({line: 1, multiplicator: 1.0})]), areas: JSArrayOfListOfString().of([JSArrayOfString().of(["...", "..."]), JSArrayOfString().of(["ThisIs", "NestedLayoutGrid"]), JSArrayOfString().of(["...", "..."]), JSArrayOfString().of(["DivideIt", "..."]), JSArrayOfString().of(["...", "..."]), JSArrayOfString().of(["NameAreas", "..."]), JSArrayOfString().of(["...", "..."]), JSArrayOfString().of(["AssignWidgets", "..."])]), couples: JSArrayOfLayoutGridCouple().of([new LayoutGrid__src__layout_grid_couple.LayoutGridCouple.new({widget: new main.ThisIs.new({$creationLocationd_0dea112b090073317d4: const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 46, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$18 || (const$18 = dart.constList([], src__widgets__widget_inspector._Location))})))}), name: "ThisIs", sizeKey: "generic"}), new LayoutGrid__src__layout_grid_couple.LayoutGridCouple.new({widget: new main.ExampleOfLayoutGrid.new({$creationLocationd_0dea112b090073317d4: const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 46, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$20 || (const$20 = dart.constList([], src__widgets__widget_inspector._Location))})))}), name: "NestedLayoutGrid", sizeKey: "nested"})]), $creationLocationd_0dea112b090073317d4: const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 16, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$27 || (const$27 = dart.constList([const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 11, name: "isAncestor"}))), const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 11, name: "columns"}))), const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 11, name: "rows"}))), const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 11, name: "areas"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 11, name: "couples"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 13, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$31 || (const$31 = dart.constList([const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 9, name: "padding"}))), const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$36 || (const$36 = dart.constList([const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 7, name: "backgroundColor"}))), const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 7, name: "appBar"}))), const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
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
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyHomePage, "package:layout_grid_overview/main.dart");
  dart.setFieldSignature(main.MyHomePage, () => ({
    __proto__: dart.getFields(main.MyHomePage.__proto__),
    title: dart.finalFieldType(core.String)
  }));
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
  main.ThisIs = class ThisIs extends src__widgets__framework.StatelessWidget {
    get id() {
      return this[id];
    }
    set id(value) {
      super.id = value;
    }
    build(context) {
      let sizeModel = LayoutGrid__src__Util__inherited_size_model.InheritedSizeModel.of(context, {sizeKey: this.id});
      return new src__widgets__container.Container.new({width: sizeModel.getWidth(this.id), height: sizeModel.getHeight(this.id), child: new src__widgets__basic.Column.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new src__widgets__text.Text.new("This is a basic LayoutGrid", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontFamily: "ostrich", fontWeight: ui$.FontWeight.w700, fontSize: 48.0}), $creationLocationd_0dea112b090073317d4: const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 97, column: 11, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$40 || (const$40 = dart.constList([const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 97, column: 16, name: "data"}))), const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 97, column: 46, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("Created with a width and height of 400px", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontFamily: "ostrich", fontWeight: ui$.FontWeight.w500, fontSize: 42.0}), $creationLocationd_0dea112b090073317d4: const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 98, column: 11, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$44 || (const$44 = dart.constList([const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 98, column: 16, name: "data"}))), const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 98, column: 60, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 93, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$48 || (const$48 = dart.constList([const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 94, column: 9, name: "crossAxisAlignment"}))), const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 96, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 89, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$53 || (const$53 = dart.constList([const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 90, column: 7, name: "width"}))), const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 91, column: 7, name: "height"}))), const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 93, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main.ThisIs.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[id] = "generic";
    main.ThisIs.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.ThisIs.prototype;
  dart.addTypeTests(main.ThisIs);
  const id = Symbol("ThisIs.id");
  dart.setMethodSignature(main.ThisIs, () => ({
    __proto__: dart.getMethods(main.ThisIs.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(main.ThisIs, "package:layout_grid_overview/main.dart");
  dart.setFieldSignature(main.ThisIs, () => ({
    __proto__: dart.getFields(main.ThisIs.__proto__),
    id: dart.finalFieldType(core.String)
  }));
  let const$55;
  let const$56;
  let const$57;
  let const$58;
  let const$59;
  let const$60;
  let const$61;
  let const$62;
  let const$63;
  let const$64;
  let const$65;
  let const$66;
  let const$67;
  main.ExampleOfLayoutGrid = class ExampleOfLayoutGrid extends src__widgets__framework.StatelessWidget {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    build(context) {
      let sizeModel = LayoutGrid__src__Util__inherited_size_model.InheritedSizeModel.of(context, {sizeKey: this.id});
      return new src__widgets__container.Container.new({width: sizeModel.getWidth(this.id), height: sizeModel.getHeight(this.id), decoration: new src__painting__box_decoration.BoxDecoration.new({border: src__painting__box_border.Border.all({color: src__material__colors.Colors.white, width: 2.5}), borderRadius: new src__painting__border_radius.BorderRadius.circular(8.0)}), child: new LayoutGrid__src__layout_grid.LayoutGrid.new({width: sizeModel.getWidth(this.id), height: sizeModel.getHeight(this.id), columns: JSArrayOfLayoutUnit().of([new LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.new()]), rows: JSArrayOfLayoutUnit().of([new LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.new()]), couples: JSArrayOfLayoutGridCouple().of([]), $creationLocationd_0dea112b090073317d4: const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 127, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$60 || (const$60 = dart.constList([const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 128, column: 9, name: "width"}))), const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 129, column: 9, name: "height"}))), const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 131, column: 9, name: "columns"}))), const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 132, column: 9, name: "rows"}))), const$59 || (const$59 = dart.const(new src__widgets__widget_inspector._Location.new({line: 134, column: 9, name: "couples"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$67 || (const$67 = dart.const(new src__widgets__widget_inspector._Location.new({line: 114, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$66 || (const$66 = dart.constList([const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 116, column: 7, name: "width"}))), const$63 || (const$63 = dart.const(new src__widgets__widget_inspector._Location.new({line: 117, column: 7, name: "height"}))), const$64 || (const$64 = dart.const(new src__widgets__widget_inspector._Location.new({line: 119, column: 7, name: "decoration"}))), const$65 || (const$65 = dart.const(new src__widgets__widget_inspector._Location.new({line: 127, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main.ExampleOfLayoutGrid.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[id$] = "nested";
    main.ExampleOfLayoutGrid.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.ExampleOfLayoutGrid.prototype;
  dart.addTypeTests(main.ExampleOfLayoutGrid);
  const id$ = Symbol("ExampleOfLayoutGrid.id");
  dart.setMethodSignature(main.ExampleOfLayoutGrid, () => ({
    __proto__: dart.getMethods(main.ExampleOfLayoutGrid.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(main.ExampleOfLayoutGrid, "package:layout_grid_overview/main.dart");
  dart.setFieldSignature(main.ExampleOfLayoutGrid, () => ({
    __proto__: dart.getFields(main.ExampleOfLayoutGrid.__proto__),
    id: dart.finalFieldType(core.String)
  }));
  let const$68;
  let const$69;
  main.main = function() {
    return src__widgets__binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: const$69 || (const$69 = dart.const(new src__widgets__widget_inspector._Location.new({line: 5, column: 23, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$68 || (const$68 = dart.constList([], src__widgets__widget_inspector._Location))})))}));
  };
  dart.trackLibraries("packages/layout_grid_overview/main", {
    "package:layout_grid_overview/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAS4B;AACxB,YAAO,qEAEuB,cAErB,uBACA,wDACiB,iDAElB,gCAAkB;IAE5B;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKe;;;;;;UAGa;AAIxB,YAAO,4DAEmB,AAAW,0DAE3B,8CACC,gCAAK,oBAAc,oDAAwB,gDAAkB,uBAAkC,+BAAgB,ulBAC9F,AAAW,6DACxB,utBAEP,8CACW,oGAAiC,iBAEzC,6DACO,eAEH,0BAAC,uEAAsB,qEAAoB,kBAAe,0EAAyB,OAClF,uEAAsB,qEAAoB,kBAAe,qEAAoB,mBAEjF,0BACJ,qEAAoB,SACpB,uEAAsB,kBAAkB,OACxC,qEAAoB,SACpB,uEAAsB,kBAAkB,OACxC,qEAAoB,SACpB,uEAAsB,kBAAkB,OACxC,qEAAoB,SACpB,uEAAsB,kBAAkB,gBAGnC,4BAAC,sBAAC,OAAM,SACP,sBAAC,UAAS,sBACV,sBAAC,OAAM,SACP,sBAAC,YAAW,SACZ,sBAAC,OAAM,SACP,sBAAC,aAAY,SACb,sBAAC,OAAM,SACP,sBAAC,iBAAgB,oBAEhB,gCAAC,sEAAyB,oWAAe,mBAAkB,aAC1D,sEAAyB,iXAA4B,6BAA4B;IAInG;;;QApDgB;QAAU;;;AAAU,mDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyDtC;;;;;;UAGa;AAEC,sBAA+B,kEAAG,OAAO,YAAW;AAE7E,YAAO,mDACE,AAAU,SAAD,UAAU,kBAClB,AAAU,SAAD,WAAW,iBAErB,wDACkC,yDAErB,sBAChB,gCAAK,sCAAqC,oDAAwB,gDAAkB,uBAAkC,+BAAgB,0kBACtI,gCAAK,oDAAmD,oDAAwB,gDAAkB,uBAAkC,+BAAgB;IAI5J;;;;IApBa,WAAK;;;EAqBpB;;;;;;;;;;;;;;;;;;;;;;;;;;IAIe;;;;;;UAGa;AAEC,sBAA+B,kEAAG,OAAO,YAAW;AAE7E,YAAO,mDAEE,AAAU,SAAD,UAAU,kBAClB,AAAU,SAAD,WAAW,sBAEhB,6DACK,6CACC,2CACP,qBAEkB,uDAAS,eAG/B,wDACE,AAAU,SAAD,UAAU,kBAClB,AAAU,SAAD,WAAW,mBAEnB,0BAAC,uEACJ,0BAAC,0EAEE;IAGf;;;;IA9Ba,YAAK;;;EA+BpB;;;;;;;;;;;;;;;AArIe,wCAAO;EAAQ","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
