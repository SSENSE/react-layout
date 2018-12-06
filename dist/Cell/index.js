"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _breakpoints = _interopRequireDefault(require("../breakpoints"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t@media (max-width: ", ") {\n\t\tgrid-column: ", ";\n\t\tgrid-row: ", ";\n\t}\n\t@media (min-width: ", ") {\n\t\tgrid-column: ", ";\n\t\tgrid-row: ", ";\n\t}\n\t@media (min-width: ", ") {\n\t\tgrid-column: ", ";\n\t\tgrid-row: ", ";\n\t}\n\t@media (min-width: ", ") {\n\t\tgrid-column: ", ";\n\t\tgrid-row: ", ";\n\t}\n\t@media (min-width: ", ") {\n\t\tgrid-column: ", ";\n\t\tgrid-row: ", ";\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var utils = {
  getSize: function getSize(props, size) {
    var breakProvided = Object.keys(props).includes(size);
    return breakProvided ? props[size] : this.scaleDown(props, size);
  },
  scaleDown: function scaleDown(props, size) {
    switch (size) {
      case 'sm':
        return props.xs || this.scaleUp(props);

      case 'md':
        return props.sm || props.xs || this.scaleUp(props);

      case 'lg':
        return props.md || props.sm || props.xs || this.scaleUp(props);

      case 'xl':
        return props.lg || props.md || props.sm || props.xs || this.scaleUp(props);

      default:
        return [1, 1, 1, 1];
    }
  },
  scaleUp: function scaleUp(props) {
    return props.xs || props.sm || props.md || props.lg || props.xl || [1, 1, 1, 1];
  },
  setCells: function setCells(props, type) {
    if (type === 'col') {
      if (props[0] === '*') return "1 / -1";
      return "".concat(props[0], " / ").concat(props[1]);
    }

    if (type === 'row') {
      if (props[0] === '*') return "";
      return "".concat(props[2], " / ").concat(props[3]);
    }
  }
};

var CellDiv = _styledComponents.default.div(_templateObject(), _breakpoints.default.xs, function (props) {
  return utils.setCells(utils.getSize(props, 'xs'), 'col');
}, function (props) {
  return utils.setCells(utils.getSize(props, 'xs'), 'row');
}, _breakpoints.default.sm, function (props) {
  return utils.setCells(utils.getSize(props, 'sm'), 'col');
}, function (props) {
  return utils.setCells(utils.getSize(props, 'sm'), 'row');
}, _breakpoints.default.md, function (props) {
  return utils.setCells(utils.getSize(props, 'md'), 'col');
}, function (props) {
  return utils.setCells(utils.getSize(props, 'md'), 'row');
}, _breakpoints.default.lg, function (props) {
  return utils.setCells(utils.getSize(props, 'lg'), 'col');
}, function (props) {
  return utils.setCells(utils.getSize(props, 'lg'), 'row');
}, _breakpoints.default.xl, function (props) {
  return utils.setCells(utils.getSize(props, 'xl'), 'col');
}, function (props) {
  return utils.setCells(utils.getSize(props, 'xl'), 'row');
});

function Cell(props) {
  return _react.default.createElement(CellDiv, props, props.children);
}

Cell.propTypes = {
  xs: _propTypes.default.arrayOf(_propTypes.default.number),
  sm: _propTypes.default.arrayOf(_propTypes.default.number),
  md: _propTypes.default.arrayOf(_propTypes.default.number),
  lg: _propTypes.default.arrayOf(_propTypes.default.number),
  xl: _propTypes.default.arrayOf(_propTypes.default.number)
};
var _default = Cell;
exports.default = _default;