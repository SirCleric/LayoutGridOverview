define(['dart_sdk', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui'], function(dart_sdk, animation, material, ui) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__painting__text_style = animation.src__painting__text_style;
  const src__material__colors = material.src__material__colors;
  const ui$ = ui.ui;
  const Texts__styles = Object.create(dart.library);
  Texts__styles.styles = class styles extends core.Object {
    static getBodyStyle() {
      return Texts__styles.styles._body;
    }
    static getHeaderStyle() {
      return Texts__styles.styles._header;
    }
    static getTitleStyle() {
      return Texts__styles.styles._title;
    }
    static getGitHubStyle() {
      return Texts__styles.styles._gitHub;
    }
  };
  (Texts__styles.styles.new = function() {
    ;
  }).prototype = Texts__styles.styles.prototype;
  dart.addTypeTests(Texts__styles.styles);
  dart.setLibraryUri(Texts__styles.styles, "package:layout_grid_overview/Texts/styles.dart");
  dart.defineLazy(Texts__styles.styles, {
    /*Texts__styles.styles._header*/get _header() {
      return new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.yellowAccent, fontFamily: "ostrich", fontWeight: ui$.FontWeight.w700, fontSize: 64.0});
    },
    set _header(_) {},
    /*Texts__styles.styles._body*/get _body() {
      return new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontFamily: "ostrich", fontWeight: ui$.FontWeight.w400, fontSize: 48.0});
    },
    set _body(_) {},
    /*Texts__styles.styles._title*/get _title() {
      return new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontFamily: "ostrich", fontWeight: ui$.FontWeight.w700, fontSize: 32.0});
    },
    set _title(_) {},
    /*Texts__styles.styles._gitHub*/get _gitHub() {
      return new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.black, fontFamily: "ostrich", fontWeight: ui$.FontWeight.w700, fontSize: 24.0});
    },
    set _gitHub(_) {}
  });
  dart.trackLibraries("packages/layout_grid_overview/Texts/styles", {
    "package:layout_grid_overview/Texts/styles.dart": Texts__styles
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/Texts/styles.dart"],"names":[],"mappings":";;;;;;;;;;;AAUI,YAAO;IACT;;AAEE,YAAO;IACT;;AAEE,YAAO;IACT;;AAEE,YAAO;IACT;;;;EACF;;;;MAjBmB,4BAAO;YAAG,qDAAwB,uDAAyB,uBAAkC,+BAAgB;;;MAC7G,0BAAK;YAAG,qDAAwB,gDAAkB,uBAAkC,+BAAgB;;;MACpG,2BAAM;YAAG,qDAAwB,gDAAkB,uBAAkC,+BAAgB;;;MACrG,4BAAO;YAAG,qDAAwB,gDAAkB,uBAAkC,+BAAgB","file":"styles.ddc.js"}');
  // Exports:
  return {
    Texts__styles: Texts__styles
  };
});

//# sourceMappingURL=styles.ddc.js.map
