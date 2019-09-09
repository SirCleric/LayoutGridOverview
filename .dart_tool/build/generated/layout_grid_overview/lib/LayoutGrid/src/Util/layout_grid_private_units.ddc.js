define(['dart_sdk', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__painting__basic_types = animation.src__painting__basic_types;
  const LayoutGrid__src__Util__layout_grid_private_units = Object.create(dart.library);
  LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit = class LayoutUnit extends core.Object {
    get priority() {
      return this[priority$];
    }
    set priority(value) {
      this[priority$] = value;
    }
    get index() {
      return this[index];
    }
    set index(value) {
      this[index] = value;
    }
    get axis() {
      return this[axis];
    }
    set axis(value) {
      this[axis] = value;
    }
  };
  (LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit.new = function(opts) {
    let priority = opts && 'priority' in opts ? opts.priority : null;
    this[index] = 0;
    this[axis] = null;
    this[priority$] = priority;
    ;
  }).prototype = LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit.prototype;
  dart.addTypeTests(LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit);
  const priority$ = Symbol("LayoutUnit.priority");
  const index = Symbol("LayoutUnit.index");
  const axis = Symbol("LayoutUnit.axis");
  dart.setLibraryUri(LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit, "package:layout_grid_overview/LayoutGrid/src/Util/layout_grid_private_units.dart");
  dart.setFieldSignature(LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit, () => ({
    __proto__: dart.getFields(LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit.__proto__),
    priority: dart.fieldType(core.int),
    index: dart.fieldType(core.int),
    axis: dart.fieldType(src__painting__basic_types.Axis)
  }));
  dart.trackLibraries("packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_private_units", {
    "package:layout_grid_overview/LayoutGrid/src/Util/layout_grid_private_units.dart": LayoutGrid__src__Util__layout_grid_private_units
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_private_units.dart"],"names":[],"mappings":";;;;;;;;IAMM;;;;;;IACA;;;;;;IACC;;;;;;;;QAJY;IAGb,cAAQ;IACP;IAJY;;EAAU","file":"layout_grid_private_units.ddc.js"}');
  // Exports:
  return {
    LayoutGrid__src__Util__layout_grid_private_units: LayoutGrid__src__Util__layout_grid_private_units
  };
});

//# sourceMappingURL=layout_grid_private_units.ddc.js.map
