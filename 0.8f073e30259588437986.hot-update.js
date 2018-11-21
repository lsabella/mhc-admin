webpackHotUpdate(0,{

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _row = __webpack_require__(119);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(141);

var _col2 = _interopRequireDefault(_col);

var _affix = __webpack_require__(269);

var _affix2 = _interopRequireDefault(_affix);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__(9).enterModule;

  enterModule && enterModule(module);
})();

__webpack_require__(170);

__webpack_require__(224);

__webpack_require__(1720);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDocumentTitle = __webpack_require__(1722);

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _antd = __webpack_require__(20);

var _utils = __webpack_require__(230);

var _Demo = __webpack_require__(406);

var _Demo2 = _interopRequireDefault(_Demo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function handleAffixChange() {
  var tocNode = document.getElementById('demo-toc-bottom').parentNode;
  tocNode.style.position = 'static';
}

var ComponentDoc = function (_React$PureComponent) {
  _inherits(ComponentDoc, _React$PureComponent);

  function ComponentDoc() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ComponentDoc);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ComponentDoc.__proto__ || Object.getPrototypeOf(ComponentDoc)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      affixMode: true
    }, _this.handleScroll = function () {
      var tocNode = document.getElementById('demo-toc');
      var dh = document.body.scrollHeight;
      var of = window.scrollY + (tocNode && tocNode.offsetHeight || _this.tocHeight);

      if (dh - of <= 600) {
        if (_this.state.affixMode) {
          _this.tocHeight = tocNode.offsetHeight;
          _this.setState({
            affixMode: false
          });
        }
      } else if (!_this.state.affixMode) {
        _this.setState({
          affixMode: true
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ComponentDoc, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'getDemos',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(demos) {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return demos();

              case 2:
                res = _context.sent;
                return _context.abrupt('return', res);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getDemos(_x) {
        return _ref2.apply(this, arguments);
      }

      return getDemos;
    }()
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var doc = props.doc,
          location = props.location;
      var content = doc.content,
          meta = doc.meta;

      if (!doc) return null;
      var demos = Object.keys(props.demos).map(function (key) {
        return props.demos[key];
      });
      var _state = this.state,
          affixMode = _state.affixMode,
          expand = _state.expand;


      var isSingleCol = meta.cols === 1;
      var leftChildren = [];
      var rightChildren = [];
      var showedDemo = demos.some(function (demo) {
        return demo.meta.only;
      }) ? demos.filter(function (demo) {
        return demo.meta.only;
      }) : demos.filter(function (demo) {
        return demo.preview;
      });

      showedDemo.sort(function (a, b) {
        return a.meta.order - b.meta.order;
      }).forEach(function (demoData, index) {
        var demoElem = _react2.default.createElement(_Demo2.default, _extends({}, demoData, {
          themeConfig: props.themeConfig,
          key: demoData.meta.filename,
          utils: props.utils,
          expand: expand,
          location: location
        }));
        if (index % 2 === 0 || isSingleCol) {
          leftChildren.push(demoElem);
        } else {
          rightChildren.push(demoElem);
        }
      });
      console.log('leftChildren');
      console.log(leftChildren);
      console.log('rightChildren');
      console.log(rightChildren);
      console.log(isSingleCol);

      var jumper = showedDemo.map(function (demo) {
        var title = demo.meta.title['zh-CN'];
        var localizeTitle = title;
        return _react2.default.createElement(
          'li',
          { key: demo.meta.id, title: localizeTitle },
          _react2.default.createElement(
            'a',
            { href: '#' + demo.meta.id },
            localizeTitle
          )
        );
      });

      var title = meta.title,
          subtitle = meta.subtitle;

      return _react2.default.createElement(
        _reactDocumentTitle2.default,
        { title: (subtitle || '') + ' ' + title + ' - HMC Antd Amdin' },
        _react2.default.createElement(
          'article',
          null,
          _react2.default.createElement(
            _affix2.default,
            {
              className: 'toc-affix',
              offsetTop: 16,
              style: affixMode ? { opacity: 1 } : { opacity: 0, zIndex: -99 }
            },
            _react2.default.createElement(
              'ul',
              { id: 'demo-toc', className: 'toc' },
              ' ',
              jumper,
              ' '
            )
          ),
          _react2.default.createElement(
            _affix2.default,
            {
              className: 'toc-affix-bottom',
              onChange: handleAffixChange,
              offsetTop: 16,
              style: affixMode ? { opacity: 0, zIndex: -99 } : { opacity: 1 }
            },
            _react2.default.createElement(
              'ul',
              { id: 'demo-toc-bottom', className: 'toc' },
              ' ',
              jumper,
              ' '
            )
          ),
          _react2.default.createElement(
            'section',
            { className: 'markdown' },
            _react2.default.createElement(
              'h1',
              null,
              title,
              !subtitle && _react2.default.createElement(
                'span',
                { className: 'subtitle' },
                subtitle
              )
            ),
            props.utils.toReactComponent(['section', { className: 'markdown' }].concat((0, _utils.getChildren)(content))),
            _react2.default.createElement(
              'p',
              null,
              '\u5F15\u7528\u65B9\u5F0F\uFF1A'
            ),
            _react2.default.createElement(
              'pre',
              { className: 'language-jsx' },
              _react2.default.createElement(
                'code',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'token keyword' },
                  'import '
                ),
                '{ ' + title + ' }',
                _react2.default.createElement(
                  'span',
                  { className: 'token keyword' },
                  ' from '
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'token string' },
                  '\'mhc-amdin\''
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'token punctuation' },
                  ';'
                )
              )
            ),
            _react2.default.createElement(
              'h2',
              { style: { marginBottom: 32 } },
              '\u4EE3\u7801\u6F14\u793A'
            )
          ),
          _react2.default.createElement(
            _row2.default,
            { gutter: 16 },
            _react2.default.createElement(
              _col2.default,
              {
                span: isSingleCol ? '24' : '12',
                className: isSingleCol ? 'code-boxes-col-1-1' : 'code-boxes-col-2-1' },
              leftChildren
            ),
            !isSingleCol && _react2.default.createElement(
              _col2.default,
              { className: 'code-boxes-col-2-1', span: 12 },
              rightChildren
            )
          ),
          props.utils.toReactComponent(['section', {
            className: 'markdown api-container'
          }].concat((0, _utils.getChildren)(doc.api || ['placeholder'])))
        )
      );
    }
  }]);

  return ComponentDoc;
}(_react2.default.PureComponent);

exports.default = ComponentDoc;
module.exports = exports['default'];
;

(function () {
  var reactHotLoader = __webpack_require__(9).default;

  var leaveModule = __webpack_require__(9).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(handleAffixChange, 'handleAffixChange', '/Users/user18/baishu_front/KPI/mhc_admin/site/theme/template/components/ComponentDoc/index.js');
  reactHotLoader.register(ComponentDoc, 'ComponentDoc', '/Users/user18/baishu_front/KPI/mhc_admin/site/theme/template/components/ComponentDoc/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module)))

/***/ })

})