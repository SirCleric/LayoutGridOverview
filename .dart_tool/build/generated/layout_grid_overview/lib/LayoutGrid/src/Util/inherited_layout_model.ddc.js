define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web/animation'], function(dart_sdk, ui, animation) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui$ = ui.ui;
  const src__widgets__inherited_model = animation.src__widgets__inherited_model;
  const LayoutGrid__src__Util__inherited_layout_model = Object.create(dart.library);
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $putIfAbsent = dartx.putIfAbsent;
  let LinkedMapOfString$SizePositionCouple = () => (LinkedMapOfString$SizePositionCouple = dart.constFn(_js_helper.LinkedMap$(core.String, LayoutGrid__src__Util__inherited_layout_model.SizePositionCouple)))();
  let SetOfString = () => (SetOfString = dart.constFn(core.Set$(core.String)))();
  let VoidToSizePositionCouple = () => (VoidToSizePositionCouple = dart.constFn(dart.fnType(LayoutGrid__src__Util__inherited_layout_model.SizePositionCouple, [])))();
  let const$;
  let const$0;
  LayoutGrid__src__Util__inherited_layout_model.SizePositionCouple = class SizePositionCouple extends core.Object {
    get size() {
      return this[size$];
    }
    set size(value) {
      this[size$] = value;
    }
    get position() {
      return this[position$];
    }
    set position(value) {
      this[position$] = value;
    }
  };
  (LayoutGrid__src__Util__inherited_layout_model.SizePositionCouple.new = function(opts) {
    let size = opts && 'size' in opts ? opts.size : const$ || (const$ = dart.const(new ui$.Size.new(0.0, 0.0)));
    let position = opts && 'position' in opts ? opts.position : const$0 || (const$0 = dart.const(new ui$.Offset.new(0.0, 0.0)));
    this[size$] = size;
    this[position$] = position;
    ;
  }).prototype = LayoutGrid__src__Util__inherited_layout_model.SizePositionCouple.prototype;
  dart.addTypeTests(LayoutGrid__src__Util__inherited_layout_model.SizePositionCouple);
  const size$ = Symbol("SizePositionCouple.size");
  const position$ = Symbol("SizePositionCouple.position");
  dart.setLibraryUri(LayoutGrid__src__Util__inherited_layout_model.SizePositionCouple, "package:layout_grid_overview/LayoutGrid/src/Util/inherited_layout_model.dart");
  dart.setFieldSignature(LayoutGrid__src__Util__inherited_layout_model.SizePositionCouple, () => ({
    __proto__: dart.getFields(LayoutGrid__src__Util__inherited_layout_model.SizePositionCouple.__proto__),
    size: dart.fieldType(ui$.Size),
    position: dart.fieldType(ui$.Offset)
  }));
  const _modelMap = dart.privateName(LayoutGrid__src__Util__inherited_layout_model, "_modelMap");
  LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel = class InheritedLayoutModel extends src__widgets__inherited_model.InheritedModel$(core.String) {
    updateShouldNotify(old) {
      LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel._check(old);
      return !dart.equals(this[_modelMap], old[_modelMap]);
    }
    updateShouldNotifyDependent(old, dependencies) {
      LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel._check(old);
      SetOfString()._check(dependencies);
      return dart.test(this[_modelMap][$containsKey](dependencies)) && !dart.equals(this[_modelMap][$_get](dependencies), old[_modelMap][$_get](dependencies));
    }
    static of(context, opts) {
      let modelKey = opts && 'modelKey' in opts ? opts.modelKey : null;
      return src__widgets__inherited_model.InheritedModel.inheritFrom(LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel, context, {aspect: modelKey});
    }
    updateModel(modelKey, size, position) {
      core.print(dart.str(modelKey) + " " + dart.str(size) + " " + dart.str(position));
      if (dart.test(this[_modelMap][$containsKey](modelKey))) {
        this[_modelMap][$_set](modelKey, new LayoutGrid__src__Util__inherited_layout_model.SizePositionCouple.new({size: size, position: position}));
      } else {
        this[_modelMap][$putIfAbsent](modelKey, dart.fn(() => new LayoutGrid__src__Util__inherited_layout_model.SizePositionCouple.new({size: size, position: position}), VoidToSizePositionCouple()));
      }
    }
    getWidth(modelKey) {
      return this[_modelMap][$_get](modelKey).size.width;
    }
    getHeight(modelKey) {
      return this[_modelMap][$_get](modelKey).size.height;
    }
    getDx(modelKey) {
      return this[_modelMap][$_get](modelKey).position.dx;
    }
    getDy(modelKey) {
      return this[_modelMap][$_get](modelKey).position.dy;
    }
  };
  (LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_modelMap] = new (LinkedMapOfString$SizePositionCouple()).new();
    LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel.__proto__.new.call(this, {child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel.prototype;
  dart.addTypeTests(LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel);
  dart.setMethodSignature(LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel, () => ({
    __proto__: dart.getMethods(LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [core.Object]),
    updateShouldNotifyDependent: dart.fnType(core.bool, [core.Object, core.Object]),
    updateModel: dart.fnType(dart.void, [core.String, ui$.Size, ui$.Offset]),
    getWidth: dart.fnType(core.double, [core.String]),
    getHeight: dart.fnType(core.double, [core.String]),
    getDx: dart.fnType(core.double, [core.String]),
    getDy: dart.fnType(core.double, [core.String])
  }));
  dart.setLibraryUri(LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel, "package:layout_grid_overview/LayoutGrid/src/Util/inherited_layout_model.dart");
  dart.setFieldSignature(LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel, () => ({
    __proto__: dart.getFields(LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel.__proto__),
    [_modelMap]: dart.finalFieldType(core.Map$(core.String, LayoutGrid__src__Util__inherited_layout_model.SizePositionCouple))
  }));
  dart.trackLibraries("packages/layout_grid_overview/LayoutGrid/src/Util/inherited_layout_model", {
    "package:layout_grid_overview/LayoutGrid/src/Util/inherited_layout_model.dart": LayoutGrid__src__Util__inherited_layout_model
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/inherited_layout_model.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;IAKO;;;;;;IACE;;;;;;;;QAHkB,4CAAa,gDAAK,KAAK;QAAU,wDAAiB,oDAAO,KAAK;IAA9D;IAAiC;;EAAmC;;;;;;;;;;;;uBAkBhD;;AAC3C,0BAAQ,iBAAa,AAAI,GAAD;IAC1B;gCAGsD,KAAiB;;;AACrE,YAA6C,WAArC,AAAU,8BAAY,YAAY,mBAAO,AAAS,uBAAC,YAAY,GAAK,AAAI,AAAS,GAAV,mBAAW,YAAY;IACxG;cAE4C;UAAiB;AAC3D,YAAsB,8HAAkC,OAAO,WAAS,QAAQ;IAClF;gBAGwB,UAAe,MAAa;MAClD,WAAiC,SAAzB,QAAQ,mBAAE,IAAI,mBAAE,QAAQ;AAEhC,oBAAI,AAAU,8BAAY,QAAQ;QAElC,AAAS,uBAAC,QAAQ,EAAI,gFAAyB,IAAI,YAAY,QAAQ;;QAGrE,AAAU,8BAAY,QAAQ,EAAE,cAAM,gFAAyB,IAAI,YAAY,QAAQ;;IAE3F;aAGuB;AACrB,YAAO,AAAS,AAAW,AAAK,wBAAf,QAAQ;IAC3B;cAGwB;AACtB,YAAO,AAAS,AAAW,AAAK,wBAAf,QAAQ;IAC3B;UAGoB;AAClB,YAAO,AAAS,AAAW,AAAS,wBAAnB,QAAQ;IAC3B;UAGoB;AAClB,YAAO,AAAS,AAAW,AAAS,wBAAnB,QAAQ;IAC3B;;;QAhDmB;;IAHmB,kBAAY;AAI7C,wGAAa,KAAK;;EAAC","file":"inherited_layout_model.ddc.js"}');
  // Exports:
  return {
    LayoutGrid__src__Util__inherited_layout_model: LayoutGrid__src__Util__inherited_layout_model
  };
});

//# sourceMappingURL=inherited_layout_model.ddc.js.map
