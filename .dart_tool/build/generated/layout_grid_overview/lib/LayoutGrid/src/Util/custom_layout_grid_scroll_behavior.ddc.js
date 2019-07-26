define(['dart_sdk', 'packages/flutter_web/animation'], function(dart_sdk, animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__scroll_configuration = animation.src__widgets__scroll_configuration;
  const LayoutGrid__src__Util__custom_layout_grid_scroll_behavior = Object.create(dart.library);
  LayoutGrid__src__Util__custom_layout_grid_scroll_behavior.CustomLayoutGridScrollBehavior = class CustomLayoutGridScrollBehavior extends src__widgets__scroll_configuration.ScrollBehavior {
    buildViewportChrome(context, child, axisDirection) {
      return child;
    }
  };
  (LayoutGrid__src__Util__custom_layout_grid_scroll_behavior.CustomLayoutGridScrollBehavior.new = function() {
    LayoutGrid__src__Util__custom_layout_grid_scroll_behavior.CustomLayoutGridScrollBehavior.__proto__.new.call(this);
    ;
  }).prototype = LayoutGrid__src__Util__custom_layout_grid_scroll_behavior.CustomLayoutGridScrollBehavior.prototype;
  dart.addTypeTests(LayoutGrid__src__Util__custom_layout_grid_scroll_behavior.CustomLayoutGridScrollBehavior);
  dart.setLibraryUri(LayoutGrid__src__Util__custom_layout_grid_scroll_behavior.CustomLayoutGridScrollBehavior, "package:layout_grid_overview/LayoutGrid/src/Util/custom_layout_grid_scroll_behavior.dart");
  dart.trackLibraries("packages/layout_grid_overview/LayoutGrid/src/Util/custom_layout_grid_scroll_behavior", {
    "package:layout_grid_overview/LayoutGrid/src/Util/custom_layout_grid_scroll_behavior.dart": LayoutGrid__src__Util__custom_layout_grid_scroll_behavior
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/custom_layout_grid_scroll_behavior.dart"],"names":[],"mappings":";;;;;;;;wBAKmB,SAAgB,OAAqB;AACpD,YAAO,MAAK;IACd;;;;;EACF","file":"custom_layout_grid_scroll_behavior.ddc.js"}');
  // Exports:
  return {
    LayoutGrid__src__Util__custom_layout_grid_scroll_behavior: LayoutGrid__src__Util__custom_layout_grid_scroll_behavior
  };
});

//# sourceMappingURL=custom_layout_grid_scroll_behavior.ddc.js.map
