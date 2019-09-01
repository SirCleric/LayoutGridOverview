define(['dart_sdk', 'packages/layout_grid_overview/LayoutGrid/src/Util/inherited_layout_model', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, inherited_layout_model, animation, animation$) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const LayoutGrid__src__Util__inherited_layout_model = inherited_layout_model.LayoutGrid__src__Util__inherited_layout_model;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__stack = animation.src__rendering__stack;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__painting__box_border = animation.src__painting__box_border;
  const src__painting__decoration_image = animation.src__painting__decoration_image;
  const src__painting__alignment = animation$.src__painting__alignment;
  const src__painting__image_provider = animation$.src__painting__image_provider;
  const src__painting__box_fit = animation$.src__painting__box_fit;
  const mainCredentials = Object.create(dart.library);
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
  mainCredentials.MainCredentialsStack = class MainCredentialsStack extends src__widgets__framework.StatelessWidget {
    get model() {
      return this[model];
    }
    set model(value) {
      this[model] = value;
    }
    get modelKey() {
      return this[modelKey];
    }
    set modelKey(value) {
      this[modelKey] = value;
    }
    build(context) {
      this.model = LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel.of(context, {modelKey: this.modelKey});
      return new src__widgets__container.Container.new({width: this.model.getHeight(this.modelKey), height: this.model.getHeight(this.modelKey), child: new src__widgets__basic.Stack.new({alignment: new src__painting__alignment.Alignment.new(0.0, 0.0), fit: src__rendering__stack.StackFit.expand, children: JSArrayOfWidget().of([new mainCredentials.MainAvatar.new({radius: dart.notNull(this.model.getHeight(this.modelKey)) / 4, $creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 11, file: "org-dartlang-app:///packages/layout_grid_overview/mainCredentials.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 22, name: "radius"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/mainCredentials.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 9, name: "alignment"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 9, name: "fit"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/mainCredentials.dart", parameterLocations: const$10 || (const$10 = dart.constList([const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 7, name: "width"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 7, name: "height"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (mainCredentials.MainCredentialsStack.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[model] = null;
    this[modelKey] = "MainCredentialsStack";
    mainCredentials.MainCredentialsStack.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = mainCredentials.MainCredentialsStack.prototype;
  dart.addTypeTests(mainCredentials.MainCredentialsStack);
  const model = Symbol("MainCredentialsStack.model");
  const modelKey = Symbol("MainCredentialsStack.modelKey");
  dart.setMethodSignature(mainCredentials.MainCredentialsStack, () => ({
    __proto__: dart.getMethods(mainCredentials.MainCredentialsStack.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(mainCredentials.MainCredentialsStack, "package:layout_grid_overview/mainCredentials.dart");
  dart.setFieldSignature(mainCredentials.MainCredentialsStack, () => ({
    __proto__: dart.getFields(mainCredentials.MainCredentialsStack.__proto__),
    model: dart.fieldType(LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel),
    modelKey: dart.fieldType(core.String)
  }));
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  mainCredentials.MainAvatar = class MainAvatar extends src__widgets__framework.StatelessWidget {
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      this[radius$] = value;
    }
    build(context) {
      return new src__widgets__container.Container.new({alignment: new src__painting__alignment.Alignment.new(0.0, 0.0), width: dart.notNull(this.radius) * 2, height: dart.notNull(this.radius) * 2, decoration: new src__painting__box_decoration.BoxDecoration.new({shape: src__painting__box_border.BoxShape.circle, image: new src__painting__decoration_image.DecorationImage.new({image: new src__painting__image_provider.NetworkImage.new("https://pbs.twimg.com/profile_images/942158813259583488/muclNKDf_400x400.jpg"), fit: src__painting__box_fit.BoxFit.cover, alignment: new src__painting__alignment.Alignment.new(0.0, 0.0)})}), $creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/mainCredentials.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 7, name: "alignment"}))), const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 7, name: "width"}))), const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 7, name: "height"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 7, name: "decoration"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (mainCredentials.MainAvatar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let radius = opts && 'radius' in opts ? opts.radius : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[radius$] = radius;
    mainCredentials.MainAvatar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = mainCredentials.MainAvatar.prototype;
  dart.addTypeTests(mainCredentials.MainAvatar);
  const radius$ = Symbol("MainAvatar.radius");
  dart.setMethodSignature(mainCredentials.MainAvatar, () => ({
    __proto__: dart.getMethods(mainCredentials.MainAvatar.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(mainCredentials.MainAvatar, "package:layout_grid_overview/mainCredentials.dart");
  dart.setFieldSignature(mainCredentials.MainAvatar, () => ({
    __proto__: dart.getFields(mainCredentials.MainAvatar.__proto__),
    radius: dart.fieldType(core.double)
  }));
  dart.trackLibraries("packages/layout_grid_overview/mainCredentials", {
    "package:layout_grid_overview/mainCredentials.dart": mainCredentials
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/mainCredentials.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAMuB;;;;;;IACd;;;;;;UAGmB;MAExB,aAA6B,sEAAG,OAAO,aAAY;AAEnD,YAAO,mDAEE,AAAM,qBAAU,wBACf,AAAM,qBAAU,uBAEjB,8CACM,2CAAU,KAAK,WACZ,iDAEI,sBAChB,4CAA6C,aAA1B,AAAM,qBAAU,kBAAY;IAKvD;;;QAzB0B;;IAEL;IACd,iBAAW;AAHgB,wEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;IA+B1C;;;;;;UAGmB;AACxB,YAAO,uDAEM,2CAAU,KAAK,aAEZ,aAAP,eAAS,WACD,aAAP,eAAS,eAEL,4DACM,kDAET,gEACE,mDAAa,sFACR,gDACD,2CAAU,KAAK;IAIlC;;;QAvBgB;QAAoB;;;AAAW,8DAAW,GAAG;;EAAC","file":"mainCredentials.ddc.js"}');
  // Exports:
  return {
    mainCredentials: mainCredentials
  };
});

//# sourceMappingURL=mainCredentials.ddc.js.map
