define(['dart_sdk', 'packages/flutter_web/material', 'packages/layout_grid_overview/LayoutGrid/src/Util/inherited_layout_model', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/layout_grid_overview/tutorialLayout'], function(dart_sdk, material, inherited_layout_model, animation, animation$, ui, tutorialLayout) {
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
  const LayoutGrid__src__Util__inherited_layout_model = inherited_layout_model.LayoutGrid__src__Util__inherited_layout_model;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__binding = animation.src__widgets__binding;
  const src__painting__text_style = animation$.src__painting__text_style;
  const ui$ = ui.ui;
  const tutorialLayout$ = tutorialLayout.tutorialLayout;
  const main = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
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
      return new src__material__app.MaterialApp.new({debugShowCheckedModeBanner: false, title: "Layout grid overview", theme: src__material__theme_data.ThemeData.new({primarySwatch: src__material__colors.Colors.deepPurple}), home: new LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel.new({child: new main.MyHomePage.new({title: "Layout grid overview", $creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 41, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 52, name: "title"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 13, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$3 || (const$3 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 34, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 7, name: "debugShowCheckedModeBanner"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 7, name: "title"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 7, name: "theme"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 7, name: "home"})))], src__widgets__widget_inspector._Location))})))});
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
      return new src__widgets__container.Container.new({child: new src__material__scaffold.Scaffold.new({backgroundColor: src__material__colors.Colors.deepPurple.shade800, appBar: new src__material__app_bar.AppBar.new({title: new src__widgets__text.Text.new(this.widget.title, {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontFamily: "ostrich", fontWeight: ui$.FontWeight.w700, fontSize: 32.0}), $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 18, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 30, name: "data"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 37, name: "style"})))], src__widgets__widget_inspector._Location))})))}), backgroundColor: src__material__colors.Colors.deepPurple.shade900, elevation: 0.0, actions: JSArrayOfWidget().of([new src__material__flat_button.FlatButton.new({color: src__material__colors.Colors.yellowAccent, child: new src__widgets__text.Text.new("GitHub", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.black, fontFamily: "ostrich", fontWeight: ui$.FontWeight.w700, fontSize: 24.0}), $creationLocationd_0dea112b090073317d4: const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 22, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$17 || (const$17 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 27, name: "data"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 36, name: "style"})))], src__widgets__widget_inspector._Location))})))}), onPressed: dart.fn(() => {
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 13, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$22 || (const$22 = dart.constList([const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 15, name: "color"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 15, name: "child"}))), const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 50, column: 15, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 17, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$28 || (const$28 = dart.constList([const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 11, name: "title"}))), const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 11, name: "backgroundColor"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 11, name: "elevation"}))), const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 11, name: "actions"})))], src__widgets__widget_inspector._Location))})))}), body: new tutorialLayout$.TutorialLayout.new({$creationLocationd_0dea112b090073317d4: const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 15, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$30 || (const$30 = dart.constList([], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$35 || (const$35 = dart.constList([const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 9, name: "backgroundColor"}))), const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 9, name: "appBar"}))), const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 9, name: "body"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$38 || (const$38 = dart.constList([const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
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
  main.main = function() {
    return src__widgets__binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 6, column: 23, file: "org-dartlang-app:///packages/layout_grid_overview/main.dart", parameterLocations: const$40 || (const$40 = dart.constList([], src__widgets__widget_inspector._Location))})))}));
  };
  dart.trackLibraries("packages/layout_grid_overview/main", {
    "package:layout_grid_overview/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAS4B;AACxB,YAAO,qEAEuB,cACrB,+BAEA,wDACiB,iDAElB,mFAA4B,gCAAkB;IAExD;;;;;;EACF;;;;;;;;IAKe;;;;;;;AAEqB;IAAkB;;;QAJpC;QAAU;;;AAAU,mDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAUzB;AAExB,YAAO,mDACE,2DAEmB,AAAW,0DAE3B,8CACC,gCAAK,AAAO,2BAAc,oDAAwB,gDAAkB,uBAAkC,+BAAgB,2lBACrG,AAAW,6DACxB,cACM,sBACf,sDACgB,kDACP,gCAAK,kBAAgB,oDAAwB,gDAAkB,uBAAkC,+BAAgB,qlBAC7G;8jDAOX;IAGZ;;;;;EACF;;;;;;;;;;AAvDe,wCAAO;EAAQ","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
