define(['dart_sdk', 'packages/flutter_web/animation', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_private_units', 'packages/layout_grid_overview/LayoutGrid/src/layout_grid_couple', 'packages/layout_grid_overview/LayoutGrid/src/Util/inherited_layout_model', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_creation', 'packages/flutter_web_ui/ui', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_child'], function(dart_sdk, animation, layout_grid_private_units, layout_grid_couple, inherited_layout_model, layout_creation, ui, layout_grid_child) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__stack = animation.src__rendering__stack;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const LayoutGrid__src__Util__layout_grid_private_units = layout_grid_private_units.LayoutGrid__src__Util__layout_grid_private_units;
  const LayoutGrid__src__layout_grid_couple = layout_grid_couple.LayoutGrid__src__layout_grid_couple;
  const LayoutGrid__src__Util__inherited_layout_model = inherited_layout_model.LayoutGrid__src__Util__inherited_layout_model;
  const LayoutGrid__src__Util__layout_creation = layout_creation.LayoutGrid__src__Util__layout_creation;
  const ui$ = ui.ui;
  const LayoutGrid__src__Util__layout_grid_child = layout_grid_child.LayoutGrid__src__Util__layout_grid_child;
  const LayoutGrid__src__layout_grid = Object.create(dart.library);
  const $length = dartx.length;
  const $sublist = dartx.sublist;
  const $last = dartx.last;
  const $_get = dartx._get;
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(src__widgets__framework.Widget)))();
  let intToLayoutGridChild = () => (intToLayoutGridChild = dart.constFn(dart.fnType(LayoutGrid__src__Util__layout_grid_child.LayoutGridChild, [core.int])))();
  const _calculatedCouples = dart.privateName(LayoutGrid__src__layout_grid, "_calculatedCouples");
  const _calculatedLayout = dart.privateName(LayoutGrid__src__layout_grid, "_calculatedLayout");
  LayoutGrid__src__layout_grid.LayoutGrid = class LayoutGrid extends src__widgets__framework.StatefulWidget {
    get columns() {
      return this[columns$];
    }
    set columns(value) {
      super.columns = value;
    }
    get rows() {
      return this[rows$];
    }
    set rows(value) {
      super.rows = value;
    }
    get couples() {
      return this[couples$];
    }
    set couples(value) {
      super.couples = value;
    }
    get areas() {
      return this[areas$];
    }
    set areas(value) {
      super.areas = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get layoutModel() {
      return this[layoutModel$];
    }
    set layoutModel(value) {
      super.layoutModel = value;
    }
    createState() {
      return new LayoutGrid__src__layout_grid._LayoutGridState.new();
    }
  };
  (LayoutGrid__src__layout_grid.LayoutGrid.new = function(opts) {
    let columns = opts && 'columns' in opts ? opts.columns : null;
    let rows = opts && 'rows' in opts ? opts.rows : null;
    let couples = opts && 'couples' in opts ? opts.couples : null;
    let areas = opts && 'areas' in opts ? opts.areas : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let layoutModel = opts && 'layoutModel' in opts ? opts.layoutModel : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_calculatedCouples] = null;
    this[_calculatedLayout] = null;
    this[columns$] = columns;
    this[rows$] = rows;
    this[couples$] = couples;
    this[areas$] = areas;
    this[width$] = width;
    this[height$] = height;
    this[layoutModel$] = layoutModel;
    LayoutGrid__src__layout_grid.LayoutGrid.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = LayoutGrid__src__layout_grid.LayoutGrid.prototype;
  dart.addTypeTests(LayoutGrid__src__layout_grid.LayoutGrid);
  const columns$ = Symbol("LayoutGrid.columns");
  const rows$ = Symbol("LayoutGrid.rows");
  const couples$ = Symbol("LayoutGrid.couples");
  const areas$ = Symbol("LayoutGrid.areas");
  const width$ = Symbol("LayoutGrid.width");
  const height$ = Symbol("LayoutGrid.height");
  const layoutModel$ = Symbol("LayoutGrid.layoutModel");
  dart.setMethodSignature(LayoutGrid__src__layout_grid.LayoutGrid, () => ({
    __proto__: dart.getMethods(LayoutGrid__src__layout_grid.LayoutGrid.__proto__),
    createState: dart.fnType(LayoutGrid__src__layout_grid._LayoutGridState, [])
  }));
  dart.setLibraryUri(LayoutGrid__src__layout_grid.LayoutGrid, "package:layout_grid_overview/LayoutGrid/src/layout_grid.dart");
  dart.setFieldSignature(LayoutGrid__src__layout_grid.LayoutGrid, () => ({
    __proto__: dart.getFields(LayoutGrid__src__layout_grid.LayoutGrid.__proto__),
    columns: dart.finalFieldType(core.List$(LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit)),
    rows: dart.finalFieldType(core.List$(LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit)),
    couples: dart.finalFieldType(core.List$(LayoutGrid__src__layout_grid_couple.LayoutGridCouple)),
    areas: dart.finalFieldType(core.List$(core.List$(core.String))),
    width: dart.finalFieldType(core.double),
    height: dart.finalFieldType(core.double),
    layoutModel: dart.finalFieldType(LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel),
    [_calculatedCouples]: dart.fieldType(core.List$(LayoutGrid__src__layout_grid_couple.LayoutGridCouple)),
    [_calculatedLayout]: dart.fieldType(core.List$(core.double))
  }));
  const _couples = dart.privateName(LayoutGrid__src__layout_grid, "_couples");
  const _cols = dart.privateName(LayoutGrid__src__layout_grid, "_cols");
  const _rows = dart.privateName(LayoutGrid__src__layout_grid, "_rows");
  const _top = dart.privateName(LayoutGrid__src__layout_grid, "_top");
  const _left = dart.privateName(LayoutGrid__src__layout_grid, "_left");
  const _width = dart.privateName(LayoutGrid__src__layout_grid, "_width");
  const _height = dart.privateName(LayoutGrid__src__layout_grid, "_height");
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  LayoutGrid__src__layout_grid._LayoutGridState = class _LayoutGridState extends src__widgets__framework.State$(LayoutGrid__src__layout_grid.LayoutGrid) {
    initState() {
      super.initState();
      if (this.widget[_calculatedCouples] == null) this.widget[_calculatedCouples] = LayoutGrid__src__layout_grid_couple.LayoutGridCouple.getPositionedGridCoupleList(this.widget.areas, this.widget.couples);
      this[_couples] = this.widget[_calculatedCouples];
    }
    build(context) {
      this.widget[_calculatedLayout] = LayoutGrid__src__Util__layout_creation.Layout.createLayout(this.widget.columns, this.widget.rows, this.widget.width != null ? this.widget.width : 0.0, this.widget.height != null ? this.widget.height : 0.0);
      this[_cols] = this.widget[_calculatedLayout][$sublist](0, this.widget.columns[$length]);
      this[_rows] = this.widget[_calculatedLayout][$sublist](this.widget.columns[$length]);
      return new src__widgets__container.Container.new({height: this.widget.height != null ? this.widget.height : this.widget[_calculatedLayout][$last], width: this.widget.width != null ? this.widget.width : this.widget[_calculatedLayout][$_get](dart.notNull(this.widget.columns[$length]) - 1), child: new src__widgets__basic.Stack.new({fit: src__rendering__stack.StackFit.expand, children: ListOfWidget().generate(this[_couples][$length], dart.fn(index => {
            this.setParameters(LayoutGrid__src__Util__layout_creation.Layout.getWidgetParameters(index, this[_couples], this[_cols], this[_rows]), this[_couples], index);
            if (this[_couples][$_get](index).modelKey != null) {
              this.widget.layoutModel.updateModel(this[_couples][$_get](index).modelKey, new ui$.Size.new(this[_width], this[_height]), new ui$.Offset.new(this[_left], this[_top]));
            }
            return new LayoutGrid__src__Util__layout_grid_child.LayoutGridChild.new({key: this[_couples][$_get](index).key != null ? this[_couples][$_get](index).key : new src__widgets__framework.UniqueKey.new(), top: this[_top], left: this[_left], height: this[_height], width: this[_width], widget: this[_couples][$_get](index).widget, alignment: this[_couples][$_get](index).alignment, $creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 18, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart", parameterLocations: const$6 || (const$6 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 13, name: "key"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 13, name: "top"}))), const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 13, name: "left"}))), const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 13, name: "height"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 13, name: "width"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 82, column: 13, name: "widget"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 13, name: "alignment"})))], src__widgets__widget_inspector._Location))})))});
          }, intToLayoutGridChild())), $creationLocationd_0dea112b090073317d4: const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart", parameterLocations: const$10 || (const$10 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 67, column: 9, name: "fit"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart", parameterLocations: const$15 || (const$15 = dart.constList([const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 7, name: "height"}))), const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 7, name: "width"}))), const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    setParameters(map, list, index) {
      if (list[$_get](index).position != null) {
        this[_top] = dart.notNull(list[$_get](index).position.dy) + dart.notNull(list[$_get](index).offset.dy);
        this[_left] = dart.notNull(list[$_get](index).position.dx) + dart.notNull(list[$_get](index).offset.dx);
      } else {
        this[_top] = dart.notNull(map[$_get]("top")) + dart.notNull(list[$_get](index).offset.dy);
        this[_left] = dart.notNull(map[$_get]("left")) + dart.notNull(list[$_get](index).offset.dx);
      }
      if (list[$_get](index).size != null) {
        this[_height] = list[$_get](index).size.height;
        this[_width] = list[$_get](index).size.width;
      } else {
        this[_height] = map[$_get]("height");
        this[_width] = map[$_get]("width");
      }
    }
  };
  (LayoutGrid__src__layout_grid._LayoutGridState.new = function() {
    this[_couples] = null;
    this[_cols] = null;
    this[_rows] = null;
    this[_top] = null;
    this[_left] = null;
    this[_width] = null;
    this[_height] = null;
    LayoutGrid__src__layout_grid._LayoutGridState.__proto__.new.call(this);
    ;
  }).prototype = LayoutGrid__src__layout_grid._LayoutGridState.prototype;
  dart.addTypeTests(LayoutGrid__src__layout_grid._LayoutGridState);
  dart.setMethodSignature(LayoutGrid__src__layout_grid._LayoutGridState, () => ({
    __proto__: dart.getMethods(LayoutGrid__src__layout_grid._LayoutGridState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    setParameters: dart.fnType(dart.void, [core.Map$(core.String, core.double), core.List$(LayoutGrid__src__layout_grid_couple.LayoutGridCouple), core.int])
  }));
  dart.setLibraryUri(LayoutGrid__src__layout_grid._LayoutGridState, "package:layout_grid_overview/LayoutGrid/src/layout_grid.dart");
  dart.setFieldSignature(LayoutGrid__src__layout_grid._LayoutGridState, () => ({
    __proto__: dart.getFields(LayoutGrid__src__layout_grid._LayoutGridState.__proto__),
    [_couples]: dart.fieldType(core.List$(LayoutGrid__src__layout_grid_couple.LayoutGridCouple)),
    [_cols]: dart.fieldType(core.List$(core.double)),
    [_rows]: dart.fieldType(core.List$(core.double)),
    [_top]: dart.fieldType(core.double),
    [_left]: dart.fieldType(core.double),
    [_width]: dart.fieldType(core.double),
    [_height]: dart.fieldType(core.double)
  }));
  dart.trackLibraries("packages/layout_grid_overview/LayoutGrid/src/layout_grid", {
    "package:layout_grid_overview/LayoutGrid/src/layout_grid.dart": LayoutGrid__src__layout_grid
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/LayoutGrid/src/layout_grid.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;IAqByB;;;;;;IAAS;;;;;;IAEH;;;;;;IAEJ;;;;;;IAEZ;;;;;;IAAO;;;;;;IAEO;;;;;;;AAMO;IAAkB;;;QAxBnC;QACA;QACA;QACV;QACA;QACA;QACA;QACD;;IAaiB;IAEV;IAtBI;IACA;IACA;IACV;IACA;IACA;IACA;AAEH,2EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA2BX;AAEN,UAAI,AAAO,AAAmB,mCAAG,MAAM,AAAO,kCAAsC,iFAA4B,AAAO,mBAAO,AAAO;MACrI,iBAAW,AAAO;IACpB;UAG0B;MAExB,AAAO,iCAA2B,2DAAa,AAAO,qBAAS,AAAO,kBAAO,AAAO,AAAe,qBAAN,OAAQ,AAAO,oBAAQ,KAAM,AAAO,AAAgB,sBAAN,OAAQ,AAAO,qBAAS;MAEnK,cAAQ,AAAO,AAAkB,yCAAQ,GAAE,AAAO,AAAQ;MAC1D,cAAQ,AAAO,AAAkB,yCAAQ,AAAO,AAAQ;AAExD,YAAO,oDAEI,AAAO,AAAgB,sBAAN,OAAQ,AAAO,qBAAS,AAAO,AAAkB,8CACnE,AAAO,AAAe,qBAAN,OAAQ,AAAO,oBAAQ,AAAO,AAAiB,sCAAuB,aAAtB,AAAO,AAAQ,gCAAS,WAEzF,wCACS,iDACN,wBAAwB,AAAS,yBAAQ,QAAK;YAEpD,mBAAqB,kEAAoB,KAAK,EAAE,gBAAU,aAAO,cAAQ,gBAAU,KAAK;AAExF,gBAAI,AAAQ,AAAQ,sBAAP,KAAK,cAAc;cAC9B,AAAO,AAAY,oCAAY,AAAQ,AAAQ,sBAAP,KAAK,YAAY,iBAAK,cAAQ,gBAAU,mBAAO,aAAM;;AAG/F,kBAAO,wEACC,AAAQ,AAAQ,AAAa,sBAApB,KAAK,SAAS,OAAQ,AAAQ,AAAQ,sBAAP,KAAK,QAAQ,kDACtD,kBACC,qBACE,sBACD,sBACC,AAAQ,AAAQ,sBAAP,KAAK,qBACX,AAAQ,AAAQ,sBAAP,KAAK;;IAKnC;kBAEuC,KAA4B,MAAU;AAE3E,UAAI,AAAI,AAAQ,IAAR,QAAC,KAAK,cAAc;QAC1B,aAA+B,aAAxB,AAAI,AAAQ,AAAS,IAAjB,QAAC,KAAK,8BAAgB,AAAI,AAAQ,AAAO,IAAf,QAAC,KAAK;QAC3C,cAAgC,aAAxB,AAAI,AAAQ,AAAS,IAAjB,QAAC,KAAK,8BAAgB,AAAI,AAAQ,AAAO,IAAf,QAAC,KAAK;;QAE5C,aAAkB,aAAX,AAAG,GAAA,QAAC,uBAAS,AAAI,AAAQ,AAAO,IAAf,QAAC,KAAK;QAC9B,cAAoB,aAAZ,AAAG,GAAA,QAAC,wBAAU,AAAI,AAAQ,AAAO,IAAf,QAAC,KAAK;;AAGlC,UAAI,AAAI,AAAQ,IAAR,QAAC,KAAK,UAAU;QACtB,gBAAU,AAAI,AAAQ,AAAK,IAAb,QAAC,KAAK;QACpB,eAAS,AAAI,AAAQ,AAAK,IAAb,QAAC,KAAK;;QAEnB,gBAAU,AAAG,GAAA,QAAC;QACd,eAAS,AAAG,GAAA,QAAC;;IAEjB;;;IAlEuB;IACV;IAAO;IACb;IAAM;IAAO;IAAQ;;;EAiE9B","file":"layout_grid.ddc.js"}');
  // Exports:
  return {
    LayoutGrid__src__layout_grid: LayoutGrid__src__layout_grid
  };
});

//# sourceMappingURL=layout_grid.ddc.js.map
