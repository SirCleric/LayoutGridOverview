define(['dart_sdk', 'packages/flutter_web/animation'], function(dart_sdk, animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
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
    get widget() {
      return this[widget$];
    }
    set widget(value) {
      super.widget = value;
    }
    build(context) {
      return new src__widgets__basic.Positioned.new({top: this.top, left: this.left, child: new src__widgets__container.Container.new({height: this.height, width: this.width, child: this.widget, $creationLocationd_0dea112b090073317d4: const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_child.dart", parameterLocations: const$2 || (const$2 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 9, name: "height"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 9, name: "width"}))), const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_child.dart", parameterLocations: const$7 || (const$7 = dart.constList([const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 7, name: "top"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 7, name: "left"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (LayoutGrid__src__Util__layout_grid_child.LayoutGridChild.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let top = opts && 'top' in opts ? opts.top : null;
    let left = opts && 'left' in opts ? opts.left : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let widget = opts && 'widget' in opts ? opts.widget : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[top$] = top;
    this[left$] = left;
    this[height$] = height;
    this[width$] = width;
    this[widget$] = widget;
    LayoutGrid__src__Util__layout_grid_child.LayoutGridChild.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = LayoutGrid__src__Util__layout_grid_child.LayoutGridChild.prototype;
  dart.addTypeTests(LayoutGrid__src__Util__layout_grid_child.LayoutGridChild);
  const top$ = Symbol("LayoutGridChild.top");
  const left$ = Symbol("LayoutGridChild.left");
  const height$ = Symbol("LayoutGridChild.height");
  const width$ = Symbol("LayoutGridChild.width");
  const widget$ = Symbol("LayoutGridChild.widget");
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
    widget: dart.finalFieldType(src__widgets__framework.Widget)
  }));
  dart.trackLibraries("packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_child", {
    "package:layout_grid_overview/LayoutGrid/src/Util/layout_grid_child.dart": LayoutGrid__src__Util__layout_grid_child
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_child.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;IAGe;;;;;;IAAK;;;;;;IAAM;;;;;;IAAQ;;;;;;IACnB;;;;;;UAYa;AACxB,YAAO,8CACA,gBACC,kBAEC,mDACG,oBACD,mBAEA;IAGb;;;QArBgB;QACC;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;AACZ,4FAAW,GAAG;;EAAC","file":"layout_grid_child.ddc.js"}');
  // Exports:
  return {
    LayoutGrid__src__Util__layout_grid_child: LayoutGrid__src__Util__layout_grid_child
  };
});

//# sourceMappingURL=layout_grid_child.ddc.js.map
