define(['dart_sdk', 'packages/flutter_web/src/animation/animation', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_units', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_private_units'], function(dart_sdk, animation, layout_grid_units, layout_grid_private_units) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__painting__basic_types = animation.src__painting__basic_types;
  const LayoutGrid__src__Util__layout_grid_units = layout_grid_units.LayoutGrid__src__Util__layout_grid_units;
  const LayoutGrid__src__Util__layout_grid_private_units = layout_grid_private_units.LayoutGrid__src__Util__layout_grid_private_units;
  const LayoutGrid__src__Util__layout_creation = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $fillRange = dartx.fillRange;
  const $forEach = dartx.forEach;
  const $add = dartx.add;
  const $compareTo = dartx.compareTo;
  const $sort = dartx.sort;
  const $_set = dartx._set;
  let ListOfdouble = () => (ListOfdouble = dart.constFn(core.List$(core.double)))();
  let LayoutUnitToAxis = () => (LayoutUnitToAxis = dart.constFn(dart.fnType(src__painting__basic_types.Axis, [LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit])))();
  let JSArrayOfLayoutUnit = () => (JSArrayOfLayoutUnit = dart.constFn(_interceptors.JSArray$(LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit)))();
  let LayoutUnitAndLayoutUnitToint = () => (LayoutUnitAndLayoutUnitToint = dart.constFn(dart.fnType(core.int, [LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit, LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit])))();
  let LayoutMinMaxAndLayoutMinMaxToint = () => (LayoutMinMaxAndLayoutMinMaxToint = dart.constFn(dart.fnType(core.int, [LayoutGrid__src__Util__layout_grid_units.LayoutMinMax, LayoutGrid__src__Util__layout_grid_units.LayoutMinMax])))();
  let JSArrayOfLayoutMinMax = () => (JSArrayOfLayoutMinMax = dart.constFn(_interceptors.JSArray$(LayoutGrid__src__Util__layout_grid_units.LayoutMinMax)))();
  LayoutGrid__src__Util__layout_creation.createLayout = function(cols, rows, width, height) {
    let _freeWidth = width;
    let _freeHeight = height;
    let _widthSizes = LayoutGrid__src__Util__layout_creation.initSizesListWithDefaultValue(cols[$length]);
    let _heightSizes = LayoutGrid__src__Util__layout_creation.initSizesListWithDefaultValue(rows[$length]);
    LayoutGrid__src__Util__layout_creation.setIndexAndAxis(cols, src__painting__basic_types.Axis.vertical);
    LayoutGrid__src__Util__layout_creation.setIndexAndAxis(rows, src__painting__basic_types.Axis.horizontal);
    let _joinedList = LayoutGrid__src__Util__layout_creation.initJoinedAndSortedList(cols, rows);
    for (let _i = 0; _i < dart.notNull(_joinedList[$length]); _i = _i + 1) {
      if (dart.equals(_joinedList[$_get](_i).axis, src__painting__basic_types.Axis.vertical) && _widthSizes[$_get](_joinedList[$_get](_i).index) === -1.0 || dart.equals(_joinedList[$_get](_i).axis, src__painting__basic_types.Axis.horizontal) && _heightSizes[$_get](_joinedList[$_get](_i).index) === -1.0) {
        core.print(dart.str(_i));
        if (LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.is(_joinedList[$_get](_i)) || LayoutGrid__src__Util__layout_grid_units.LayoutFraction.is(_joinedList[$_get](_i))) {
          dart.equals(_joinedList[$_get](_i).axis, src__painting__basic_types.Axis.vertical) ? _freeWidth = LayoutGrid__src__Util__layout_creation.manageMinMaxAndFractionsAndGetFreeSpace(_joinedList, _i, _widthSizes, width, _freeWidth) : _freeHeight = LayoutGrid__src__Util__layout_creation.manageMinMaxAndFractionsAndGetFreeSpace(_joinedList, _i, _heightSizes, height, _freeHeight);
        } else {
          dart.equals(_joinedList[$_get](_i).axis, src__painting__basic_types.Axis.vertical) ? _freeWidth = LayoutGrid__src__Util__layout_creation.manageDeterminedUnit(_joinedList, _i, _widthSizes, width, _freeWidth) : _freeHeight = LayoutGrid__src__Util__layout_creation.manageDeterminedUnit(_joinedList, _i, _heightSizes, height, _freeHeight);
        }
      }
    }
    return LayoutGrid__src__Util__layout_creation.calculateFinalList(cols, _widthSizes, _heightSizes);
  };
  LayoutGrid__src__Util__layout_creation.initSizesListWithDefaultValue = function(lenght) {
    let _list = ListOfdouble().new(lenght);
    _list[$fillRange](0, _list[$length], -1.0);
    return _list;
  };
  LayoutGrid__src__Util__layout_creation.setIndexAndAxis = function(list, axis) {
    for (let _i = 0; _i < dart.notNull(list[$length]); _i = _i + 1) {
      list[$_get](_i).index = _i;
    }
    list[$forEach](dart.fn(a => a.axis = axis, LayoutUnitToAxis()));
  };
  LayoutGrid__src__Util__layout_creation.initJoinedAndSortedList = function(cols, rows) {
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
  };
  LayoutGrid__src__Util__layout_creation.manageMinMaxAndFractionsAndGetFreeSpace = function(joinedList, joinedListIndex, sizes, space, freeSpace) {
    if (LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.is(joinedList[$_get](joinedListIndex))) {
      if (LayoutGrid__src__Util__layout_grid_units.LayoutFraction.is(LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.as(joinedList[$_get](joinedListIndex)).unit)) {
        freeSpace = LayoutGrid__src__Util__layout_creation.manageFractionsAndGetFreeSpace(joinedList, joinedListIndex, sizes, space, freeSpace);
      } else {
        freeSpace = LayoutGrid__src__Util__layout_creation.manageDeterminedMinMaxAndGetFreeSpace(joinedList, joinedListIndex, sizes, space, freeSpace);
      }
    } else if (LayoutGrid__src__Util__layout_grid_units.LayoutFraction.is(joinedList[$_get](joinedListIndex))) {
      freeSpace = LayoutGrid__src__Util__layout_creation.manageFractionsAndGetFreeSpace(joinedList, joinedListIndex, sizes, space, freeSpace);
    }
    return freeSpace;
  };
  LayoutGrid__src__Util__layout_creation.manageFractionsAndGetFreeSpace = function(joinedList, joinedListIndex, sizes, space, freeSpace) {
    let t4, t3;
    let _layoutMinMaxList = LayoutGrid__src__Util__layout_creation.initLayoutMinMaxList(joinedList, joinedListIndex);
    let _sumOfFractions = LayoutGrid__src__Util__layout_creation.getSumOfFractions(joinedList, joinedList[$_get](joinedListIndex).priority, joinedList[$_get](joinedListIndex).axis);
    core.print("SOF: " + dart.str(_sumOfFractions));
    let _finalFreeSpace = freeSpace;
    _layoutMinMaxList[$sort](dart.fn((b, a) => a.subPriority[$compareTo](b.subPriority), LayoutMinMaxAndLayoutMinMaxToint()));
    for (let _i = 0; _i < dart.notNull(_layoutMinMaxList[$length]); _i = _i + 1) {
      if (LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.is(_layoutMinMaxList[$_get](_i))) {
        if (LayoutGrid__src__Util__layout_grid_units.LayoutFraction.is(_layoutMinMaxList[$_get](_i).unit)) {
          let value = LayoutGrid__src__Util__layout_grid_units.LayoutFraction.as(_layoutMinMaxList[$_get](_i).unit).getValue(_sumOfFractions, freeSpace);
          let maxValue = LayoutGrid__src__Util__layout_creation.getDeterminedValue(_layoutMinMaxList[$_get](_i).maxUnit, space, sizes);
          let minValue = LayoutGrid__src__Util__layout_creation.getDeterminedValue(_layoutMinMaxList[$_get](_i).minUnit, space, sizes);
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
      if (sizes[$_get](joinedList[$_get](_i).index) === -1.0 && joinedList[$_get](_i).priority == joinedList[$_get](joinedListIndex).priority) {
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
    core.print("final free space: " + dart.str(_finalFreeSpace));
    if (dart.notNull(_finalFreeSpace) > 0.0) {
      for (let _i = 0; _i < dart.notNull(_layoutMinMaxList[$length]); _i = _i + 1) {
        if (LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.is(_layoutMinMaxList[$_get](_i))) {
          if (LayoutGrid__src__Util__layout_grid_units.LayoutFraction.is(_layoutMinMaxList[$_get](_i).unit)) {
            let maxValue = LayoutGrid__src__Util__layout_creation.getDeterminedValue(_layoutMinMaxList[$_get](_i).maxUnit, space, sizes);
            if (maxValue === -1.0) {
              t3 = sizes;
              t4 = _layoutMinMaxList[$_get](_i).index;
              t3[$_set](t4, dart.notNull(t3[$_get](t4)) + dart.notNull(_finalFreeSpace));
              freeSpace = 0.0;
              _finalFreeSpace = 0.0;
            }
          }
        }
      }
    }
    return _finalFreeSpace;
  };
  LayoutGrid__src__Util__layout_creation.initLayoutMinMaxList = function(joinedList, joinedListIndex) {
    let _layoutMinMaxList = JSArrayOfLayoutMinMax().of([]);
    for (let _i = 0; _i < dart.notNull(joinedList[$length]); _i = _i + 1) {
      if (LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.is(joinedList[$_get](_i)) && joinedList[$_get](_i).priority == joinedList[$_get](joinedListIndex).priority) {
        if (LayoutGrid__src__Util__layout_grid_units.LayoutFraction.is(LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.as(joinedList[$_get](_i)).unit)) {
          _layoutMinMaxList[$add](LayoutGrid__src__Util__layout_grid_units.LayoutMinMax._check(joinedList[$_get](_i)));
        }
      }
    }
    return _layoutMinMaxList;
  };
  LayoutGrid__src__Util__layout_creation.manageDeterminedMinMaxAndGetFreeSpace = function(joinedList, joinedListIndex, sizes, space, freeSpace) {
    let _finalFreeSpace = freeSpace;
    let value = LayoutGrid__src__Util__layout_creation.getDeterminedValue(LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.as(joinedList[$_get](joinedListIndex)).unit, space, sizes);
    let minValue = LayoutGrid__src__Util__layout_creation.getDeterminedValue(LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.as(joinedList[$_get](joinedListIndex)).minUnit, space, sizes);
    let maxValue = LayoutGrid__src__Util__layout_creation.getDeterminedValue(LayoutGrid__src__Util__layout_grid_units.LayoutMinMax.as(joinedList[$_get](joinedListIndex)).maxUnit, space, sizes);
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
  };
  LayoutGrid__src__Util__layout_creation.manageDeterminedUnit = function(joinedList, joinedListIndex, sizes, space, freeSpace) {
    let _finalFreeSpace = freeSpace;
    let value = LayoutGrid__src__Util__layout_creation.getDeterminedValue(joinedList[$_get](joinedListIndex), space, sizes);
    sizes[$_set](joinedList[$_get](joinedListIndex).index, value);
    _finalFreeSpace = dart.notNull(_finalFreeSpace) - dart.notNull(value);
    return _finalFreeSpace;
  };
  LayoutGrid__src__Util__layout_creation.getDeterminedValue = function(unit, space, sizes) {
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
  };
  LayoutGrid__src__Util__layout_creation.getSumOfFractions = function(list, priority, axis) {
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
  };
  LayoutGrid__src__Util__layout_creation.calculateFinalList = function(cols, widthSizes, heightSizes) {
    let _finalList = ListOfdouble().new(dart.notNull(widthSizes[$length]) + dart.notNull(heightSizes[$length]));
    let colsLenght = cols[$length];
    let widthPosition = 0.0;
    let heightPosition = 0.0;
    core.print(widthSizes);
    core.print(heightSizes);
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
  };
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
