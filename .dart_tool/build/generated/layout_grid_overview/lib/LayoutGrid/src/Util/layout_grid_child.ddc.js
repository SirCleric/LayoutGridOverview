define(['dart_sdk', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/animation'], function(dart_sdk, animation, animation$) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__painting__box_fit = animation.src__painting__box_fit;
  const src__painting__alignment = animation.src__painting__alignment;
  const src__widgets__basic = animation$.src__widgets__basic;
  const src__widgets__container = animation$.src__widgets__container;
  const src__widgets__widget_inspector = animation$.src__widgets__widget_inspector;
  const src__widgets__framework = animation$.src__widgets__framework;
  const LayoutGrid__src__Util__layout_grid_child = Object.create(dart.library);
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
  LayoutGrid__src__Util__layout_grid_child.LayoutGridChild = class LayoutGridChild extends src__widgets__framework.StatelessWidget {
    get top() {
      return this[top$];
    }
    set top(value) {
      super.top = value;
    }
    get left() {
      return this[left$];
    }
    set left(value) {
      super.left = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get boxFit() {
      return this[boxFit$];
    }
    set boxFit(value) {
      super.boxFit = value;
    }
    get widget() {
      return this[widget$];
    }
    set widget(value) {
      super.widget = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    build(context) {
      return new src__widgets__basic.Positioned.new({top: this.top, left: this.left, child: new src__widgets__container.Container.new({height: this.height, width: this.width, child: new src__widgets__basic.FittedBox.new({fit: this.boxFit, child: this.widget, $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 16, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_child.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 11, name: "fit"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_child.dart", parameterLocations: const$6 || (const$6 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 9, name: "height"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 9, name: "width"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_child.dart", parameterLocations: const$11 || (const$11 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 7, name: "top"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 7, name: "left"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (LayoutGrid__src__Util__layout_grid_child.LayoutGridChild.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let top = opts && 'top' in opts ? opts.top : null;
    let left = opts && 'left' in opts ? opts.left : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let widget = opts && 'widget' in opts ? opts.widget : null;
    let boxFit = opts && 'boxFit' in opts ? opts.boxFit : src__painting__box_fit.BoxFit.fill;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[top$] = top;
    this[left$] = left;
    this[height$] = height;
    this[width$] = width;
    this[widget$] = widget;
    this[boxFit$] = boxFit;
    this[alignment$] = alignment;
    LayoutGrid__src__Util__layout_grid_child.LayoutGridChild.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = LayoutGrid__src__Util__layout_grid_child.LayoutGridChild.prototype;
  dart.addTypeTests(LayoutGrid__src__Util__layout_grid_child.LayoutGridChild);
  const top$ = Symbol("LayoutGridChild.top");
  const left$ = Symbol("LayoutGridChild.left");
  const height$ = Symbol("LayoutGridChild.height");
  const width$ = Symbol("LayoutGridChild.width");
  const boxFit$ = Symbol("LayoutGridChild.boxFit");
  const widget$ = Symbol("LayoutGridChild.widget");
  const alignment$ = Symbol("LayoutGridChild.alignment");
  dart.setMethodSignature(LayoutGrid__src__Util__layout_grid_child.LayoutGridChild, () => ({
    __proto__: dart.getMethods(LayoutGrid__src__Util__layout_grid_child.LayoutGridChild.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(LayoutGrid__src__Util__layout_grid_child.LayoutGridChild, "package:layout_grid_overview/LayoutGrid/src/Util/layout_grid_child.dart");
  dart.setFieldSignature(LayoutGrid__src__Util__layout_grid_child.LayoutGridChild, () => ({
    __proto__: dart.getFields(LayoutGrid__src__Util__layout_grid_child.LayoutGridChild.__proto__),
    top: dart.finalFieldType(core.double),
    left: dart.finalFieldType(core.double),
    height: dart.finalFieldType(core.double),
    width: dart.finalFieldType(core.double),
    boxFit: dart.finalFieldType(src__painting__box_fit.BoxFit),
    widget: dart.finalFieldType(src__widgets__framework.Widget),
    alignment: dart.finalFieldType(src__painting__alignment.Alignment)
  }));
  dart.trackLibraries("packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_child", {
    "package:layout_grid_overview/LayoutGrid/src/Util/layout_grid_child.dart": LayoutGrid__src__Util__layout_grid_child
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_child.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;IAGe;;;;;;IAAK;;;;;;IAAM;;;;;;IAAQ;;;;;;IACnB;;;;;;IACA;;;;;;IACG;;;;;;UAcU;AACxB,YAAO,8CACA,gBACC,kBACC,mDACG,oBACD,mBACA,4CACA,oBACE;IAIf;;;QAxBgB;QACC;QACA;QACA;QACA;QACA;QACV,kDAAgB;QAChB;;IANU;IACA;IACA;IACA;IACA;IACV;IACA;AACF,4FAAW,GAAG;;EAAC","file":"layout_grid_child.ddc.js"}');
  // Exports:
  return {
    LayoutGrid__src__Util__layout_grid_child: LayoutGrid__src__Util__layout_grid_child
  };
});

//# sourceMappingURL=layout_grid_child.ddc.js.map
