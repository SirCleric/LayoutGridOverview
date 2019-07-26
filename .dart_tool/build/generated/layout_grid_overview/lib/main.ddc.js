define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/layout_grid_overview/LayoutGrid/src/layout_grid', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit_classes', 'packages/layout_grid_overview/LayoutGrid/src/layout_grid_couple', 'packages/layout_grid_overview/LayoutGrid/src/Util/inherited_size_model', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui'], function(dart_sdk, material, animation, layout_grid, layout_grid_unit, layout_grid_unit_classes, layout_grid_couple, inherited_size_model, animation$, ui) {
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
  const src__widgets__binding = animation.src__widgets__binding;
  const LayoutGrid__src__layout_grid = layout_grid.LayoutGrid__src__layout_grid;
  const LayoutGrid__src__Util__layout_grid_unit = layout_grid_unit.LayoutGrid__src__Util__layout_grid_unit;
  const LayoutGrid__src__Util__layout_grid_unit_classes = layout_grid_unit_classes.LayoutGrid__src__Util__layout_grid_unit_classes;
  const LayoutGrid__src__layout_grid_couple = layout_grid_couple.LayoutGrid__src__layout_grid_couple;
  const LayoutGrid__src__Util__inherited_size_model = inherited_size_model.LayoutGrid__src__Util__inherited_size_model;
  const src__painting__text_style = animation$.src__painting__text_style;
  const ui$ = ui.ui;
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
  main.MyHomePage = class MyHomePage extends src__widgets__framework.StatelessWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    build(context) {
      return new src__material__scaffold.Scaffold.new({backgroundColor: src__material__colors.Colors.deepPurple.shade600, appBar: new src__material__app_bar.AppBar.new({title: new src__widgets__text.Text.new(this.title, {$creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 16, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 21, name: "data"})))], src__widgets__widget_inspector._Location))})))}), backgroundColor: src__material__colors.Colors.deepPurple.shade800, elevation: 0.0, $creationLocationd_0dea112b090073317d4: const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 15, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$14 || (const$14 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 9, name: "title"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 9, name: "backgroundColor"}))), const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 9, name: "elevation"})))], src__widgets__widget_inspector._Location))})))}), body: new src__widgets__basic.Padding.new({padding: const$16 || (const$16 = dart.const(new src__painting__edge_insets.EdgeInsets.symmetric({horizontal: 25.0}))), child: new LayoutGrid__src__layout_grid.LayoutGrid.new({isAncestor: true, columns: JSArrayOfLayoutUnit().of([new LayoutGrid__src__Util__layout_grid_unit.LayoutFraction.new({fraction: 1}), new LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.new({pixels: 400.0})]), rows: JSArrayOfLayoutUnit().of([new LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.new({pixels: 100.0}), new LayoutGrid__src__Util__layout_grid_unit.LayoutDependent.new({line: 1, multiplicator: 1.0}), new LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.new({pixels: 100.0}), new LayoutGrid__src__Util__layout_grid_unit.LayoutDependent.new({line: 1, multiplicator: 1.0}), new LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.new({pixels: 100.0}), new LayoutGrid__src__Util__layout_grid_unit.LayoutDependent.new({line: 1, multiplicator: 1.0}), new LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.new({pixels: 100.0}), new LayoutGrid__src__Util__layout_grid_unit.LayoutDependent.new({line: 1, multiplicator: 1.0})]), areas: JSArrayOfListOfString().of([JSArrayOfString().of(["...", "..."]), JSArrayOfString().of(["ThisIs", "..."]), JSArrayOfString().of(["...", "..."]), JSArrayOfString().of(["DivideIt", "..."]), JSArrayOfString().of(["...", "..."]), JSArrayOfString().of(["NameAreas", "..."]), JSArrayOfString().of(["...", "..."]), JSArrayOfString().of(["AssignWidgets", "..."])]), couples: JSArrayOfLayoutGridCouple().of([new LayoutGrid__src__layout_grid_couple.LayoutGridCouple.new({widget: new main.ThisIs.new({$creationLocationd_0dea112b090073317d4: const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 69, column: 46, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$17 || (const$17 = dart.constList([], src__widgets__widget_inspector._Location))})))}), name: "ThisIs", sizeKey: "generic"})]), $creationLocationd_0dea112b090073317d4: const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 16, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$24 || (const$24 = dart.constList([const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 11, name: "isAncestor"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 11, name: "columns"}))), const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 11, name: "rows"}))), const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 60, column: 11, name: "areas"}))), const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 69, column: 11, name: "couples"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 13, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$28 || (const$28 = dart.constList([const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 9, name: "padding"}))), const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$33 || (const$33 = dart.constList([const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 7, name: "backgroundColor"}))), const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 7, name: "appBar"}))), const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
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
  main.ThisIs = class ThisIs extends src__widgets__framework.StatelessWidget {
    get id() {
      return this[id];
    }
    set id(value) {
      super.id = value;
    }
    build(context) {
      let sizeModel = LayoutGrid__src__Util__inherited_size_model.InheritedSizeModel.of(context, {sizeKey: this.id});
      return new src__widgets__container.Container.new({width: sizeModel.getWidth(this.id), height: sizeModel.getHeight(this.id), child: new src__widgets__basic.Column.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new src__widgets__text.Text.new("This is a basic LayoutGrid", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontWeight: ui$.FontWeight.bold, fontSize: 48.0}), $creationLocationd_0dea112b090073317d4: const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 93, column: 11, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$37 || (const$37 = dart.constList([const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 93, column: 16, name: "data"}))), const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 93, column: 46, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("Created with a width and height of 400px", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontWeight: ui$.FontWeight.normal, fontSize: 24.0}), $creationLocationd_0dea112b090073317d4: const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 94, column: 11, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$41 || (const$41 = dart.constList([const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 94, column: 16, name: "data"}))), const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 94, column: 60, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 89, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$45 || (const$45 = dart.constList([const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 90, column: 9, name: "crossAxisAlignment"}))), const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 92, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 85, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$50 || (const$50 = dart.constList([const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 86, column: 7, name: "width"}))), const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 7, name: "height"}))), const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 89, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
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
  let const$52;
  let const$53;
  main.main = function() {
    return src__widgets__binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 5, column: 23, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$52 || (const$52 = dart.constList([], src__widgets__widget_inspector._Location))})))}));
  };
  dart.trackLibraries("packages/layout_grid_overview/main", {
    "package:layout_grid_overview/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAS4B;AACxB,YAAO,qEAEuB,cAErB,uBACA,wDACiB,iDAElB,gCAAkB;IAE5B;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKe;;;;;;UAGa;AAIxB,YAAO,4DAEmB,AAAW,0DAE3B,8CACC,gCAAK,8dACY,AAAW,6DACxB,utBAEP,8CACW,oGAAiC,iBACzC,6DACO,eAEH,0BAAC,0EAAyB,KAAI,qEAAoB,iBACrD,0BACJ,qEAAoB,SACpB,uEAAsB,kBAAkB,OACxC,qEAAoB,SACpB,uEAAsB,kBAAkB,OACxC,qEAAoB,SACpB,uEAAsB,kBAAkB,OACxC,qEAAoB,SACpB,uEAAsB,kBAAkB,gBAGnC,4BAAC,sBAAC,OAAM,SACP,sBAAC,UAAS,SACV,sBAAC,OAAM,SACP,sBAAC,YAAW,SACZ,sBAAC,OAAM,SACP,sBAAC,aAAY,SACb,sBAAC,OAAM,SACP,sBAAC,iBAAgB,oBAEhB,gCAAC,sEAAyB,oWAAe,mBAAkB;IAI5E;;;QAhDgB;QAAU;;;AAAU,mDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAqDtC;;;;;;UAGa;AAEC,sBAA+B,kEAAG,OAAO,YAAW;AAE7E,YAAO,mDACE,AAAU,SAAD,UAAU,kBAClB,AAAU,SAAD,WAAW,iBAErB,wDACkC,yDAErB,sBAChB,gCAAK,sCAAqC,oDAAwB,gDAA8B,+BAAgB,0kBAChH,gCAAK,oDAAmD,oDAAwB,gDAA8B,iCAAkB;IAIxI;;;;IApBa,WAAK;;;EAqBpB;;;;;;;;;;;;;;;AA9Fe,wCAAO;EAAQ","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
