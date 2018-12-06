"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _breakpoints = _interopRequireDefault(require("../breakpoints"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: grid;\n\t@media (max-width: ", ") {\n\t\tgrid-template-columns: ", ";\n\t\tgrid-template-rows: ", ";\n\t}\n\t@media (min-width: ", ") {\n\t\tgrid-template-columns: ", ";\n\t\tgrid-template-rows: ", ";\n\t}\n\t@media (min-width: ", ") {\n\t\tgrid-template-columns: ", ";\n\t\tgrid-template-rows: ", ";\n\t}\n\t@media (min-width: ", ") {\n\t\tgrid-template-columns: ", ";\n\t\tgrid-template-rows: ", ";\n\t}\n\t@media (min-width: ", ") {\n\t\tgrid-template-columns: ", ";\n\t\tgrid-template-rows: ", ";\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var utils = {
  setCells: function setCells(cells) {
    var cssReturn = '';

    for (var i = 0; i < cells; i += 1) {
      cssReturn += "1fr ";
    }

    return cssReturn;
  },
  responsive: function responsive(props, size, index) {
    if (this.noSizes(props)) {
      return null;
    }

    switch (size) {
      case 'xs':
        return this.check(props, 'xs', index) ? props.xs[index] : this.scaleUp(props, index);

      case 'sm':
        return this.check(props, 'sm', index) || this.scaleDown(props, 'sm', index);

      case 'md':
        return this.check(props, 'md', index) || this.scaleDown(props, 'md', index);

      case 'lg':
        return this.check(props, 'lg', index) || this.scaleDown(props, 'lg', index);

      case 'xl':
        return this.check(props, 'xl', index) || this.scaleDown(props, 'xl', index);

      default:
        return 1;
    }
  },
  noSizes: function noSizes(props) {
    return Object.keys(props).filter(function (prop) {
      return prop === 'xs' || prop === 'sm' || prop === 'md' || prop === 'lg' || prop === 'xl';
    }).length === 0;
  },
  scaleUp: function scaleUp(props, index) {
    return this.check(props, 'xs', index) || this.check(props, 'sm', index) || this.check(props, 'md', index) || this.check(props, 'lg', index) || this.check(props, 'xl', index);
  },
  scaleDown: function scaleDown(props, size, index) {
    switch (size) {
      case 'sm':
        return this.check(props, 'xs', index) || this.scaleUp(props, index);

      case 'md':
        return this.check(props, 'sm', index) || this.check(props, 'xs', index) || this.scaleUp(props, index);

      case 'lg':
        return this.check(props, 'md', index) || this.check(props, 'sm', index) || this.check(props, 'xs', index) || this.scaleUp(props, index);

      case 'xl':
        return this.check(props, 'lg', index) || this.check(props, 'md', index) || this.check(props, 'sm', index) || this.check(props, 'xs', index) || this.scaleUp(props, index);

      default:
        return [1];
    }
  },
  check: function check(props, size, index) {
    return props[size] && props[size][index];
  }
};

var GridDiv = _styledComponents.default.div(_templateObject(), _breakpoints.default.xs, function (props) {
  return "repeat(".concat(utils.responsive(props, 'xs', 0), ", auto)");
}, function (props) {
  return "repeat(".concat(utils.responsive(props, 'xs', 1), ", auto)");
}, _breakpoints.default.sm, function (props) {
  return "repeat(".concat(utils.responsive(props, 'sm', 0), ", auto)");
}, function (props) {
  return "repeat(".concat(utils.responsive(props, 'sm', 1), ", auto)");
}, _breakpoints.default.md, function (props) {
  return "repeat(".concat(utils.responsive(props, 'md', 0), ", auto)");
}, function (props) {
  return "repeat(".concat(utils.responsive(props, 'md', 1), ", auto)");
}, _breakpoints.default.lg, function (props) {
  return "repeat(".concat(utils.responsive(props, 'lg', 0), ", auto)");
}, function (props) {
  return "repeat(".concat(utils.responsive(props, 'lg', 1), ", auto)");
}, _breakpoints.default.xl, function (props) {
  return "repeat(".concat(utils.responsive(props, 'xl', 0), ", auto)");
}, function (props) {
  return "repeat(".concat(utils.responsive(props, 'xl', 1), ", auto)");
});

var Grid =
/*#__PURE__*/
function (_Component) {
  _inherits(Grid, _Component);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, _getPrototypeOf(Grid).apply(this, arguments));
  }

  _createClass(Grid, [{
    key: "renderChildren",
    value: function renderChildren() {
      var _this = this;

      var children = this.props.children;
      return _react.default.Children.map(children, function (child) {
        return _react.default.cloneElement(child, {
          parent: _this.props
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(GridDiv, this.props, this.renderChildren());
    }
  }]);

  return Grid;
}(_react.Component);

Grid.propTypes = {
  xs: _propTypes.default.arrayOf(_propTypes.default.number),
  sm: _propTypes.default.arrayOf(_propTypes.default.number),
  md: _propTypes.default.arrayOf(_propTypes.default.number),
  lg: _propTypes.default.arrayOf(_propTypes.default.number),
  xl: _propTypes.default.arrayOf(_propTypes.default.number)
};
var _default = Grid;
exports.default = _default;