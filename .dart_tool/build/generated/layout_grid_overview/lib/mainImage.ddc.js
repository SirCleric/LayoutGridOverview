define(['dart_sdk', 'packages/layout_grid_overview/LayoutGrid/src/Util/inherited_layout_model', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/layout_grid_overview/colors', 'packages/flutter_web_ui/ui', 'packages/flutter_web/material'], function(dart_sdk, inherited_layout_model, animation, animation$, colors, ui, material) {
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
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__icon = animation.src__widgets__icon;
  const src__painting__alignment = animation$.src__painting__alignment;
  const src__painting__box_fit = animation$.src__painting__box_fit;
  const src__painting__text_style = animation$.src__painting__text_style;
  const colors$ = colors.colors;
  const ui$ = ui.ui;
  const src__material__icons = material.src__material__icons;
  const mainImage = Object.create(dart.library);
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
  let const$16;
  let const$17;
  let const$18;
  mainImage.MainImageStack = class MainImageStack extends src__widgets__framework.StatelessWidget {
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
      return new src__widgets__container.Container.new({width: this.model.getWidth(this.modelKey), height: this.model.getHeight(this.modelKey), child: new src__widgets__basic.Stack.new({alignment: new src__painting__alignment.Alignment.new(0.0, 0.0), fit: src__rendering__stack.StackFit.expand, children: JSArrayOfWidget().of([new mainImage.MainImage.new({$creationLocationd_0dea112b090073317d4: const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 11, file: "org-dartlang-app:///packages/layout_grid_overview/mainImage.dart", parameterLocations: const$ || (const$ = dart.constList([], src__widgets__widget_inspector._Location))})))}), new mainImage.MainImageText.new({$creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 11, file: "org-dartlang-app:///packages/layout_grid_overview/mainImage.dart", parameterLocations: const$1 || (const$1 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Positioned.new({bottom: 25.0, child: new mainImage.MainScrollIcon.new({$creationLocationd_0dea112b090073317d4: const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 20, file: "org-dartlang-app:///packages/layout_grid_overview/mainImage.dart", parameterLocations: const$3 || (const$3 = dart.constList([], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 11, file: "org-dartlang-app:///packages/layout_grid_overview/mainImage.dart", parameterLocations: const$7 || (const$7 = dart.constList([const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 13, name: "bottom"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/mainImage.dart", parameterLocations: const$12 || (const$12 = dart.constList([const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 9, name: "alignment"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 9, name: "fit"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/mainImage.dart", parameterLocations: const$17 || (const$17 = dart.constList([const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 7, name: "width"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 7, name: "height"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (mainImage.MainImageStack.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[model] = null;
    this[modelKey] = "MainImageStack";
    mainImage.MainImageStack.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = mainImage.MainImageStack.prototype;
  dart.addTypeTests(mainImage.MainImageStack);
  const model = Symbol("MainImageStack.model");
  const modelKey = Symbol("MainImageStack.modelKey");
  dart.setMethodSignature(mainImage.MainImageStack, () => ({
    __proto__: dart.getMethods(mainImage.MainImageStack.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(mainImage.MainImageStack, "package:layout_grid_overview/mainImage.dart");
  dart.setFieldSignature(mainImage.MainImageStack, () => ({
    __proto__: dart.getFields(mainImage.MainImageStack.__proto__),
    model: dart.fieldType(LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel),
    modelKey: dart.fieldType(core.String)
  }));
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  mainImage.MainImage = class MainImage extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__container.Container.new({foregroundDecoration: new src__painting__box_decoration.BoxDecoration.new({color: colors$.MyColors.slate.withOpacity(0.9)}), child: new src__widgets__image.Image.network("https://images.unsplash.com/photo-1559183533-ee5f4826d3db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=1080", {fit: src__painting__box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 50, column: 20, file: "org-dartlang-app:///packages/layout_grid_overview/mainImage.dart", parameterLocations: const$21 || (const$21 = dart.constList([const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 9, name: "src"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 9, name: "fit"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/mainImage.dart", parameterLocations: const$25 || (const$25 = dart.constList([const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 7, name: "foregroundDecoration"}))), const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 50, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (mainImage.MainImage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    mainImage.MainImage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = mainImage.MainImage.prototype;
  dart.addTypeTests(mainImage.MainImage);
  dart.setMethodSignature(mainImage.MainImage, () => ({
    __proto__: dart.getMethods(mainImage.MainImage.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(mainImage.MainImage, "package:layout_grid_overview/mainImage.dart");
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  mainImage.MainImageText = class MainImageText extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__container.Container.new({alignment: new src__painting__alignment.Alignment.new(0.0, 0.0), child: new src__widgets__text.Text.new("DO NOT EAT\nPINEAPPLE PIZZA", {style: new src__painting__text_style.TextStyle.new({color: colors$.MyColors.whitish, fontWeight: ui$.FontWeight.bold, fontSize: 64.0}), textAlign: ui$.TextAlign.center, $creationLocationd_0dea112b090073317d4: const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 67, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/mainImage.dart", parameterLocations: const$30 || (const$30 = dart.constList([const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 9, name: "data"}))), const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 69, column: 9, name: "style"}))), const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 74, column: 9, name: "textAlign"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/mainImage.dart", parameterLocations: const$34 || (const$34 = dart.constList([const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 65, column: 7, name: "alignment"}))), const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 67, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (mainImage.MainImageText.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    mainImage.MainImageText.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = mainImage.MainImageText.prototype;
  dart.addTypeTests(mainImage.MainImageText);
  dart.setMethodSignature(mainImage.MainImageText, () => ({
    __proto__: dart.getMethods(mainImage.MainImageText.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(mainImage.MainImageText, "package:layout_grid_overview/mainImage.dart");
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
  mainImage.MainScrollIcon = class MainScrollIcon extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__container.Container.new({child: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new src__widgets__text.Text.new("You don't need reasons", {style: new src__painting__text_style.TextStyle.new({color: colors$.MyColors.whitish, fontWeight: ui$.FontWeight.normal, fontSize: 24.0, decoration: ui$.TextDecoration.lineThrough}), textAlign: ui$.TextAlign.center, $creationLocationd_0dea112b090073317d4: const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 89, column: 11, file: "org-dartlang-app:///packages/layout_grid_overview/mainImage.dart", parameterLocations: const$39 || (const$39 = dart.constList([const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 90, column: 13, name: "data"}))), const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 91, column: 13, name: "style"}))), const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 98, column: 13, name: "textAlign"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("Reasons", {style: new src__painting__text_style.TextStyle.new({color: colors$.MyColors.whitish, fontWeight: ui$.FontWeight.normal, fontSize: 32.0}), textAlign: ui$.TextAlign.center, $creationLocationd_0dea112b090073317d4: const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 11, file: "org-dartlang-app:///packages/layout_grid_overview/mainImage.dart", parameterLocations: const$44 || (const$44 = dart.constList([const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 101, column: 13, name: "data"}))), const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 102, column: 13, name: "style"}))), const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 107, column: 13, name: "textAlign"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__icon.Icon.new(src__material__icons.Icons.arrow_downward, {size: 32.0, color: colors$.MyColors.whitish, $creationLocationd_0dea112b090073317d4: const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 109, column: 11, file: "org-dartlang-app:///packages/layout_grid_overview/mainImage.dart", parameterLocations: const$49 || (const$49 = dart.constList([const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 110, column: 19, name: "icon"}))), const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 111, column: 13, name: "size"}))), const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 112, column: 13, name: "color"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/mainImage.dart", parameterLocations: const$52 || (const$52 = dart.constList([const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 88, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 85, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/mainImage.dart", parameterLocations: const$55 || (const$55 = dart.constList([const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (mainImage.MainScrollIcon.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    mainImage.MainScrollIcon.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = mainImage.MainScrollIcon.prototype;
  dart.addTypeTests(mainImage.MainScrollIcon);
  dart.setMethodSignature(mainImage.MainScrollIcon, () => ({
    __proto__: dart.getMethods(mainImage.MainScrollIcon.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(mainImage.MainScrollIcon, "package:layout_grid_overview/mainImage.dart");
  dart.trackLibraries("packages/layout_grid_overview/mainImage", {
    "package:layout_grid_overview/mainImage.dart": mainImage
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/mainImage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQuB;;;;;;IACd;;;;;;UAGmB;MAExB,aAA6B,sEAAG,OAAO,aAAY;AAEnD,YAAO,mDAEE,AAAM,oBAAS,wBACd,AAAM,qBAAU,uBAEjB,8CACM,2CAAU,KAAK,WACZ,iDAEI,sBAChB,qWACA,2WACA,gDACU,aACD;IAKjB;;;QA7BoB;;IAEC;IACd,iBAAW;AAHU,4DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;UAoCjB;AACxB,YAAO,kEAEiB,4DACJ,AAAM,mCAAY,eAGvB,sCACX,+IACY;IAGlB;;;QAfqB;;AAAQ,uDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;UAsBlB;AACxB,YAAO,uDAEM,2CAAU,KAAI,aAElB,gCACL,uCACO,oDACW,sCACO,+BACb,mBAES;IAG3B;;;QAlByB;;AAAQ,2DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAyBtB;AACxB,YAAO,mDAEE,8CACa,sBAChB,gCACE,kCACO,oDACW,sCACO,iCACb,kBAEiB,6CAER,+tBAEvB,gCACE,mBACO,oDACW,sCACO,iCACb,mBAES,muBAEvB,gCACQ,kDACA,aACU;IAK1B;;;QApC0B;;AAAQ,4DAAW,GAAG;;EAAC","file":"mainImage.ddc.js"}');
  // Exports:
  return {
    mainImage: mainImage
  };
});

//# sourceMappingURL=mainImage.ddc.js.map
