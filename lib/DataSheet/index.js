'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDatasheet = require('react-datasheet');

var _reactDatasheet2 = _interopRequireDefault(_reactDatasheet);

require('react-datasheet/lib/react-datasheet.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataSheet = function (_React$Component) {
  _inherits(DataSheet, _React$Component);

  function DataSheet(props) {
    _classCallCheck(this, DataSheet);

    var _this = _possibleConstructorReturn(this, (DataSheet.__proto__ || Object.getPrototypeOf(DataSheet)).call(this, props));

    _this.state = {
      grid: [[{ value: 1 }, { value: 3 }], [{ value: 2 }, { value: 4 }], [{ value: 1 }, { value: 3 }], [{ value: 2 }, { value: 4 }], [{ value: 1 }, { value: 3 }], [{ value: 2 }, { value: 4 }], [{ value: 1 }, { value: 3 }], [{ value: 2 }, { value: 4 }], [{ value: 1 }, { value: 3 }], [{ value: 2 }, { value: 4 }]]
    };
    return _this;
  }

  _createClass(DataSheet, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_reactDatasheet2.default, {
        data: this.state.grid,
        valueRenderer: function valueRenderer(cell) {
          return cell.value;
        },
        onCellsChanged: function onCellsChanged(changes) {
          var grid = _this2.state.grid.map(function (row) {
            return [].concat(_toConsumableArray(row));
          });
          changes.forEach(function (_ref) {
            var cell = _ref.cell,
                row = _ref.row,
                col = _ref.col,
                value = _ref.value;

            grid[row][col] = _extends({}, grid[row][col], { value: value });
          });
          _this2.setState({ grid: grid });
        }
      });
    }
  }]);

  return DataSheet;
}(_react2.default.Component);

exports.default = DataSheet;