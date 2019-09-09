define(['dart_sdk', 'packages/flutter_web/animation', 'packages/layout_grid_overview/LayoutGrid/src/layout_grid', 'packages/layout_grid_overview/LayoutGrid/src/Util/inherited_layout_model', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_units', 'packages/layout_grid_overview/LayoutGrid/src/Util/layout_grid_private_units', 'packages/layout_grid_overview/LayoutGrid/src/layout_grid_couple', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui'], function(dart_sdk, animation, layout_grid, inherited_layout_model, layout_grid_units, layout_grid_private_units, layout_grid_couple, material, animation$, ui) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__layout_builder = animation.src__widgets__layout_builder;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__single_child_scroll_view = animation.src__widgets__single_child_scroll_view;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__rendering__box = animation.src__rendering__box;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__text = animation.src__widgets__text;
  const LayoutGrid__src__layout_grid = layout_grid.LayoutGrid__src__layout_grid;
  const LayoutGrid__src__Util__inherited_layout_model = inherited_layout_model.LayoutGrid__src__Util__inherited_layout_model;
  const LayoutGrid__src__Util__layout_grid_units = layout_grid_units.LayoutGrid__src__Util__layout_grid_units;
  const LayoutGrid__src__Util__layout_grid_private_units = layout_grid_private_units.LayoutGrid__src__Util__layout_grid_private_units;
  const LayoutGrid__src__layout_grid_couple = layout_grid_couple.LayoutGrid__src__layout_grid_couple;
  const src__material__colors = material.src__material__colors;
  const src__painting__alignment = animation$.src__painting__alignment;
  const src__painting__text_style = animation$.src__painting__text_style;
  const ui$ = ui.ui;
  const mainLayout = Object.create(dart.library);
  const $toString = dartx.toString;
  let JSArrayOfLayoutUnit = () => (JSArrayOfLayoutUnit = dart.constFn(_interceptors.JSArray$(LayoutGrid__src__Util__layout_grid_private_units.LayoutUnit)))();
  let JSArrayOfLayoutGridCouple = () => (JSArrayOfLayoutGridCouple = dart.constFn(_interceptors.JSArray$(LayoutGrid__src__layout_grid_couple.LayoutGridCouple)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let BuildContextAndBoxConstraintsToStack = () => (BuildContextAndBoxConstraintsToStack = dart.constFn(dart.fnType(src__widgets__basic.Stack, [src__widgets__framework.BuildContext, src__rendering__box.BoxConstraints])))();
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
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  let const$32;
  mainLayout.MainLayout = class MainLayout extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => {
          core.print("width: " + dart.toString(constraints.maxWidth));
          return new src__widgets__basic.Stack.new({children: JSArrayOfWidget().of([new src__widgets__single_child_scroll_view.SingleChildScrollView.new({child: new LayoutGrid__src__layout_grid.LayoutGrid.new({maxWidth: constraints.maxWidth, referenceHeight: constraints.maxHeight, layoutModel: LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel.of(context), columns: JSArrayOfLayoutUnit().of([new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: 0.0}), new LayoutGrid__src__Util__layout_grid_units.LayoutFraction.new({fraction: 1, priority: 1}), new LayoutGrid__src__Util__layout_grid_units.LayoutFraction.new({fraction: 5, priority: 1}), new LayoutGrid__src__Util__layout_grid_units.LayoutFraction.new({fraction: 3, priority: 1}), new LayoutGrid__src__Util__layout_grid_units.LayoutFraction.new({fraction: 1, priority: 1})]), rows: JSArrayOfLayoutUnit().of([new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: 0.0}), new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: constraints.maxHeight}), new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: 72.0}), new LayoutGrid__src__Util__layout_grid_units.LayoutPercentage.new({percentage: 50.0}), new LayoutGrid__src__Util__layout_grid_units.LayoutPercentage.new({percentage: 25.0}), new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: 148.0}), new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: 72.0}), new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: 72.0}), new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: constraints.maxHeight}), new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: 72.0}), new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: 72.0}), new LayoutGrid__src__Util__layout_grid_units.LayoutPercentage.new({percentage: 25.0}), new LayoutGrid__src__Util__layout_grid_units.LayoutPercentage.new({percentage: 15.0})]), couples: JSArrayOfLayoutGridCouple().of([new LayoutGrid__src__layout_grid_couple.LayoutGridCouple.new({widget: new mainLayout.Section.new({text: "Main", color: src__material__colors.Colors.redAccent, modelKey: "Main", $creationLocationd_0dea112b090073317d4: const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 29, file: "org-dartlang-app:///packages/layout_grid_overview/mainLayout.dart", parameterLocations: const$2 || (const$2 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 37, name: "text"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 50, name: "color"}))), const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 74, name: "modelKey"})))], src__widgets__widget_inspector._Location))})))}), col0: 0, col1: 4, row0: 0, row1: 1, modelKey: "Main"}), new LayoutGrid__src__layout_grid_couple.LayoutGridCouple.new({widget: new mainLayout.Section.new({text: "Description", color: src__material__colors.Colors.tealAccent, modelKey: "Description", $creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 29, file: "org-dartlang-app:///packages/layout_grid_overview/mainLayout.dart", parameterLocations: const$7 || (const$7 = dart.constList([const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 37, name: "text"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 57, name: "color"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 82, name: "modelKey"})))], src__widgets__widget_inspector._Location))})))}), col0: 1, col1: 3, row0: 2, row1: 3, modelKey: "Description"}), new LayoutGrid__src__layout_grid_couple.LayoutGridCouple.new({widget: new mainLayout.Section.new({text: "Contacts", color: src__material__colors.Colors.teal, modelKey: "Contacts", $creationLocationd_0dea112b090073317d4: const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 67, column: 29, file: "org-dartlang-app:///packages/layout_grid_overview/mainLayout.dart", parameterLocations: const$12 || (const$12 = dart.constList([const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 67, column: 37, name: "text"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 67, column: 54, name: "color"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 67, column: 73, name: "modelKey"})))], src__widgets__widget_inspector._Location))})))}), col0: 1, col1: 3, row0: 3, row1: 4, modelKey: "Contacts"}), new LayoutGrid__src__layout_grid_couple.LayoutGridCouple.new({widget: new mainLayout.LeftGrid.new({$creationLocationd_0dea112b090073317d4: const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 29, file: "org-dartlang-app:///packages/layout_grid_overview/mainLayout.dart", parameterLocations: const$14 || (const$14 = dart.constList([], src__widgets__widget_inspector._Location))})))}), col0: 1, col1: 2, row0: 7, row1: 8, modelKey: "LeftGrid"})]), $creationLocationd_0dea112b090073317d4: const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 22, file: "org-dartlang-app:///packages/layout_grid_overview/mainLayout.dart", parameterLocations: const$22 || (const$22 = dart.constList([const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 17, name: "maxWidth"}))), const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 17, name: "referenceHeight"}))), const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 17, name: "layoutModel"}))), const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 17, name: "columns"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 17, name: "rows"}))), const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 17, name: "couples"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 13, file: "org-dartlang-app:///packages/layout_grid_overview/mainLayout.dart", parameterLocations: const$25 || (const$25 = dart.constList([const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 16, file: "org-dartlang-app:///packages/layout_grid_overview/mainLayout.dart", parameterLocations: const$28 || (const$28 = dart.constList([const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 11, name: "children"})))], src__widgets__widget_inspector._Location))})))});
        }, BuildContextAndBoxConstraintsToStack()), $creationLocationd_0dea112b090073317d4: const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/mainLayout.dart", parameterLocations: const$31 || (const$31 = dart.constList([const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 7, name: "builder"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (mainLayout.MainLayout.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    mainLayout.MainLayout.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = mainLayout.MainLayout.prototype;
  dart.addTypeTests(mainLayout.MainLayout);
  dart.setMethodSignature(mainLayout.MainLayout, () => ({
    __proto__: dart.getMethods(mainLayout.MainLayout.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(mainLayout.MainLayout, "package:layout_grid_overview/mainLayout.dart");
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  let const$49;
  let const$50;
  let const$51;
  let const$52;
  let const$53;
  let const$54;
  let const$55;
  let const$56;
  let const$57;
  let const$58;
  let const$59;
  let const$60;
  let const$61;
  let const$62;
  let const$63;
  mainLayout.LeftGrid = class LeftGrid extends src__widgets__framework.StatelessWidget {
    get model() {
      return this[model];
    }
    set model(value) {
      this[model] = value;
    }
    get modelKey() {
      return this[modelKey];
    }
    set modelKey(value) {
      super.modelKey = value;
    }
    build(context) {
      this.model = LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel.of(context);
      return new src__widgets__container.Container.new({child: new LayoutGrid__src__layout_grid.LayoutGrid.new({maxWidth: this.model.getWidth(this.modelKey), maxHeight: this.model.getHeight(this.modelKey), layoutModel: LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel.of(context), columns: JSArrayOfLayoutUnit().of([new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: 0.0, priority: 1}), new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: this.model.getWidth(this.modelKey), priority: 1})]), rows: JSArrayOfLayoutUnit().of([new LayoutGrid__src__Util__layout_grid_units.LayoutPixel.new({pixels: 0.0}), new LayoutGrid__src__Util__layout_grid_units.LayoutDependent.new({line: 1, multiplicator: 1.0}), new LayoutGrid__src__Util__layout_grid_units.LayoutDependent.new({line: 1, multiplicator: 0.625}), new LayoutGrid__src__Util__layout_grid_units.LayoutDependent.new({line: 1, multiplicator: 0.625}), new LayoutGrid__src__Util__layout_grid_units.LayoutDependent.new({line: 1, multiplicator: 0.625})]), couples: JSArrayOfLayoutGridCouple().of([new LayoutGrid__src__layout_grid_couple.LayoutGridCouple.new({widget: new mainLayout.Section.new({text: "1", color: src__material__colors.Colors.blueGrey, modelKey: "1", $creationLocationd_0dea112b090073317d4: const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 125, column: 21, file: "org-dartlang-app:///packages/layout_grid_overview/mainLayout.dart", parameterLocations: const$36 || (const$36 = dart.constList([const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 125, column: 29, name: "text"}))), const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 125, column: 40, name: "color"}))), const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 125, column: 64, name: "modelKey"})))], src__widgets__widget_inspector._Location))})))}), col0: 0, col1: 1, row0: 0, row1: 1, modelKey: "1"}), new LayoutGrid__src__layout_grid_couple.LayoutGridCouple.new({widget: new mainLayout.Section.new({text: "2", color: src__material__colors.Colors.blueGrey, modelKey: "2", $creationLocationd_0dea112b090073317d4: const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 131, column: 21, file: "org-dartlang-app:///packages/layout_grid_overview/mainLayout.dart", parameterLocations: const$41 || (const$41 = dart.constList([const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 131, column: 29, name: "text"}))), const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 131, column: 40, name: "color"}))), const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 131, column: 64, name: "modelKey"})))], src__widgets__widget_inspector._Location))})))}), col0: 0, col1: 1, row0: 1, row1: 2, modelKey: "2"}), new LayoutGrid__src__layout_grid_couple.LayoutGridCouple.new({widget: new mainLayout.Section.new({text: "3", color: src__material__colors.Colors.blueGrey, modelKey: "3", $creationLocationd_0dea112b090073317d4: const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 137, column: 21, file: "org-dartlang-app:///packages/layout_grid_overview/mainLayout.dart", parameterLocations: const$46 || (const$46 = dart.constList([const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 137, column: 29, name: "text"}))), const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 137, column: 40, name: "color"}))), const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 137, column: 64, name: "modelKey"})))], src__widgets__widget_inspector._Location))})))}), col0: 0, col1: 1, row0: 2, row1: 3, modelKey: "3"}), new LayoutGrid__src__layout_grid_couple.LayoutGridCouple.new({widget: new mainLayout.Section.new({text: "4", color: src__material__colors.Colors.blueGrey, modelKey: "4", $creationLocationd_0dea112b090073317d4: const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 143, column: 21, file: "org-dartlang-app:///packages/layout_grid_overview/mainLayout.dart", parameterLocations: const$51 || (const$51 = dart.constList([const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 143, column: 29, name: "text"}))), const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 143, column: 40, name: "color"}))), const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 143, column: 64, name: "modelKey"})))], src__widgets__widget_inspector._Location))})))}), col0: 0, col1: 1, row0: 3, row1: 4, modelKey: "4"})]), $creationLocationd_0dea112b090073317d4: const$60 || (const$60 = dart.const(new src__widgets__widget_inspector._Location.new({line: 104, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/mainLayout.dart", parameterLocations: const$59 || (const$59 = dart.constList([const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 9, name: "maxWidth"}))), const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 106, column: 9, name: "maxHeight"}))), const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 108, column: 9, name: "layoutModel"}))), const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 110, column: 9, name: "columns"}))), const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 115, column: 9, name: "rows"}))), const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 123, column: 9, name: "couples"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$63 || (const$63 = dart.const(new src__widgets__widget_inspector._Location.new({line: 102, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/mainLayout.dart", parameterLocations: const$62 || (const$62 = dart.constList([const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 104, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (mainLayout.LeftGrid.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[model] = null;
    this[modelKey] = "LeftGrid";
    mainLayout.LeftGrid.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = mainLayout.LeftGrid.prototype;
  dart.addTypeTests(mainLayout.LeftGrid);
  const model = Symbol("LeftGrid.model");
  const modelKey = Symbol("LeftGrid.modelKey");
  dart.setMethodSignature(mainLayout.LeftGrid, () => ({
    __proto__: dart.getMethods(mainLayout.LeftGrid.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(mainLayout.LeftGrid, "package:layout_grid_overview/mainLayout.dart");
  dart.setFieldSignature(mainLayout.LeftGrid, () => ({
    __proto__: dart.getFields(mainLayout.LeftGrid.__proto__),
    model: dart.fieldType(LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel),
    modelKey: dart.finalFieldType(core.String)
  }));
  let const$64;
  let const$65;
  let const$66;
  let const$67;
  let const$68;
  let const$69;
  let const$70;
  let const$71;
  let const$72;
  let const$73;
  let const$74;
  mainLayout.Section = class Section extends src__widgets__framework.StatelessWidget {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get modelKey() {
      return this[modelKey$];
    }
    set modelKey(value) {
      super.modelKey = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get model() {
      return this[model$];
    }
    set model(value) {
      this[model$] = value;
    }
    build(context) {
      this.model = LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel.of(context);
      return new src__widgets__container.Container.new({color: this.color, width: this.model.getWidth(this.modelKey), height: this.model.getHeight(this.modelKey), alignment: new src__painting__alignment.Alignment.new(0.0, 0.0), child: new src__widgets__text.Text.new(this.text, {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontSize: 64.0}), $creationLocationd_0dea112b090073317d4: const$67 || (const$67 = dart.const(new src__widgets__widget_inspector._Location.new({line: 176, column: 14, file: "org-dartlang-app:///packages/layout_grid_overview/mainLayout.dart", parameterLocations: const$66 || (const$66 = dart.constList([const$64 || (const$64 = dart.const(new src__widgets__widget_inspector._Location.new({line: 177, column: 9, name: "data"}))), const$65 || (const$65 = dart.const(new src__widgets__widget_inspector._Location.new({line: 178, column: 9, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$74 || (const$74 = dart.const(new src__widgets__widget_inspector._Location.new({line: 167, column: 12, file: "org-dartlang-app:///packages/layout_grid_overview/mainLayout.dart", parameterLocations: const$73 || (const$73 = dart.constList([const$68 || (const$68 = dart.const(new src__widgets__widget_inspector._Location.new({line: 169, column: 7, name: "color"}))), const$69 || (const$69 = dart.const(new src__widgets__widget_inspector._Location.new({line: 171, column: 7, name: "width"}))), const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 172, column: 7, name: "height"}))), const$71 || (const$71 = dart.const(new src__widgets__widget_inspector._Location.new({line: 174, column: 7, name: "alignment"}))), const$72 || (const$72 = dart.const(new src__widgets__widget_inspector._Location.new({line: 176, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (mainLayout.Section.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let modelKey = opts && 'modelKey' in opts ? opts.modelKey : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[model$] = null;
    this[color$] = color;
    this[text$] = text;
    this[modelKey$] = modelKey;
    mainLayout.Section.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = mainLayout.Section.prototype;
  dart.addTypeTests(mainLayout.Section);
  const text$ = Symbol("Section.text");
  const modelKey$ = Symbol("Section.modelKey");
  const color$ = Symbol("Section.color");
  const model$ = Symbol("Section.model");
  dart.setMethodSignature(mainLayout.Section, () => ({
    __proto__: dart.getMethods(mainLayout.Section.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(mainLayout.Section, "package:layout_grid_overview/mainLayout.dart");
  dart.setFieldSignature(mainLayout.Section, () => ({
    __proto__: dart.getFields(mainLayout.Section.__proto__),
    text: dart.finalFieldType(core.String),
    modelKey: dart.finalFieldType(core.String),
    color: dart.finalFieldType(ui$.Color),
    model: dart.fieldType(LayoutGrid__src__Util__inherited_layout_model.InheritedLayoutModel)
  }));
  dart.trackLibraries("packages/layout_grid_overview/mainLayout", {
    "package:layout_grid_overview/mainLayout.dart": mainLayout
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/layout_grid_overview/mainLayout.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAW4B;AAExB,YAAO,8DACI,SAAc,SAAwB;UAE7C,WAAM,AAAU,YAAuB,cAArB,AAAY,WAAD;AAE7B,gBAAO,8CACc,sBACjB,6EACS,2DAEK,AAAY,WAAD,4BACJ,AAAY,WAAD,yBAEM,sEAAG,OAAO,YAEnC,0BACP,sEAAoB,OACpB,2EAAyB,aAAa,KACtC,2EAAyB,aAAa,KACtC,2EAAyB,aAAa,KACtC,2EAAyB,aAAa,aAGlC,0BACJ,sEAAoB,OACpB,sEAAoB,AAAY,WAAD,cAC/B,sEAAoB,QACpB,+EAA6B,QAC7B,+EAA6B,QAC7B,sEAAoB,SACpB,sEAAoB,QACpB,sEAAoB,QACpB,sEAAoB,AAAY,WAAD,cAC/B,sEAAoB,QACpB,sEAAoB,QACpB,+EAA6B,QAC7B,+EAA6B,mBAGtB,gCACP,sEACU,kCAAc,eAAqB,kDAAoB,2sBACzD,SAAQ,SACR,SAAS,aACL,UAEZ,sEACU,kCAAc,sBAA4B,mDAAqB,otBACjE,SAAQ,SACR,SAAS,aACL,iBAEZ,sEACU,kCAAc,mBAAyB,6CAAe,ytBACxD,SAAQ,SACR,SAAS,aACL,cAEZ,sEACU,kXACF,SAAQ,SACR,SAAS,aACL;;IAS5B;;;QA7EM;;AACD,yDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAqFC;;;;;;IACR;;;;;;UAGa;MAExB,aAA6B,sEAAG,OAAO;AAEvC,YAAO,mDAEE,2DACK,AAAM,oBAAS,2BACd,AAAM,qBAAU,6BAEO,sEAAG,OAAO,YAEnC,0BACP,sEAAoB,eAAc,KAClC,sEAAoB,AAAM,oBAAS,0BAAoB,aAGnD,0BACJ,sEAAoB,OACpB,wEAAsB,kBAAkB,OACxC,wEAAsB,kBAAkB,SACxC,wEAAsB,kBAAkB,SACxC,wEAAsB,kBAAkB,oBAGjC,gCACP,sEACU,kCAAc,YAAmB,iDAAoB,wtBACvD,SAAS,SACT,SAAS,aACL,OAEZ,sEACU,kCAAc,YAAmB,iDAAoB,wtBACvD,SAAS,SACT,SAAS,aACL,OAEZ,sEACU,kCAAc,YAAmB,iDAAoB,wtBACvD,SAAS,SACT,SAAS,aACL,OAEZ,sEACU,kCAAc,YAAmB,iDAAoB,wtBACvD,SAAS,SACT,SAAS,aACL;IAKpB;;;QA3Dc;;IAEO;IACR,iBAAW;AAHF,uDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;IAiExB;;;;;;IAAM;;;;;;IACP;;;;;;IAES;;;;;;UAGK;MAExB,aAA6B,sEAAG,OAAO;AAEvC,YAAO,mDAEE,mBAEA,AAAM,oBAAS,wBACd,AAAM,qBAAU,2BAEb,2CAAU,KAAK,aAEnB,gCACL,mBACO,oDACS,8CACJ;IAIlB;;;QA7Ba;QAAoB;QAAsB;QAAqB;;IAKvD;IALY;IAAsB;IAAqB;AAAa,sDAAW,GAAG;;EAAC","file":"mainLayout.ddc.js"}');
  // Exports:
  return {
    mainLayout: mainLayout
  };
});

//# sourceMappingURL=mainLayout.ddc.js.map
