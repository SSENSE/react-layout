'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\t@media (max-width: ', ') {\n\t\tgrid-column: ', ';\n\t\tgrid-row: ', ';\n\t}\n\t@media (min-width: ', ') {\n\t\tgrid-column: ', ';\n\t\tgrid-row: ', ';\n\t}\n\t@media (min-width: ', ') {\n\t\tgrid-column: ', ';\n\t\tgrid-row: ', ';\n\t}\n\t@media (min-width: ', ') {\n\t\tgrid-column: ', ';\n\t\tgrid-row: ', ';\n\t}\n\t@media (min-width: ', ') {\n\t\tgrid-column: ', ';\n\t\tgrid-row: ', ';\n\t}\n'], ['\n\t@media (max-width: ', ') {\n\t\tgrid-column: ', ';\n\t\tgrid-row: ', ';\n\t}\n\t@media (min-width: ', ') {\n\t\tgrid-column: ', ';\n\t\tgrid-row: ', ';\n\t}\n\t@media (min-width: ', ') {\n\t\tgrid-column: ', ';\n\t\tgrid-row: ', ';\n\t}\n\t@media (min-width: ', ') {\n\t\tgrid-column: ', ';\n\t\tgrid-row: ', ';\n\t}\n\t@media (min-width: ', ') {\n\t\tgrid-column: ', ';\n\t\tgrid-row: ', ';\n\t}\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _breakpoints = require('../breakpoints');

var _breakpoints2 = _interopRequireDefault(_breakpoints);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
			if (props[0] === '*') return '1 / -1';
			return props[0] + ' / ' + props[1];
		}

		if (type === 'row') {
			if (props[0] === '*') return '';
			return props[2] + ' / ' + props[3];
		}
	}
};

var CellDiv = _styledComponents2.default.div(_templateObject, _breakpoints2.default.xs, function (props) {
	return utils.setCells(utils.getSize(props, 'xs'), 'col');
}, function (props) {
	return utils.setCells(utils.getSize(props, 'xs'), 'row');
}, _breakpoints2.default.sm, function (props) {
	return utils.setCells(utils.getSize(props, 'sm'), 'col');
}, function (props) {
	return utils.setCells(utils.getSize(props, 'sm'), 'row');
}, _breakpoints2.default.md, function (props) {
	return utils.setCells(utils.getSize(props, 'md'), 'col');
}, function (props) {
	return utils.setCells(utils.getSize(props, 'md'), 'row');
}, _breakpoints2.default.lg, function (props) {
	return utils.setCells(utils.getSize(props, 'lg'), 'col');
}, function (props) {
	return utils.setCells(utils.getSize(props, 'lg'), 'row');
}, _breakpoints2.default.xl, function (props) {
	return utils.setCells(utils.getSize(props, 'xl'), 'col');
}, function (props) {
	return utils.setCells(utils.getSize(props, 'xl'), 'row');
});

function Cell(props) {
	return _react2.default.createElement(
		CellDiv,
		props,
		props.children
	);
}

Cell.propTypes = {
	xs: _propTypes2.default.arrayOf(_propTypes2.default.number),
	sm: _propTypes2.default.arrayOf(_propTypes2.default.number),
	md: _propTypes2.default.arrayOf(_propTypes2.default.number),
	lg: _propTypes2.default.arrayOf(_propTypes2.default.number),
	xl: _propTypes2.default.arrayOf(_propTypes2.default.number)
};

exports.default = Cell;