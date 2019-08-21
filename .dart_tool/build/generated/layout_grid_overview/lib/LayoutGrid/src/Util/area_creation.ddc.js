define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const LayoutGrid__src__Util__area_creation = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $_set = dartx._set;
  LayoutGrid__src__Util__area_creation.getPositionedGridCoupleList = function(areas, couples) {
    let _couples = couples;
    let _name = null;
    for (let _i = 0; _i < dart.notNull(_couples[$length]); _i = _i + 1) {
      _name = _couples[$_get](_i).name;
      if (_name != null) {
        _couples[$_set](_i, LayoutGrid__src__Util__area_creation.getPositionededGridCouple(areas, _couples[$_get](_i)));
      }
    }
    return _couples;
  };
  LayoutGrid__src__Util__area_creation.getPositionededGridCouple = function(areas, couple) {
    let _couple = couple;
    for (let _i = 0; _i < dart.notNull(areas[$length]); _i = _i + 1) {
      for (let _j = 0; _j < dart.notNull(areas[$_get](_i)[$length]); _j = _j + 1) {
        if (areas[$_get](_i)[$_get](_j) == _couple.name) {
          if (dart.notNull(_couple.col0) > _j || _couple.col0 === -1) {
            _couple.col0 = _j;
          }
          if (dart.notNull(_couple.col1) < _j + 1 || _couple.col1 === -1) {
            _couple.col1 = _j + 1;
          }
          if (dart.notNull(_couple.row0) > _i || _couple.row0 === -1) {
            _couple.row0 = _i;
          }
          if (dart.notNull(_couple.row1) < _i + 1 || _couple.row1 === -1) {
            _couple.row1 = _i + 1;
          }
        }
      }
    }
    if (_couple.col0 === -1) {
      dart.throw("Could not find the area specified by the LayoutGridCouple, did you write it correctly?");
    }
    return _couple;
  };
  dart.trackLibraries("packages/layout_grid_overview/LayoutGrid/src/Util/area_creation", {
    "package:layout_grid_overview/LayoutGrid/src/Util/area_creation.dart": LayoutGrid__src__Util__area_creation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/area_creation.dart"],"names":[],"mappings":";;;;;;;;;8EAEsE,OAA8B;AAC3E,mBAAW,OAAO;AAClC;AAEP,aAAS,KAAK,GAAG,AAAG,EAAD,gBAAG,AAAS,QAAD,YAAS,KAAA,AAAE,EAAA;MACvC,QAAQ,AAAQ,AAAK,QAAL,QAAC,EAAE;AAEnB,UAAI,KAAK,IAAI;QACX,AAAQ,QAAA,QAAC,EAAE,EAAI,+DAA0B,KAAK,EAAE,AAAQ,QAAA,QAAC,EAAE;;;AAI/D,UAAO,SAAQ;EACjB;4EAE8D,OAAwB;AACnE,kBAAU,MAAM;AAEjC,aAAS,KAAK,GAAG,AAAG,EAAD,gBAAG,AAAM,KAAD,YAAS,KAAA,AAAE,EAAA;AACpC,eAAS,KAAK,GAAG,AAAG,EAAD,gBAAG,AAAK,AAAK,KAAL,QAAC,EAAE,aAAU,KAAA,AAAE,EAAA;AACxC,YAAI,AAAK,AAAI,AAAK,KAAT,QAAC,EAAE,SAAE,EAAE,KAAK,AAAQ,OAAD;AAC1B,cAAiB,aAAb,AAAQ,OAAD,SAAQ,EAAE,IAAI,AAAQ,AAAK,OAAN,UAAS,CAAC;YACxC,AAAQ,OAAD,QAAQ,EAAE;;AAEnB,cAAiB,aAAb,AAAQ,OAAD,SAAQ,AAAG,EAAD,GAAG,KAAK,AAAQ,AAAK,OAAN,UAAS,CAAC;YAC5C,AAAQ,OAAD,QAAQ,AAAG,EAAD,GAAG;;AAGtB,cAAiB,aAAb,AAAQ,OAAD,SAAQ,EAAE,IAAI,AAAQ,AAAK,OAAN,UAAS,CAAC;YACxC,AAAQ,OAAD,QAAQ,EAAE;;AAEnB,cAAiB,aAAb,AAAQ,OAAD,SAAQ,AAAG,EAAD,GAAG,KAAK,AAAQ,AAAK,OAAN,UAAS,CAAC;YAC5C,AAAQ,OAAD,QAAQ,AAAG,EAAD,GAAG;;;;;AAO5B,QAAI,AAAQ,AAAK,OAAN,UAAS,CAAC;MACnB,WAAO;;AAGT,UAAO,QAAO;EAChB","file":"area_creation.ddc.js"}');
  // Exports:
  return {
    LayoutGrid__src__Util__area_creation: LayoutGrid__src__Util__area_creation
  };
});

//# sourceMappingURL=area_creation.ddc.js.map
