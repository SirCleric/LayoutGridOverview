define(['dart_sdk', 'packages/flutter_web/material', 'packages/layout_grid_overview/LayoutGrid/src/Util/inherited_layout_model', 'packages/flutter_web/animation', 'packages/layout_grid_overview/colors', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/layout_grid_overview/mainLayout'], function(dart_sdk, material, inherited_layout_model, animation, colors, animation$, ui, mainLayout) {
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
  const LayoutGrid__src__Util__inherited_layout_model = inherited_layout_model.LayoutGrid__src__Util__inherited_layout_model;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__text = animation.src__widgets__text;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__binding = animation.src__widgets__binding;
  const colors$ = colors.colors;
  const src__painting__text_style = animation$.src__painting__text_style;
  const src__painting__alignment = animation$.src__painting__alignment;
  const ui$ = ui.ui;
  const mainLayout$ = mainLayout.mainLayout;
  const main = Object.create(dart.library);
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
  main.MyApp = class MyApp extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__app.MaterialApp.new({debugShowCheckedModeBanner: false, title: "Layout grid overview", theme: src__material__theme_data.ThemeData.new({primarySwatch: src__material__colors.Colors.deepPurple}), home: new LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel.new({child: new main.MyHomePage.new({title: "Layout grid overview", $creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 41, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 52, name: "title"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 13, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$3 || (const$3 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 34, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 7, name: "debugShowCheckedModeBanner"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 7, name: "title"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 7, name: "theme"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 7, name: "home"})))], src__widgets__widget_inspector._Location))})))});
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
  main._MyHomePageState = class _MyHomePageState extends src__widgets__framework.State$(main.MyHomePage) {
    build(context) {
      return new src__widgets__container.Container.new({child: new src__material__scaffold.Scaffold.new({backgroundColor: colors$.MyColors.lightGrey, appBar: new src__material__app_bar.AppBar.new({backgroundColor: colors$.MyColors.secondHandGrey, elevation: 2.0, title: new src__widgets__text.Text.new("Layout Grid", {style: new src__painting__text_style.TextStyle.new({color: colors$.MyColors.whitish, fontWeight: ui$.FontWeight.normal, fontSize: 32.0}), $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 18, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 13, name: "data"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 13, name: "style"})))], src__widgets__widget_inspector._Location))})))}), actions: JSArrayOfWidget().of([new main.ActionWidget.new({textData: "Home", $creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 13, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 26, name: "textData"})))], src__widgets__widget_inspector._Location))})))}), new main.ActionWidget.new({textData: "Credentials", $creationLocationd_0dea112b090073317d4: const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 13, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$19 || (const$19 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 26, name: "textData"})))], src__widgets__widget_inspector._Location))})))}), new main.ActionWidget.new({textData: "Reasons", $creationLocationd_0dea112b090073317d4: const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 59, column: 13, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$22 || (const$22 = dart.constList([const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 59, column: 26, name: "textData"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 17, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$28 || (const$28 = dart.constList([const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 11, name: "backgroundColor"}))), const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 11, name: "elevation"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 11, name: "title"}))), const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 56, column: 11, name: "actions"})))], src__widgets__widget_inspector._Location))})))}), body: new mainLayout$.MainLayout.new({$creationLocationd_0dea112b090073317d4: const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 15, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$30 || (const$30 = dart.constList([], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$35 || (const$35 = dart.constList([const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 9, name: "backgroundColor"}))), const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 9, name: "appBar"}))), const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 9, name: "body"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$38 || (const$38 = dart.constList([const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
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
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  main.ActionWidget = class ActionWidget extends src__widgets__framework.StatelessWidget {
    get textData() {
      return this[textData$];
    }
    set textData(value) {
      this[textData$] = value;
    }
    build(context) {
      return new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.symmetric({horizontal: 24.0}), alignment: new src__painting__alignment.Alignment.new(0.0, 0.0), child: new src__widgets__text.Text.new(this.textData, {style: new src__painting__text_style.TextStyle.new({color: colors$.MyColors.whitish, fontWeight: ui$.FontWeight.normal, fontSize: 24.0}), $creationLocationd_0dea112b090073317d4: const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 82, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$42 || (const$42 = dart.constList([const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 9, name: "data"}))), const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 84, column: 9, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$47 || (const$47 = dart.constList([const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 7, name: "margin"}))), const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 7, name: "alignment"}))), const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 82, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main.ActionWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let textData = opts && 'textData' in opts ? opts.textData : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[textData$] = textData;
    main.ActionWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.ActionWidget.prototype;
  dart.addTypeTests(main.ActionWidget);
  const textData$ = Symbol("ActionWidget.textData");
  dart.setMethodSignature(main.ActionWidget, () => ({
    __proto__: dart.getMethods(main.ActionWidget.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(main.ActionWidget, "package:layout_grid_overview/main.dart");
  dart.setFieldSignature(main.ActionWidget, () => ({
    __proto__: dart.getFields(main.ActionWidget.__proto__),
    textData: dart.fieldType(core.String)
  }));
  let const$49;
  let const$50;
  main.main = function() {
    return src__widgets__binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 7, column: 23, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$49 || (const$49 = dart.constList([], src__widgets__widget_inspector._Location))})))}));
  };
  dart.trackLibraries("packages/layout_grid_overview/main", {
    "package:layout_grid_overview/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAU4B;AACxB,YAAO,qEAEuB,cACrB,+BAEA,wDACiB,iDAElB,mFAA4B,gCAAkB;IAExD;;;;;;EACF;;;;;;;;IAKe;;;;;;;AAEqB;IAAkB;;;QAJpC;QAAU;;;AAAU,mDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAUzB;AAExB,YAAO,mDACE,2DAEqB,oCAElB,wDACoB,4CACf,YAEJ,gCACL,uBACO,oDACW,sCACO,iCACb,mlBAIG,sBACf,qCAAuB,gdACvB,qCAAuB,udACvB,qCAAuB,0yCAIrB;IAGZ;;;;;EACF;;;;;;;;;;;;;;;;;IAKS;;;;;;UAGmB;AACxB,YAAO,oDAEc,iEAAsB,mBAE9B,2CAAU,KAAK,aAEnB,gCACL,uBACO,oDACW,sCACO,iCACb;IAIlB;;;QArBkB;QAAmB;;;AAAa,qDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;AA/DpD,wCAAO;EAAQ","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
