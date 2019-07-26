define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web/animation'], function(dart_sdk, ui, animation) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui$ = ui.ui;
  const src__widgets__inherited_model = animation.src__widgets__inherited_model;
  const LayoutGrid__src__Util__inherited_size_model = Object.create(dart.library);
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $_set = dartx._set;
  let LinkedMapOfString$Size = () => (LinkedMapOfString$Size = dart.constFn(_js_helper.LinkedMap$(core.String, ui$.Size)))();
  let SetOfString = () => (SetOfString = dart.constFn(core.Set$(core.String)))();
  const _sizeMap = dart.privateName(LayoutGrid__src__Util__inherited_size_model, "_sizeMap");
  LayoutGrid__src__Util__inherited_size_model.InheritedSizeModel = class InheritedSizeModel extends src__widgets__inherited_model.InheritedModel$(core.String) {
    updateShouldNotify(old) {
      LayoutGrid__src__Util__inherited_size_model.InheritedSizeModel._check(old);
      return !dart.equals(this[_sizeMap], old[_sizeMap]);
    }
    updateShouldNotifyDependent(old, dependencies) {
      LayoutGrid__src__Util__inherited_size_model.InheritedSizeModel._check(old);
      SetOfString()._check(dependencies);
      return dart.test(this[_sizeMap][$containsKey](dependencies)) && !dart.equals(this[_sizeMap][$_get](dependencies), old[_sizeMap][$_get](dependencies));
    }
    static of(context, opts) {
      let sizeKey = opts && 'sizeKey' in opts ? opts.sizeKey : null;
      return src__widgets__inherited_model.InheritedModel.inheritFrom(LayoutGrid__src__Util__inherited_size_model.InheritedSizeModel, context, {aspect: sizeKey});
    }
    updateSize(sizeKey, size) {
      this[_sizeMap][$_set](sizeKey, size);
    }
    getWidth(sizeKey) {
      return this[_sizeMap][$_get](sizeKey).width;
    }
    getHeight(sizeKey) {
      return this[_sizeMap][$_get](sizeKey).height;
    }
  };
  (LayoutGrid__src__Util__inherited_size_model.InheritedSizeModel.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_sizeMap] = new (LinkedMapOfString$Size()).new();
    LayoutGrid__src__Util__inherited_size_model.InheritedSizeModel.__proto__.new.call(this, {child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = LayoutGrid__src__Util__inherited_size_model.InheritedSizeModel.prototype;
  dart.addTypeTests(LayoutGrid__src__Util__inherited_size_model.InheritedSizeModel);
  dart.setMethodSignature(LayoutGrid__src__Util__inherited_size_model.InheritedSizeModel, () => ({
    __proto__: dart.getMethods(LayoutGrid__src__Util__inherited_size_model.InheritedSizeModel.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [core.Object]),
    updateShouldNotifyDependent: dart.fnType(core.bool, [core.Object, core.Object]),
    updateSize: dart.fnType(dart.void, [core.String, ui$.Size]),
    getWidth: dart.fnType(core.double, [core.String]),
    getHeight: dart.fnType(core.double, [core.String])
  }));
  dart.setLibraryUri(LayoutGrid__src__Util__inherited_size_model.InheritedSizeModel, "package:layout_grid_overview/LayoutGrid/src/Util/inherited_size_model.dart");
  dart.setFieldSignature(LayoutGrid__src__Util__inherited_size_model.InheritedSizeModel, () => ({
    __proto__: dart.getFields(LayoutGrid__src__Util__inherited_size_model.InheritedSizeModel.__proto__),
    [_sizeMap]: dart.finalFieldType(core.Map$(core.String, ui$.Size))
  }));
  dart.trackLibraries("packages/layout_grid_overview/LayoutGrid/src/Util/inherited_size_model", {
    "package:layout_grid_overview/LayoutGrid/src/Util/inherited_size_model.dart": LayoutGrid__src__Util__inherited_size_model
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/inherited_size_model.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;uBAc6C;;AACzC,0BAAQ,gBAAY,AAAI,GAAD;IACzB;gCAIuB,KAAiB;;;AACtC,YAA4C,WAApC,AAAS,6BAAY,YAAY,mBACpC,AAAQ,sBAAC,YAAY,GAAK,AAAI,AAAQ,GAAT,kBAAU,YAAY;IAC1D;cAE0C;UAAiB;AACzD,YAAsB,0HAAgC,OAAO,WACjD,OAAO;IACrB;eAGuB,SAAc;MACnC,AAAQ,sBAAC,OAAO,EAAI,IAAI;IAC1B;aAGuB;AACrB,YAAO,AAAQ,AAAU,uBAAT,OAAO;IACzB;cAGwB;AACtB,YAAO,AAAQ,AAAU,uBAAT,OAAO;IACzB;;;QAjCmB;;IAHK,iBAAW;AAI9B,oGAAa,KAAK;;EAAC","file":"inherited_size_model.ddc.js"}');
  // Exports:
  return {
    LayoutGrid__src__Util__inherited_size_model: LayoutGrid__src__Util__inherited_size_model
  };
});

//# sourceMappingURL=inherited_size_model.ddc.js.map
