webpackHotUpdate(0,{

/***/ 1601:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class, _desc, _value, _class2;

(function () {
  var enterModule = __webpack_require__(7).enterModule;

  enterModule && enterModule(module);
})();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bizcharts = __webpack_require__(1602);

var _dataSet = __webpack_require__(1603);

var _dataSet2 = _interopRequireDefault(_dataSet);

var _debounce = __webpack_require__(1604);

var _debounce2 = _interopRequireDefault(_debounce);

var _bind = __webpack_require__(1649);

var _bind2 = _interopRequireDefault(_bind);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _autoHeight = __webpack_require__(1651);

var _autoHeight2 = _interopRequireDefault(_autoHeight);

var _index = __webpack_require__(1652);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* eslint no-underscore-dangle: 0 */
/* eslint no-param-reassign: 0 */

var imgUrl = 'https://gw.alipayobjects.com/zos/rmsportal/gWyeGLCdFFRavBGIDzWk.png';

var TagCloud = (_dec = (0, _autoHeight2.default)(), _dec2 = (0, _bind2.default)(), _dec3 = (0, _debounce2.default)(500), _dec(_class = (_class2 = function (_Component) {
  _inherits(TagCloud, _Component);

  function TagCloud() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TagCloud);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TagCloud.__proto__ || Object.getPrototypeOf(TagCloud)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dv: null
    }, _this.resize = function () {
      _this.requestRef = requestAnimationFrame(function () {
        _this.renderChart();
      });
    }, _this.saveRootRef = function (node) {
      _this.root = node;
    }, _this.initTagCloud = function () {
      function getTextAttrs(cfg) {
        return Object.assign({}, {
          fillOpacity: cfg.opacity,
          fontSize: cfg.origin._origin.size,
          rotate: cfg.origin._origin.rotate,
          text: cfg.origin._origin.text,
          textAlign: 'center',
          fontFamily: cfg.origin._origin.font,
          fill: cfg.color,
          textBaseline: 'Alphabetic'
        }, cfg.style);
      }

      // 给point注册一个词云的shape
      _bizcharts.Shape.registerShape('point', 'cloud', {
        drawShape: function drawShape(cfg, container) {
          var attrs = getTextAttrs(cfg);
          return container.addShape('text', {
            attrs: Object.assign(attrs, {
              x: cfg.x,
              y: cfg.y
            })
          });
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TagCloud, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      requestAnimationFrame(function () {
        _this2.initTagCloud();
        _this2.renderChart();
      });
      window.addEventListener('resize', this.resize, { passive: true });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(preProps) {
      var data = this.props.data;

      if (JSON.stringify(preProps.data) !== JSON.stringify(data)) {
        this.renderChart(this.props);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.isUnmount = true;
      window.cancelAnimationFrame(this.requestRef);
      window.removeEventListener('resize', this.resize);
    }
  }, {
    key: 'renderChart',
    value: function renderChart(nextProps) {
      var _this3 = this;

      // const colors = ['#1890FF', '#41D9C7', '#2FC25B', '#FACC14', '#9AE65C'];
      var _ref2 = nextProps || this.props,
          data = _ref2.data,
          height = _ref2.height;

      if (data.length < 1 || !this.root) {
        return;
      }

      var h = height * 2.5;
      var w = this.root.offsetWidth * 2;

      var onload = function onload() {
        var dv = new _dataSet2.default.View().source(data);
        var range = dv.range('value');

        var _range = _slicedToArray(range, 2),
            min = _range[0],
            max = _range[1];

        dv.transform({
          type: 'tag-cloud',
          fields: ['name', 'value'],
          imageMask: _this3.imageMask,
          font: 'Verdana',
          size: [w, h], // 宽高设置最好根据 imageMask 做调整
          padding: 5,
          timeInterval: 5000, // max execute time
          rotate: function rotate() {
            return 0;
          },
          fontSize: function fontSize(d) {
            // eslint-disable-next-line
            return Math.pow((d.value - min) / (max - min), 2) * (70 - 20) + 20;
          }
        });

        if (_this3.isUnmount) {
          return;
        }

        _this3.setState({
          dv: dv,
          w: w,
          h: h
        });
      };

      if (!this.imageMask) {
        this.imageMask = new Image();
        this.imageMask.crossOrigin = '';
        this.imageMask.src = imgUrl;

        this.imageMask.onload = onload;
      } else {
        onload();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          height = _props.height;
      var _state = this.state,
          dv = _state.dv,
          w = _state.w,
          h = _state.h;


      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(_index2.default.tagCloud, className),
          style: { width: '100%', height: height },
          ref: this.saveRootRef
        },
        dv && _react2.default.createElement(
          _bizcharts.Chart,
          {
            width: w,
            height: h,
            data: dv,
            padding: 0,
            scale: {
              x: { nice: true },
              y: { nice: true }
            }
          },
          _react2.default.createElement(_bizcharts.Coord, { reflect: 'y' }),
          _react2.default.createElement(_bizcharts.Geom, { type: 'point', position: 'x*y', color: 'text', shape: 'cloud' })
        )
      );
    }
  }]);

  return TagCloud;
}(_react.Component), (_applyDecoratedDescriptor(_class2.prototype, 'renderChart', [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'renderChart'), _class2.prototype)), _class2)) || _class);
var _default = TagCloud;
exports.default = _default;
module.exports = exports['default'];
;

(function () {
  var reactHotLoader = __webpack_require__(7).default;

  var leaveModule = __webpack_require__(7).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(imgUrl, 'imgUrl', '/Users/user18/baishu_front/KPI/mhc-admin/components/TagCloud/index.js');
  reactHotLoader.register(TagCloud, 'TagCloud', '/Users/user18/baishu_front/KPI/mhc-admin/components/TagCloud/index.js');
  reactHotLoader.register(_default, 'default', '/Users/user18/baishu_front/KPI/mhc-admin/components/TagCloud/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module)))

/***/ }),

/***/ 1651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__(7).enterModule;

  enterModule && enterModule(module);
})();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint eqeqeq: 0 */


function computeHeight(node) {
  var totalHeight = parseInt(getComputedStyle(node).height, 10);
  var padding = parseInt(getComputedStyle(node).paddingTop, 10) + parseInt(getComputedStyle(node).paddingBottom, 10);
  return totalHeight - padding;
}

function getAutoHeight(n) {
  if (!n) {
    return 0;
  }

  var node = n;

  var height = computeHeight(node);

  while (!height) {
    node = node.parentNode;
    if (node) {
      height = computeHeight(node);
    } else {
      break;
    }
  }

  return height;
}

var autoHeight = function autoHeight() {
  return function (WrappedComponent) {
    return function (_React$Component) {
      _inherits(_class2, _React$Component);

      function _class2() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _class2);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          computedHeight: 0
        }, _this.handleRoot = function (node) {
          _this.root = node;
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(_class2, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          var height = this.props.height;

          if (!height) {
            var h = getAutoHeight(this.root);
            // eslint-disable-next-line
            this.setState({ computedHeight: h });
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var height = this.props.height;
          var computedHeight = this.state.computedHeight;

          var h = height || computedHeight;
          return _react2.default.createElement(
            'div',
            { ref: this.handleRoot },
            h > 0 && _react2.default.createElement(WrappedComponent, _extends({}, this.props, { height: h }))
          );
        }
      }]);

      return _class2;
    }(_react2.default.Component);
  };
};

var _default = autoHeight;
exports.default = _default;
module.exports = exports['default'];
;

(function () {
  var reactHotLoader = __webpack_require__(7).default;

  var leaveModule = __webpack_require__(7).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(computeHeight, 'computeHeight', '/Users/user18/baishu_front/KPI/mhc-admin/components/TagCloud/autoHeight.js');
  reactHotLoader.register(getAutoHeight, 'getAutoHeight', '/Users/user18/baishu_front/KPI/mhc-admin/components/TagCloud/autoHeight.js');
  reactHotLoader.register(autoHeight, 'autoHeight', '/Users/user18/baishu_front/KPI/mhc-admin/components/TagCloud/autoHeight.js');
  reactHotLoader.register(_default, 'default', '/Users/user18/baishu_front/KPI/mhc-admin/components/TagCloud/autoHeight.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module)))

/***/ }),

/***/ 1652:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(398);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(14)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(398, function() {
			var newContent = __webpack_require__(398);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1684:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "标签云组件。\n提供的业务中常用的图表类型，都是基于 ",
      [
        "a",
        {
          "title": null,
          "href": "https://antv.alipay.com/g2/doc/index.html"
        },
        "G2"
      ],
      " 按照 Ant Design 图表规范封装，需要注意的是 Ant Design Pro 的图表组件以套件形式提供，可以任意组合实现复杂的业务需求。"
    ],
    [
      "p",
      "因为结合了 Ant Design 的标准设计，本着极简的设计思想以及开箱即用的理念，简化了大量 API 配置，所以如果需要灵活定制图表，可以参考 Ant Design Pro 图表实现，自行基于 ",
      [
        "a",
        {
          "title": null,
          "href": "https://antv.alipay.com/g2/doc/index.html"
        },
        "G2"
      ],
      " 封装图表组件使用。"
    ]
  ],
  "meta": {
    "category": "Components",
    "type": "Data Display",
    "title": "TagCloud",
    "subtitle": "标签云",
    "cols": 1,
    "order": 3,
    "filename": "components/TagCloud/index.md"
  },
  "api": [
    "section",
    [
      "h2",
      "API"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "data"
          ],
          [
            "td",
            "标题"
          ],
          [
            "td",
            "Array<name, value",
            ">"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "height"
          ],
          [
            "td",
            "高度值"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ]
  ]
};

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = __webpack_require__(7).enterModule;

  enterModule && enterModule(module);
})();

var _XSelect = __webpack_require__(1490);

Object.defineProperty(exports, 'XSelect', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_XSelect).default;
  }
});

var _XForm = __webpack_require__(1494);

Object.defineProperty(exports, 'XForm', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_XForm).default;
  }
});

var _XTable = __webpack_require__(1499);

Object.defineProperty(exports, 'XTable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_XTable).default;
  }
});

var _XRadioGroup = __webpack_require__(1524);

Object.defineProperty(exports, 'XRadioGroup', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_XRadioGroup).default;
  }
});

var _TagSelect = __webpack_require__(1525);

Object.defineProperty(exports, 'TagSelect', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TagSelect).default;
  }
});

var _Offcanvas = __webpack_require__(1528);

Object.defineProperty(exports, 'Offcanvas', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Offcanvas).default;
  }
});

var _TextEllipsis = __webpack_require__(1530);

Object.defineProperty(exports, 'TextEllipsis', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TextEllipsis).default;
  }
});

var _DescriptionList = __webpack_require__(1532);

Object.defineProperty(exports, 'DescriptionList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DescriptionList).default;
  }
});

var _BgImg = __webpack_require__(1537);

Object.defineProperty(exports, 'BgImg', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BgImg).default;
  }
});

var _BraftEditor = __webpack_require__(1540);

Object.defineProperty(exports, 'BraftEditor', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BraftEditor).default;
  }
});

var _CopyToClipboard = __webpack_require__(1560);

Object.defineProperty(exports, 'CopyToClipboard', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CopyToClipboard).default;
  }
});

var _EmptyContent = __webpack_require__(1562);

Object.defineProperty(exports, 'EmptyContent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_EmptyContent).default;
  }
});

var _Exception = __webpack_require__(1567);

Object.defineProperty(exports, 'Exception', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Exception).default;
  }
});

var _FlvPlayer = __webpack_require__(1570);

Object.defineProperty(exports, 'FlvPlayer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FlvPlayer).default;
  }
});

var _ImgViewer = __webpack_require__(1572);

Object.defineProperty(exports, 'ImgViewer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ImgViewer).default;
  }
});

var _CountDown = __webpack_require__(1575);

Object.defineProperty(exports, 'CountDown', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CountDown).default;
  }
});

var _TagIcon = __webpack_require__(1576);

Object.defineProperty(exports, 'TagIcon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TagIcon).default;
  }
});

var _QRcode = __webpack_require__(1577);

Object.defineProperty(exports, 'QRcode', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_QRcode).default;
  }
});

var _StateTag = __webpack_require__(1584);

Object.defineProperty(exports, 'StateTag', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_StateTag).default;
  }
});

var _DateTimePicker = __webpack_require__(1587);

Object.defineProperty(exports, 'DateTimePicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DateTimePicker).default;
  }
});

var _XUpload = __webpack_require__(1594);

Object.defineProperty(exports, 'XUpload', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_XUpload).default;
  }
});

var _TagCloud = __webpack_require__(1601);

Object.defineProperty(exports, 'TagCloud', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TagCloud).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* @remove-on-es-build-begin */
// this file is not used if use https://github.com/ant-design/babel-plugin-import
var ENV = process.env.NODE_ENV;
if (ENV !== 'production' && ENV !== 'test' && typeof console !== 'undefined' && console.warn && typeof window !== 'undefined') {
  console.warn('You are using a whole package of antd, ' + 'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.');
}

/* @remove-on-es-build-end */
;

(function () {
  var reactHotLoader = __webpack_require__(7).default;

  var leaveModule = __webpack_require__(7).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ENV, 'ENV', '/Users/user18/baishu_front/KPI/mhc-admin/components/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module), __webpack_require__(12)))

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".tagCloud {\n  overflow: hidden;\n}\n.tagCloud canvas {\n  -webkit-transform: scale(0.25);\n      -ms-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: 0 0;\n      -ms-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n", ""]);

// exports


/***/ })

})