webpackHotUpdate(1,{

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(772);
__webpack_require__(974);

/* eslint-disable no-unused-vars */
var React = __webpack_require__(0);
/* eslint-enable no-unused-vars */
var ReactDOM = __webpack_require__(10);
var ReactRouter = __webpack_require__(168);
var history = __webpack_require__(982);
var data = __webpack_require__(994);
var createElement = __webpack_require__(1871);
var routes = __webpack_require__(1872)(data);

var _window$location = window.location,
    pathname = _window$location.pathname,
    search = _window$location.search,
    hash = _window$location.hash;

var location = '' + pathname + search + hash;
var basename = '/mhc-admin/';
ReactRouter.match({ routes: routes, location: location, basename: basename }, function () {
  var router = React.createElement(ReactRouter.Router, {
    history: ReactRouter.useRouterHistory(history.createHistory)({ basename: basename }),
    routes: routes,
    createElement: createElement
  });
  ReactDOM.render(router, document.getElementById('react-content'));
});

/***/ })

})