define(['dart_sdk', 'packages/flutter_web/src/animation/animation', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_units', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_private_units'], function(dart_sdk, animation, layout_grid_units, layout_grid_private_units) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__painting__basic_types = animation.src__painting__basic_types;
  const LayoutGrid__src__Util__layout_grid_units = layout_grid_units.LayoutGrid__src__Util__layout_grid_units;
  const LayoutGrid__src__Util__layout_grid_private_units = layout_grid_private_units.LayoutGrid__src__Util__layout_grid_private_units;
  const LayoutGrid__src__Util__layout_creation = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  const $fillRange = dartx.fillRange;
  const $forEach = dartx.forEach;
  const $add = dartx.add;
  const $compareTo = dartx.compareTo;
  const $sort = dartx.sort;
  const $_set = dartx._set;
  let LinkedMapOfString$double = () => (LinkedMapOfString$double = dart.constFn(_js_helper.LinkedMap$(core.String, core.double)))();
  let IdentityMapOfString$double = () => (IdentityMapOfString$double = dart.constFn(_js_helper.IdentityMap$(core.String, core.double)))();
  let ListOfdouble = () => (ListOfdouble = dart.constFn(core.List$(core.double)))();
  let LayoutUnitToAxis = () => (LayoutUnitToAxis = dart.constFn(dart.fnType(src__painting__basic_types.Axis, [LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit])))();
  let JSArrayOfLayoutUnit = () => (JSArrayOfLayoutUnit = dart.constFn(_interceptors.JSArray$(LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit)))();
  let LayoutUnitAndLayoutUnitToint = () => (LayoutUnitAndLayoutUnitToint = dart.constFn(dart.fnType(core.int, [LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit, LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit])))();
  let LayoutMinMaxAndLayoutMinMaxToint = () => (LayoutMinMaxAndLayoutMinMaxToint = dart.constFn(dart.fnType(core.int, [LayoutGrid__src__Util__layout_grid_units.LayoutMinMax, LayoutGrid__src__Util__layout_grid_units.LayoutMinMax])))();
  let JSArrayOfLayoutMinMax = () => (JSArrayOfLayoutMinMax = dart.constFn(_interceptors.JSArray$(LayoutGrid__src__Util__layout_grid_units.LayoutMinMax)))();
  LayoutGrid__src__Util__layout_creation.Layout = class Layout extends core.Object {
    static createLayout(cols, rows, width, height) {
      let _freeWidth = width;
      let _freeHeight = height;
      let _widthSizes = LayoutGrid__src__Util__layout_creation.Layout._initSizesListWithDefaultValue(dart.notNull(cols[$length]) + dart.notNull(rows[$length]));
      let _heightSizes = LayoutGrid__src__Util__layout_creation.Layout._initSizesListWithDefaultValue(dart.notNull(rows[$length]) + dart.notNull(rows[$length]));
      LayoutGrid__src__Util__layout_creation.Layout._setIndexAndAxis(cols, src__painting__basic_types.Axis.vertical);
      LayoutGrid__src__Util__layout_creation.Layout._setIndexAndAxis(rows, src__painting__basic_types.Axis.horizontal);
      let _joinedList = LayoutGrid__src__Util__layout_creation.Layout._initJoinedAndSortedList(cols, rows);
      for (let _i = 0; _i < dart.notNull(_joinedList[$length]); _i = _i + 1) {
        if (dart.equals(_joinedList[$_get](_i).axis, src__painting__basic_types.Axis.vertical) && _widthSizes[$_get](_joinedList[$_get](_i).index) === -1.0 || dart.equals(_joinedList[$_get](_i).axis, src__painting__basic_types.Axis.horizontal) && _heightSizes[$_get](_joinedList[$_get](_i).index) === -1.0) {
          if (LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.is(_joinedList[$_get](_i)) || LayoutGrid__src__Util__layout_grid_units.LayoutFraction.is(_joinedList[$_get](_i))) {
            dart.equals(_joinedList[$_get](_i).axis, src__painting__basic_types.Axis.vertical) ? _freeWidth = LayoutGrid__src__Util__layout_creation.Layout._manageMinMaxAndFractionsAndGetFreeSpace(_joinedList, _i, _widthSizes, width, _freeWidth) : _freeHeight = LayoutGrid__src__Util__layout_creation.Layout._manageMinMaxAndFractionsAndGetFreeSpace(_joinedList, _i, _heightSizes, height, _freeHeight);
          } else {
            dart.equals(_joinedList[$_get](_i).axis, src__painting__basic_types.Axis.vertical) ? _freeWidth = LayoutGrid__src__Util__layout_creation.Layout._manageDeterminedUnit(_joinedList, _i, _widthSizes, width, _freeWidth) : _freeHeight = LayoutGrid__src__Util__layout_creation.Layout._manageDeterminedUnit(_joinedList, _i, _heightSizes, height, _freeHeight);
          }
        }
      }
      return LayoutGrid__src__Util__layout_creation.Layout._calculateFinalList(cols, _widthSizes, _heightSizes);
    }
    static getWidgetParameters(index, couples, cols, rows) {
      let _map = new (LinkedMapOfString$double()).new();
      if (couples[$_get](index).position != null) {
        _map[$addAll](new (IdentityMapOfString$double()).from(["top", couples[$_get](index).position.dy, "left", couples[$_get](index).position.dx]));
      } else {
        _map[$addAll](new (IdentityMapOfString$double()).from(["top", rows[$_get](couples[$_get](index).row0), "left", cols[$_get](couples[$_get](index).col0)]));
      }
      if (couples[$_get](index).size != null) {
        _map[$addAll](new (IdentityMapOfString$double()).from(["height", couples[$_get](index).size.height, "width", couples[$_get](index).size.width]));
      } else {
        _map[$addAll](new (IdentityMapOfString$double()).from(["height", dart.notNull(rows[$_get](couples[$_get](index).row1)) - dart.notNull(rows[$_get](couples[$_get](index).row0)) >= 0.0 ? dart.notNull(rows[$_get](couples[$_get](index).row1)) - dart.notNull(rows[$_get](couples[$_get](index).row0)) : 0.0, "width", dart.notNull(cols[$_get](couples[$_get](index).col1)) - dart.notNull(cols[$_get](couples[$_get](index).col0)) >= 0.0 ? dart.notNull(cols[$_get](couples[$_get](index).col1)) - dart.notNull(cols[$_get](couples[$_get](index).col0)) : 0.0]));
      }
      return _map;
    }
    static _initSizesListWithDefaultValue(lenght) {
      let _list = ListOfdouble().new(lenght);
      _list[$fillRange](0, _list[$length], -1.0);
      return _list;
    }
    static _setIndexAndAxis(list, axis) {
      for (let _i = 0; _i < dart.notNull(list[$length]); _i = _i + 1) {
        list[$_get](_i).index = _i;
      }
      list[$forEach](dart.fn(a => a.axis = axis, LayoutUnitToAxis()));
    }
    static _initJoinedAndSortedList(cols, rows) {
      let _colsAndRows = (() => {
        let t0 = JSArrayOfLayoutUnit().of([]);
        for (let t1 of cols)
          t0[$add](t1);
        for (let t2 of rows)
          t0[$add](t2);
        return t0;
      })();
      _colsAndRows[$sort](dart.fn((b, a) => a.priority[$compareTo](b.priority), LayoutUnitAndLayoutUnitToint()));
      return _colsAndRows;
    }
    static _manageMinMaxAndFractionsAndGetFreeSpace(joinedList, joinedListIndex, sizes, space, freeSpace) {
      if (LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.is(joinedList[$_get](joinedListIndex))) {
        if (LayoutGrid__src__Util__layout_grid_units.LayoutFraction.is(LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.as(joinedList[$_get](joinedListIndex)).unit)) {
          freeSpace = LayoutGrid__src__Util__layout_creation.Layout._manageFractionsAndGetFreeSpace(joinedList, joinedListIndex, sizes, space, freeSpace);
        } else {
          freeSpace = LayoutGrid__src__Util__layout_creation.Layout._manageDeterminedMinMaxAndGetFreeSpace(joinedList, joinedListIndex, sizes, space, freeSpace);
        }
      } else if (LayoutGrid__src__Util__layout_grid_units.LayoutFraction.is(joinedList[$_get](joinedListIndex))) {
        freeSpace = LayoutGrid__src__Util__layout_creation.Layout._manageFractionsAndGetFreeSpace(joinedList, joinedListIndex, sizes, space, freeSpace);
      }
      return freeSpace;
    }
    static _manageFractionsAndGetFreeSpace(joinedList, joinedListIndex, sizes, space, freeSpace) {
      let t4, t3, t4$, t3$;
      let _layoutMinMaxList = LayoutGrid__src__Util__layout_creation.Layout._initLayoutMinMaxList(joinedList, joinedListIndex, sizes);
      let _sumOfFractions = LayoutGrid__src__Util__layout_creation.Layout._getSumOfFractions(joinedList, joinedList[$_get](joinedListIndex).priority, joinedList[$_get](joinedListIndex).axis);
      let _finalFreeSpace = freeSpace;
      _layoutMinMaxList[$sort](dart.fn((b, a) => a.subPriority[$compareTo](b.subPriority), LayoutMinMaxAndLayoutMinMaxToint()));
      for (let _i = 0; _i < dart.notNull(_layoutMinMaxList[$length]); _i = _i + 1) {
        if (LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.is(_layoutMinMaxList[$_get](_i))) {
          if (LayoutGrid__src__Util__layout_grid_units.LayoutFraction.is(_layoutMinMaxList[$_get](_i).unit)) {
            let value = LayoutGrid__src__Util__layout_grid_units.LayoutFraction.as(_layoutMinMaxList[$_get](_i).unit).getValue(_sumOfFractions, freeSpace);
            let maxValue = LayoutGrid__src__Util__layout_creation.Layout._getDeterminedValue(_layoutMinMaxList[$_get](_i).maxUnit, space, sizes);
            let minValue = LayoutGrid__src__Util__layout_creation.Layout._getDeterminedValue(_layoutMinMaxList[$_get](_i).minUnit, space, sizes);
            if (dart.notNull(value) > dart.notNull(maxValue) && maxValue !== -1.0) {
              _sumOfFractions = dart.notNull(_sumOfFractions) - dart.notNull(LayoutGrid__src__Util__layout_grid_units.LayoutFraction.as(_layoutMinMaxList[$_get](_i).unit).fraction);
              freeSpace = dart.notNull(freeSpace) - dart.notNull(maxValue);
              _finalFreeSpace = dart.notNull(_finalFreeSpace) - dart.notNull(maxValue);
              sizes[$_set](_layoutMinMaxList[$_get](_i).index, maxValue);
            } else if (dart.notNull(value) < dart.notNull(minValue) && minValue !== -1.0) {
              _sumOfFractions = dart.notNull(_sumOfFractions) - dart.notNull(LayoutGrid__src__Util__layout_grid_units.LayoutFraction.as(_layoutMinMaxList[$_get](_i).unit).fraction);
              freeSpace = dart.notNull(freeSpace) - dart.notNull(minValue);
              _finalFreeSpace = dart.notNull(_finalFreeSpace) - dart.notNull(minValue);
              sizes[$_set](_layoutMinMaxList[$_get](_i).index, minValue);
            }
          }
        }
      }
      for (let _i = 0; _i < dart.notNull(joinedList[$length]); _i = _i + 1) {
        if (sizes[$_get](joinedList[$_get](_i).index) === -1.0 && joinedList[$_get](_i).priority == joinedList[$_get](joinedListIndex).priority && dart.equals(joinedList[$_get](_i).axis, joinedList[$_get](joinedListIndex).axis)) {
          if (LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.is(joinedList[$_get](_i))) {
            if (LayoutGrid__src__Util__layout_grid_units.LayoutFraction.is(LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.as(joinedList[$_get](_i)).unit)) {
              let value = LayoutGrid__src__Util__layout_grid_units.LayoutFraction.as(LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.as(joinedList[$_get](_i)).unit).getValue(_sumOfFractions, freeSpace);
              _finalFreeSpace = dart.notNull(_finalFreeSpace) - dart.notNull(value);
              sizes[$_set](joinedList[$_get](_i).index, value);
            }
          } else if (LayoutGrid__src__Util__layout_grid_units.LayoutFraction.is(joinedList[$_get](_i))) {
            let value = LayoutGrid__src__Util__layout_grid_units.LayoutFraction.as(joinedList[$_get](_i)).getValue(_sumOfFractions, freeSpace);
            _finalFreeSpace = dart.notNull(_finalFreeSpace) - dart.notNull(value);
            sizes[$_set](joinedList[$_get](_i).index, value);
          }
        }
      }
      if (dart.notNull(_finalFreeSpace) > 0.0) {
        for (let _i = 0; _i < dart.notNull(_layoutMinMaxList[$length]); _i = _i + 1) {
          if (LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.is(_layoutMinMaxList[$_get](_i)) && dart.notNull(_finalFreeSpace) > 0.0) {
            if (LayoutGrid__src__Util__layout_grid_units.LayoutFraction.is(_layoutMinMaxList[$_get](_i).unit)) {
              let maxValue = LayoutGrid__src__Util__layout_creation.Layout._getDeterminedValue(_layoutMinMaxList[$_get](_i).maxUnit, space, sizes);
              if (maxValue === -1.0) {
                t3 = sizes;
                t4 = _layoutMinMaxList[$_get](_i).index;
                t3[$_set](t4, dart.notNull(t3[$_get](t4)) + dart.notNull(_finalFreeSpace));
                freeSpace = 0.0;
                _finalFreeSpace = 0.0;
              } else if (dart.notNull(maxValue) > dart.notNull(sizes[$_get](_layoutMinMaxList[$_get](_i).index))) {
                let value = dart.notNull(maxValue) - dart.notNull(_finalFreeSpace);
                t3$ = sizes;
                t4$ = _layoutMinMaxList[$_get](_i).index;
                t3$[$_set](t4$, dart.notNull(t3$[$_get](t4$)) + value);
                freeSpace = dart.notNull(freeSpace) - value;
                _finalFreeSpace = dart.notNull(_finalFreeSpace) - value;
              }
            }
          }
        }
      }
      return _finalFreeSpace;
    }
    static _initLayoutMinMaxList(joinedList, joinedListIndex, sizes) {
      let _layoutMinMaxList = JSArrayOfLayoutMinMax().of([]);
      for (let _i = 0; _i < dart.notNull(joinedList[$length]); _i = _i + 1) {
        if (LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.is(joinedList[$_get](_i)) && sizes[$_get](joinedList[$_get](_i).index) === -1.0 && joinedList[$_get](_i).priority == joinedList[$_get](joinedListIndex).priority && dart.equals(joinedList[$_get](_i).axis, joinedList[$_get](joinedListIndex).axis)) {
          if (LayoutGrid__src__Util__layout_grid_units.LayoutFraction.is(LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.as(joinedList[$_get](_i)).unit)) {
            _layoutMinMaxList[$add](LayoutGrid__src__Util__layout_grid_units.LayoutMinMax._check(joinedList[$_get](_i)));
          }
        }
      }
      return _layoutMinMaxList;
    }
    static _manageDeterminedMinMaxAndGetFreeSpace(joinedList, joinedListIndex, sizes, space, freeSpace) {
      let _finalFreeSpace = freeSpace;
      let value = LayoutGrid__src__Util__layout_creation.Layout._getDeterminedValue(LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.as(joinedList[$_get](joinedListIndex)).unit, space, sizes);
      let minValue = LayoutGrid__src__Util__layout_creation.Layout._getDeterminedValue(LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.as(joinedList[$_get](joinedListIndex)).minUnit, space, sizes);
      let maxValue = LayoutGrid__src__Util__layout_creation.Layout._getDeterminedValue(LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.as(joinedList[$_get](joinedListIndex)).maxUnit, space, sizes);
      if (dart.notNull(value) > dart.notNull(maxValue) && maxValue !== -1.0) {
        sizes[$_set](joinedList[$_get](joinedListIndex).index, maxValue);
        _finalFreeSpace = dart.notNull(_finalFreeSpace) - dart.notNull(maxValue);
      } else if (dart.notNull(value) < dart.notNull(minValue) && minValue !== -1.0) {
        sizes[$_set](joinedList[$_get](joinedListIndex).index, minValue);
        _finalFreeSpace = dart.notNull(_finalFreeSpace) - dart.notNull(minValue);
      } else {
        sizes[$_set](joinedList[$_get](joinedListIndex).index, value);
        _finalFreeSpace = dart.notNull(_finalFreeSpace) - dart.notNull(value);
      }
      return _finalFreeSpace;
    }
    static _manageDeterminedUnit(joinedList, joinedListIndex, sizes, space, freeSpace) {
      let _finalFreeSpace = freeSpace;
      let value = LayoutGrid__src__Util__layout_creation.Layout._getDeterminedValue(joinedList[$_get](joinedListIndex), space, sizes);
      sizes[$_set](joinedList[$_get](joinedListIndex).index, value);
      _finalFreeSpace = dart.notNull(_finalFreeSpace) - dart.notNull(value);
      return _finalFreeSpace;
    }
    static _getDeterminedValue(unit, space, sizes) {
      let _value = 0.0;
      if (LayoutGrid__src__Util__layout_grid_units.LayoutPixel.is(unit)) {
        _value = unit.getValue();
      } else if (LayoutGrid__src__Util__layout_grid_units.LayoutPercentage.is(unit)) {
        _value = unit.getValue(space);
      } else if (LayoutGrid__src__Util__layout_grid_units.LayoutDependent.is(unit)) {
        _value = unit.getValue(sizes);
      } else if (unit == null) {
        _value = -1.0;
      }
      return _value;
    }
    static _getSumOfFractions(list, priority, axis) {
      let _sumOfFractions = 0;
      for (let _i = 0; _i < dart.notNull(list[$length]); _i = _i + 1) {
        if (list[$_get](_i).priority == priority && dart.equals(list[$_get](_i).axis, axis)) {
          if (LayoutGrid__src__Util__layout_grid_units.LayoutFraction.is(list[$_get](_i))) {
            _sumOfFractions = _sumOfFractions + dart.notNull(LayoutGrid__src__Util__layout_grid_units.LayoutFraction.as(list[$_get](_i)).fraction);
          } else if (LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.is(list[$_get](_i))) {
            if (LayoutGrid__src__Util__layout_grid_units.LayoutFraction.is(LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.as(list[$_get](_i)).unit)) {
              _sumOfFractions = _sumOfFractions + dart.notNull(LayoutGrid__src__Util__layout_grid_units.LayoutFraction.as(LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.as(list[$_get](_i)).unit).fraction);
            }
          }
        }
      }
      return _sumOfFractions;
    }
    static _calculateFinalList(cols, widthSizes, heightSizes) {
      let _finalList = ListOfdouble().new(widthSizes[$length]);
      let colsLenght = cols[$length];
      let widthPosition = 0.0;
      let heightPosition = 0.0;
      for (let _i = 0; _i < dart.notNull(_finalList[$length]); _i = _i + 1) {
        if (_i < dart.notNull(colsLenght)) {
          _finalList[$_set](_i, widthPosition + dart.notNull(widthSizes[$_get](_i)));
          widthPosition = widthPosition + dart.notNull(widthSizes[$_get](_i));
        } else {
          _finalList[$_set](_i, heightPosition + dart.notNull(heightSizes[$_get](_i - dart.notNull(colsLenght))));
          heightPosition = heightPosition + dart.notNull(heightSizes[$_get](_i - dart.notNull(colsLenght)));
        }
      }
      return _finalList;
    }
  };
  (LayoutGrid__src__Util__layout_creation.Layout.new = function() {
    ;
  }).prototype = LayoutGrid__src__Util__layout_creation.Layout.prototype;
  dart.addTypeTests(LayoutGrid__src__Util__layout_creation.Layout);
  dart.setLibraryUri(LayoutGrid__src__Util__layout_creation.Layout, "package:layout_grid_overview/LayoutGrid/src/Util/layout_creation.dart");
  dart.trackLibraries("packages/layout_grid_overview/LayoutGrid/src/Util/layout_creation", {
    "package:layout_grid_overview/LayoutGrid/src/Util/layout_creation.dart": LayoutGrid__src__Util__layout_creation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/layout_creation.dart"],"names":[],"mappings":"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","file":"layout_creation.ddc.js"}');
  // Exports:
  return {
    LayoutGrid__src__Util__layout_creation: LayoutGrid__src__Util__layout_creation
  };
});

//# sourceMappingURL=layout_creation.ddc.js.map
