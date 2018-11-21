'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bizcharts = require('bizcharts');

var _dataSet = require('@antv/data-set');

var _dataSet2 = _interopRequireDefault(_dataSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Basic = function (_React$Component) {
  _inherits(Basic, _React$Component);

  function Basic() {
    _classCallCheck(this, Basic);

    return _possibleConstructorReturn(this, (Basic.__proto__ || Object.getPrototypeOf(Basic)).apply(this, arguments));
  }

  _createClass(Basic, [{
    key: 'render',
    value: function render() {
      var data = [{
        month: '1月',
        value: 20
      }, {
        month: '2月',
        value: 30
      }, {
        month: '3月',
        value: 40
      }, {
        month: '4月',
        value: 50
      }, {
        month: '5月',
        value: 60
      }, {
        month: '6月',
        value: 45
      }];
      var cols = {
        value: {
          min: 0
        },
        month: {
          range: [0, 1]
        }
      };
      // Chart.axis('xField', {
      //   title: {111} // 展示 xField 对应坐标轴的标题
      // });
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _bizcharts.Chart,
          { height: 400, data: data, scale: cols, forceFit: true },
          _react2.default.createElement(_bizcharts.Axis, { name: 'month', title: 'month' }),
          _react2.default.createElement(_bizcharts.Axis, { name: 'value', title: 'value' }),
          _react2.default.createElement(_bizcharts.Tooltip, {
            crosshairs: {
              type: 'y'
            }
          }),
          _react2.default.createElement(
            _bizcharts.Geom,
            {
              type: 'line',
              position: 'month*value',
              size: 2 },
            _react2.default.createElement(_bizcharts.Label, { content: data })
          ),
          _react2.default.createElement(_bizcharts.Geom, {
            type: 'point',
            position: 'month*value',
            size: 4,
            shape: 'circle',
            style: {
              stroke: '#fff',
              lineWidth: 1
            }
          })
        )
      );
    }
  }]);

  return Basic;
}(_react2.default.Component);

var Series = function (_React$Component2) {
  _inherits(Series, _React$Component2);

  function Series() {
    _classCallCheck(this, Series);

    return _possibleConstructorReturn(this, (Series.__proto__ || Object.getPrototypeOf(Series)).apply(this, arguments));
  }

  _createClass(Series, [{
    key: 'render',
    value: function render() {
      var data = [{
        month: 'Jan',
        Tokyo: 7.0,
        London: 3.9
      }, {
        month: 'Feb',
        Tokyo: 6.9,
        London: 4.2
      }, {
        month: 'Mar',
        Tokyo: 9.5,
        London: 5.7
      }, {
        month: 'Apr',
        Tokyo: 14.5,
        London: 8.5
      }, {
        month: 'May',
        Tokyo: 18.4,
        London: 11.9
      }, {
        month: 'Jun',
        Tokyo: 21.5,
        London: 15.2
      }, {
        month: 'Jul',
        Tokyo: 25.2,
        London: 17.0
      }, {
        month: 'Aug',
        Tokyo: 26.5,
        London: 16.6
      }, {
        month: 'Sep',
        Tokyo: 23.3,
        London: 14.2
      }, {
        month: 'Oct',
        Tokyo: 18.3,
        London: 10.3
      }, {
        month: 'Nov',
        Tokyo: 13.9,
        London: 6.6
      }, {
        month: 'Dec',
        Tokyo: 9.6,
        London: 4.8
      }];
      var ds = new _dataSet2.default();
      var dv = ds.createView().source(data);
      dv.transform({
        type: 'fold',
        fields: ['Tokyo', 'London'],
        // 展开字段集
        key: 'city',
        // key字段
        value: 'temperature' // value字段
      });
      console.log(dv);
      var cols = {
        month: {
          range: [0, 1]
        }
      };
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _bizcharts.Chart,
          { height: 400, data: dv, scale: cols, forceFit: true },
          _react2.default.createElement(_bizcharts.Legend, null),
          _react2.default.createElement(_bizcharts.Axis, { name: 'month' }),
          _react2.default.createElement(_bizcharts.Axis, {
            name: 'temperature',
            label: {
              formatter: function formatter(val) {
                return val + '\xB0C';
              }
            }
          }),
          _react2.default.createElement(_bizcharts.Tooltip, {
            crosshairs: {
              type: 'y'
            }
          }),
          _react2.default.createElement(_bizcharts.Geom, {
            type: 'line',
            position: 'month*temperature',
            size: 2,
            color: 'city'
          }),
          _react2.default.createElement(_bizcharts.Geom, {
            type: 'point',
            position: 'month*temperature',
            size: 4,
            shape: 'circle',
            color: 'city',
            style: {
              stroke: '#fff',
              lineWidth: 1
            }
          })
        )
      );
    }
  }]);

  return Series;
}(_react2.default.Component);

exports.default = { Basic: Basic, Series: Series };