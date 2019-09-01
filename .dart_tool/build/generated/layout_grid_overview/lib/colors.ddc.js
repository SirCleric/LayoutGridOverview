define(['dart_sdk', 'packages/flutter_web_ui/ui'], function(dart_sdk, ui) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui$ = ui.ui;
  const colors = Object.create(dart.library);
  colors.MyColors = class MyColors extends core.Object {};
  (colors.MyColors.new = function() {
    ;
  }).prototype = colors.MyColors.prototype;
  dart.addTypeTests(colors.MyColors);
  dart.setLibraryUri(colors.MyColors, "package:layout_grid_overview/colors.dart");
  dart.defineLazy(colors.MyColors, {
    /*colors.MyColors.slate*/get slate() {
      return new ui$.Color.fromRGBO(38, 38, 38, 1.0);
    },
    set slate(_) {},
    /*colors.MyColors.secondHandGrey*/get secondHandGrey() {
      return new ui$.Color.fromRGBO(63, 63, 63, 1.0);
    },
    set secondHandGrey(_) {},
    /*colors.MyColors.whitish*/get whitish() {
      return new ui$.Color.fromRGBO(245, 245, 245, 1.0);
    },
    set whitish(_) {},
    /*colors.MyColors.lightGrey*/get lightGrey() {
      return new ui$.Color.fromRGBO(220, 220, 220, 1.0);
    },
    set lightGrey(_) {}
  });
  dart.trackLibraries("packages/layout_grid_overview/colors", {
    "package:layout_grid_overview/colors.dart": colors
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/colors.dart"],"names":[],"mappings":";;;;;;;;;;EAOA;;;;MAJe,qBAAK;YAAS,wBAAS,IAAI,IAAI,IAAI;;;MACnC,8BAAc;YAAS,wBAAS,IAAI,IAAI,IAAI;;;MAC5C,uBAAO;YAAS,wBAAS,KAAK,KAAK,KAAK;;;MACxC,yBAAS;YAAS,wBAAS,KAAK,KAAK,KAAK","file":"colors.ddc.js"}');
  // Exports:
  return {
    colors: colors
  };
});

//# sourceMappingURL=colors.ddc.js.map
