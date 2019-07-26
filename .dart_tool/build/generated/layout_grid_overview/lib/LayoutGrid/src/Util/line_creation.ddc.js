define(['dart_sdk', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_unit_classes'], function(dart_sdk, layout_grid_unit, layout_grid_unit_classes) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const LayoutGrid__src__Util__layout_grid_unit = layout_grid_unit.LayoutGrid__src__Util__layout_grid_unit;
  const LayoutGrid__src__Util__layout_grid_unit_classes = layout_grid_unit_classes.LayoutGrid__src__Util__layout_grid_unit_classes;
  const LayoutGrid__src__Util__line_creation = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $_set = dartx._set;
  let ListOfdouble = () => (ListOfdouble = dart.constFn(core.List$(core.double)))();
  LayoutGrid__src__Util__line_creation.calculateGridLines = function(_list, space) {
    let _listOfMinMaxValues = ListOfdouble().filled(_list[$length], 0.0);
    let _finalList = ListOfdouble().new(dart.notNull(_list[$length]) + 1);
    let _sumOfFractions = LayoutGrid__src__Util__line_creation.getSumOfFractions(_list);
    let _freeSpace = LayoutGrid__src__Util__line_creation.getFreeSpace(_list, space);
    let _currentPosition = 0.0;
    for (let _i = 0; _i < dart.notNull(_list[$length]); _i = _i + 1) {
      let _maxValue = 0.0;
      let _minValue = 0.0;
      let _layoutMinMax = null;
      if (LayoutGrid__src__Util__layout_grid_unit.LayoutMinMax.is(_list[$_get](_i))) {
        _layoutMinMax = LayoutGrid__src__Util__layout_grid_unit.LayoutMinMax._check(_list[$_get](_i));
        if (LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.is(_layoutMinMax.getMaxUnit()) || LayoutGrid__src__Util__layout_grid_unit.LayoutPercentage.is(_layoutMinMax.getMaxUnit())) {
          _maxValue = LayoutGrid__src__Util__line_creation.getValueFromLayoutUnit(_layoutMinMax.getMaxUnit(), space, _freeSpace, _sumOfFractions);
          _minValue = LayoutGrid__src__Util__line_creation.getValueFromLayoutUnit(_layoutMinMax.getMinUnit(), space, _freeSpace, _sumOfFractions);
          if (dart.notNull(_maxValue) < dart.notNull(_freeSpace)) {
            _listOfMinMaxValues[$_set](_i, _maxValue);
            _freeSpace = dart.notNull(_freeSpace) - dart.notNull(_maxValue);
          } else {
            if (dart.notNull(_freeSpace) > dart.notNull(_minValue)) {
              _listOfMinMaxValues[$_set](_i, _freeSpace);
              _freeSpace = 0.0;
            } else if (dart.notNull(_freeSpace) < dart.notNull(_minValue)) {
              _listOfMinMaxValues[$_set](_i, _minValue);
              _freeSpace = 0.0;
            }
          }
        }
      }
    }
    for (let _i = 0; _i < dart.notNull(_list[$length]); _i = _i + 1) {
      let _maxValue = 0.0;
      let _minValue = 0.0;
      let _layoutFraction = null;
      let _layoutMinMax = null;
      if (LayoutGrid__src__Util__layout_grid_unit.LayoutMinMax.is(_list[$_get](_i))) {
        _layoutMinMax = LayoutGrid__src__Util__layout_grid_unit.LayoutMinMax._check(_list[$_get](_i));
        if (LayoutGrid__src__Util__layout_grid_unit.LayoutFraction.is(_layoutMinMax.getMaxUnit())) {
          _maxValue = LayoutGrid__src__Util__line_creation.getValueFromLayoutUnit(_layoutMinMax.getMaxUnit(), space, _freeSpace, _sumOfFractions);
          _minValue = LayoutGrid__src__Util__line_creation.getValueFromLayoutUnit(_layoutMinMax.getMinUnit(), space, _freeSpace, _sumOfFractions);
          if (dart.notNull(_minValue) > dart.notNull(_maxValue)) {
            _layoutFraction = LayoutGrid__src__Util__layout_grid_unit.LayoutFraction._check(_layoutMinMax.getMaxUnit());
            _sumOfFractions = dart.notNull(_sumOfFractions) - dart.notNull(_layoutFraction.fraction);
            _freeSpace = dart.notNull(_freeSpace) - dart.notNull(_minValue);
            _listOfMinMaxValues[$_set](_i, _minValue);
          } else {
            _listOfMinMaxValues[$_set](_i, _maxValue);
          }
        }
      }
    }
    for (let _i = 0; _i < dart.notNull(_list[$length]); _i = _i + 1) {
      let _value = 0.0;
      if (LayoutGrid__src__Util__layout_grid_unit_classes.SingleUnit.is(_list[$_get](_i))) {
        _value = LayoutGrid__src__Util__line_creation.getValueFromLayoutUnit(_list[$_get](_i), space, _freeSpace, _sumOfFractions);
        _finalList[$_set](_i + 1, dart.notNull(_value) + _currentPosition);
        _currentPosition = _currentPosition + dart.notNull(_value);
      } else {
        _value = _listOfMinMaxValues[$_get](_i);
        _finalList[$_set](_i + 1, dart.notNull(_value) + _currentPosition);
        _currentPosition = _currentPosition + dart.notNull(_value);
      }
    }
    _finalList[$_set](0, 0.0);
    return _finalList;
  };
  LayoutGrid__src__Util__line_creation.calculateGridLinesWithDependetUnit = function(_list, space, _listOfDoubles) {
    let _listOfMinMaxValues = ListOfdouble().filled(_list[$length], 0.0);
    let _finalList = ListOfdouble().new(dart.notNull(_list[$length]) + 1);
    let _sumOfFractions = LayoutGrid__src__Util__line_creation.getSumOfFractions(_list);
    let _freeSpace = LayoutGrid__src__Util__line_creation.getFreeSpaceWithDependentUnit(_list, space, _listOfDoubles);
    let _currentPosition = 0.0;
    for (let _i = 0; _i < dart.notNull(_list[$length]); _i = _i + 1) {
      let _maxValue = 0.0;
      let _minValue = 0.0;
      let _layoutMinMax = null;
      if (LayoutGrid__src__Util__layout_grid_unit.LayoutMinMax.is(_list[$_get](_i))) {
        _layoutMinMax = LayoutGrid__src__Util__layout_grid_unit.LayoutMinMax._check(_list[$_get](_i));
        if (LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.is(_layoutMinMax.getMaxUnit()) || LayoutGrid__src__Util__layout_grid_unit.LayoutPercentage.is(_layoutMinMax.getMaxUnit())) {
          _maxValue = LayoutGrid__src__Util__line_creation.getValueFromLayoutUnit(_layoutMinMax.getMaxUnit(), space, _freeSpace, _sumOfFractions);
          _minValue = LayoutGrid__src__Util__line_creation.getValueFromLayoutUnit(_layoutMinMax.getMinUnit(), space, _freeSpace, _sumOfFractions);
          if (dart.notNull(_maxValue) < dart.notNull(_freeSpace)) {
            _listOfMinMaxValues[$_set](_i, _maxValue);
            _freeSpace = dart.notNull(_freeSpace) - dart.notNull(_maxValue);
          } else {
            if (dart.notNull(_freeSpace) > dart.notNull(_minValue)) {
              _listOfMinMaxValues[$_set](_i, _freeSpace);
              _freeSpace = 0.0;
            } else if (dart.notNull(_freeSpace) < dart.notNull(_minValue)) {
              _listOfMinMaxValues[$_set](_i, _minValue);
              _freeSpace = 0.0;
            }
          }
        }
      }
    }
    for (let _i = 0; _i < dart.notNull(_list[$length]); _i = _i + 1) {
      let _maxValue = 0.0;
      let _minValue = 0.0;
      let _layoutFraction = null;
      let _layoutMinMax = null;
      if (LayoutGrid__src__Util__layout_grid_unit.LayoutMinMax.is(_list[$_get](_i))) {
        _layoutMinMax = LayoutGrid__src__Util__layout_grid_unit.LayoutMinMax._check(_list[$_get](_i));
        if (LayoutGrid__src__Util__layout_grid_unit.LayoutFraction.is(_layoutMinMax.getMaxUnit())) {
          _maxValue = LayoutGrid__src__Util__line_creation.getValueFromLayoutUnit(_layoutMinMax.getMaxUnit(), space, _freeSpace, _sumOfFractions);
          _minValue = LayoutGrid__src__Util__line_creation.getValueFromLayoutUnit(_layoutMinMax.getMinUnit(), space, _freeSpace, _sumOfFractions);
          if (dart.notNull(_minValue) > dart.notNull(_maxValue)) {
            _layoutFraction = LayoutGrid__src__Util__layout_grid_unit.LayoutFraction._check(_layoutMinMax.getMaxUnit());
            _sumOfFractions = dart.notNull(_sumOfFractions) - dart.notNull(_layoutFraction.fraction);
            _freeSpace = dart.notNull(_freeSpace) - dart.notNull(_minValue);
            _listOfMinMaxValues[$_set](_i, _minValue);
          } else {
            _listOfMinMaxValues[$_set](_i, _maxValue);
          }
        }
      }
    }
    for (let _i = 0; _i < dart.notNull(_list[$length]); _i = _i + 1) {
      let _value = 0.0;
      if (LayoutGrid__src__Util__layout_grid_unit_classes.SingleUnit.is(_list[$_get](_i))) {
        _value = LayoutGrid__src__Util__line_creation.getValueFromLayoutUnit(_list[$_get](_i), space, _freeSpace, _sumOfFractions);
        _finalList[$_set](_i + 1, dart.notNull(_value) + _currentPosition);
        _currentPosition = _currentPosition + dart.notNull(_value);
      } else if (LayoutGrid__src__Util__layout_grid_unit.LayoutDependent.is(_list[$_get](_i))) {
        _value = LayoutGrid__src__Util__line_creation.getDependentLineValue(LayoutGrid__src__Util__layout_grid_unit.LayoutDependent._check(_list[$_get](_i)), _listOfDoubles);
        _finalList[$_set](_i + 1, dart.notNull(_value) + _currentPosition);
        _currentPosition = _currentPosition + dart.notNull(_value);
      } else {
        _value = _listOfMinMaxValues[$_get](_i);
        _finalList[$_set](_i + 1, dart.notNull(_value) + _currentPosition);
        _currentPosition = _currentPosition + dart.notNull(_value);
      }
    }
    _finalList[$_set](0, 0.0);
    return _finalList;
  };
  LayoutGrid__src__Util__line_creation.getValueFromLayoutUnit = function(layoutUnit, space, freeSpace, sumOfFractions) {
    let _value = 0.0;
    if (LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.is(layoutUnit)) {
      _value = layoutUnit.pixels;
    } else if (LayoutGrid__src__Util__layout_grid_unit.LayoutPercentage.is(layoutUnit)) {
      _value = layoutUnit.getValue(space);
    } else if (LayoutGrid__src__Util__layout_grid_unit.LayoutFraction.is(layoutUnit)) {
      _value = layoutUnit.getValue(sumOfFractions, freeSpace);
    }
    return _value;
  };
  LayoutGrid__src__Util__line_creation.getFreeSpace = function(listToGetSpaceFrom, space) {
    let _freeSpace = space;
    for (let _i = 0; _i < dart.notNull(listToGetSpaceFrom[$length]); _i = _i + 1) {
      if (LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.is(listToGetSpaceFrom[$_get](_i)) || LayoutGrid__src__Util__layout_grid_unit.LayoutPercentage.is(listToGetSpaceFrom[$_get](_i))) {
        _freeSpace = dart.notNull(_freeSpace) - dart.notNull(LayoutGrid__src__Util__line_creation.getValueFromLayoutUnit(listToGetSpaceFrom[$_get](_i), space, 0.0, 0));
      }
    }
    return _freeSpace;
  };
  LayoutGrid__src__Util__line_creation.getFreeSpaceWithDependentUnit = function(listToGetSpaceFrom, space, _listOfDoubles) {
    let _freeSpace = space;
    for (let _i = 0; _i < dart.notNull(listToGetSpaceFrom[$length]); _i = _i + 1) {
      if (LayoutGrid__src__Util__layout_grid_unit.LayoutPixel.is(listToGetSpaceFrom[$_get](_i)) || LayoutGrid__src__Util__layout_grid_unit.LayoutPercentage.is(listToGetSpaceFrom[$_get](_i))) {
        _freeSpace = dart.notNull(_freeSpace) - dart.notNull(LayoutGrid__src__Util__line_creation.getValueFromLayoutUnit(listToGetSpaceFrom[$_get](_i), space, 0.0, 0));
      } else if (LayoutGrid__src__Util__layout_grid_unit.LayoutDependent.is(listToGetSpaceFrom[$_get](_i))) {
        _freeSpace = dart.notNull(_freeSpace) - dart.notNull(LayoutGrid__src__Util__line_creation.getDependentLineValue(LayoutGrid__src__Util__layout_grid_unit.LayoutDependent._check(listToGetSpaceFrom[$_get](_i)), _listOfDoubles));
      }
    }
    return _freeSpace;
  };
  LayoutGrid__src__Util__line_creation.getDependentLineValue = function(_layoutDependent, _listOfDoubles) {
    let _value = 0.0;
    _value = dart.notNull(_listOfDoubles[$_get](_layoutDependent.line)) * dart.notNull(_layoutDependent.multiplicator);
    return _value;
  };
  LayoutGrid__src__Util__line_creation.getSumOfFractions = function(listToSumFunctionOf) {
    let _layoutFraction = null;
    let _layoutMinMax = null;
    let _sumOfFractions = 0;
    for (let _i = 0; _i < dart.notNull(listToSumFunctionOf[$length]); _i = _i + 1) {
      if (LayoutGrid__src__Util__layout_grid_unit.LayoutFraction.is(listToSumFunctionOf[$_get](_i))) {
        _layoutFraction = LayoutGrid__src__Util__layout_grid_unit.LayoutFraction._check(listToSumFunctionOf[$_get](_i));
        _sumOfFractions = _sumOfFractions + dart.notNull(_layoutFraction.fraction);
      } else if (LayoutGrid__src__Util__layout_grid_unit.LayoutMinMax.is(listToSumFunctionOf[$_get](_i))) {
        _layoutMinMax = LayoutGrid__src__Util__layout_grid_unit.LayoutMinMax._check(listToSumFunctionOf[$_get](_i));
        if (LayoutGrid__src__Util__layout_grid_unit.LayoutFraction.is(_layoutMinMax.getMaxUnit())) {
          _layoutFraction = LayoutGrid__src__Util__layout_grid_unit.LayoutFraction._check(_layoutMinMax.getMaxUnit());
          _sumOfFractions = _sumOfFractions + dart.notNull(_layoutFraction.fraction);
        }
      }
    }
    return _sumOfFractions;
  };
  dart.trackLibraries("packages/layout_grid_overview/LayoutGrid/src/Util/line_creation", {
    "package:layout_grid_overview/LayoutGrid/src/Util/line_creation.dart": LayoutGrid__src__Util__line_creation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/Util/line_creation.dart"],"names":[],"mappings":"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","file":"line_creation.ddc.js"}');
  // Exports:
  return {
    LayoutGrid__src__Util__line_creation: LayoutGrid__src__Util__line_creation
  };
});

//# sourceMappingURL=line_creation.ddc.js.map
