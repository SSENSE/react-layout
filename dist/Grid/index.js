'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\tdisplay: grid;\n\t@media (max-width: ', ') {\n\t\tgrid-template-columns: ', ';\n\t\tgrid-template-rows: ', ';\n\t}\n\t@media (min-width: ', ') {\n\t\tgrid-template-columns: ', ';\n\t\tgrid-template-rows: ', ';\n\t}\n\t@media (min-width: ', ') {\n\t\tgrid-template-columns: ', ';\n\t\tgrid-template-rows: ', ';\n\t}\n\t@media (min-width: ', ') {\n\t\tgrid-template-columns: ', ';\n\t\tgrid-template-rows: ', ';\n\t}\n\t@media (min-width: ', ') {\n\t\tgrid-template-columns: ', ';\n\t\tgrid-template-rows: ', ';\n\t}\n'], ['\n\tdisplay: grid;\n\t@media (max-width: ', ') {\n\t\tgrid-template-columns: ', ';\n\t\tgrid-template-rows: ', ';\n\t}\n\t@media (min-width: ', ') {\n\t\tgrid-template-columns: ', ';\n\t\tgrid-template-rows: ', ';\n\t}\n\t@media (min-width: ', ') {\n\t\tgrid-template-columns: ', ';\n\t\tgrid-template-rows: ', ';\n\t}\n\t@media (min-width: ', ') {\n\t\tgrid-template-columns: ', ';\n\t\tgrid-template-rows: ', ';\n\t}\n\t@media (min-width: ', ') {\n\t\tgrid-template-columns: ', ';\n\t\tgrid-template-rows: ', ';\n\t}\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _breakpoints = require('../breakpoints');

var _breakpoints2 = _interopRequireDefault(_breakpoints);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var utils = {
	setCells: function setCells(cells) {
		var cssReturn = '';

		for (var i = 0; i < cells; i += 1) {
			cssReturn += '1fr ';
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

var GridDiv = _styledComponents2.default.div(_templateObject, _breakpoints2.default.xs, function (props) {
	return 'repeat(' + utils.responsive(props, 'xs', 0) + ', auto)';
}, function (props) {
	return 'repeat(' + utils.responsive(props, 'xs', 1) + ', auto)';
}, _breakpoints2.default.sm, function (props) {
	return 'repeat(' + utils.responsive(props, 'sm', 0) + ', auto)';
}, function (props) {
	return 'repeat(' + utils.responsive(props, 'sm', 1) + ', auto)';
}, _breakpoints2.default.md, function (props) {
	return 'repeat(' + utils.responsive(props, 'md', 0) + ', auto)';
}, function (props) {
	return 'repeat(' + utils.responsive(props, 'md', 1) + ', auto)';
}, _breakpoints2.default.lg, function (props) {
	return 'repeat(' + utils.responsive(props, 'lg', 0) + ', auto)';
}, function (props) {
	return 'repeat(' + utils.responsive(props, 'lg', 1) + ', auto)';
}, _breakpoints2.default.xl, function (props) {
	return 'repeat(' + utils.responsive(props, 'xl', 0) + ', auto)';
}, function (props) {
	return 'repeat(' + utils.responsive(props, 'xl', 1) + ', auto)';
});

var Grid = function (_Component) {
	_inherits(Grid, _Component);

	function Grid() {
		_classCallCheck(this, Grid);

		return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
	}

	_createClass(Grid, [{
		key: 'renderChildren',
		value: function renderChildren() {
			var _this2 = this;

			var children = this.props.children;


			return _react2.default.Children.map(children, function (child) {
				return _react2.default.cloneElement(child, {
					parent: _this2.props
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				GridDiv,
				this.props,
				this.renderChildren()
			);
		}
	}]);

	return Grid;
}(_react.Component);

Grid.propTypes = {
	xs: _propTypes2.default.arrayOf(_propTypes2.default.number),
	sm: _propTypes2.default.arrayOf(_propTypes2.default.number),
	md: _propTypes2.default.arrayOf(_propTypes2.default.number),
	lg: _propTypes2.default.arrayOf(_propTypes2.default.number),
	xl: _propTypes2.default.arrayOf(_propTypes2.default.number)
};

exports.default = Grid;