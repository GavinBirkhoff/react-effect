function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import classnames from "classnames";
import * as React from "react";

var DockContent = /*#__PURE__*/function (_React$Component) {
  _inherits(DockContent, _React$Component);

  var _super = _createSuper(DockContent);

  function DockContent() {
    _classCallCheck(this, DockContent);

    return _super.apply(this, arguments);
  }

  _createClass(DockContent, [{
    key: "render",
    value: function render() {
      var prefixCls = this.props.prefixCls;
      var wrapCls = classnames(prefixCls);
      return /*#__PURE__*/React.createElement("div", {
        className: wrapCls
      }, this.createDockContent());
    }
  }, {
    key: "dockable",
    value: function dockable(d) {
      // prefer given JSX with highest priority
      // otherwise try to find from existing dockables
      var jsx = d.jsx;

      if (jsx === undefined) {
        // something is wrong, no valid JSX nor CSS found
        if (d.style === undefined) jsx = /*#__PURE__*/React.createElement("span", null, "?");else {
          // CSS string or React style ?
          if (typeof d.style === "string") jsx = /*#__PURE__*/React.createElement("div", {
            className: d.style
          });else jsx = /*#__PURE__*/React.createElement("div", {
            style: d.style
          });
        }
      }

      if (d.style !== undefined) {
        // CSS string or React style ?
        if (typeof d.style === "string") return /*#__PURE__*/React.createElement("div", {
          className: d.style
        }, jsx);else return /*#__PURE__*/React.createElement("div", {
          style: d.style
        }, jsx);
      }

      if (jsx instanceof Array) return /*#__PURE__*/React.createElement("div", {
        className: "".concat(this.props.prefixCls, "-sub")
      }, jsx);
      return jsx;
    }
  }, {
    key: "createDock",
    value: function createDock(dock, dockbar, container, style) {
      var _classnames, _classnames2;

      var last = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var userCSS = typeof style === "string" ? style : "";
      var userStyle = typeof style !== "string" ? style : undefined;
      var preContainer = "pm-container";
      var preDockbar = "pm-dockbar";
      var containerCls = classnames(preContainer, (_classnames = {}, _defineProperty(_classnames, "".concat(preContainer, "-top"), dock === "top"), _defineProperty(_classnames, "".concat(preContainer, "-right"), dock === "right"), _defineProperty(_classnames, "".concat(preContainer, "-bottom"), dock === "bottom"), _defineProperty(_classnames, "".concat(preContainer, "-left"), dock === "left"), _defineProperty(_classnames, "".concat(preContainer, "-last"), last), _classnames));
      var dockbarCls = classnames(preDockbar, userCSS, (_classnames2 = {}, _defineProperty(_classnames2, "".concat(preDockbar, "-top"), dock === "top"), _defineProperty(_classnames2, "".concat(preDockbar, "-right"), dock === "right"), _defineProperty(_classnames2, "".concat(preDockbar, "-bottom"), dock === "bottom"), _defineProperty(_classnames2, "".concat(preDockbar, "-left"), dock === "left"), _classnames2));
      return /*#__PURE__*/React.createElement("div", {
        className: containerCls
      }, /*#__PURE__*/React.createElement("div", {
        className: dockbarCls,
        style: userStyle
      }, dockbar), container);
    }
  }, {
    key: "createDockContent",
    value: function createDockContent() {
      var _this = this;

      // how the dockbar(s) around the main view are arranged
      var key = 1;
      var dock = this.props.layout.map(function (e) {
        return {
          dock: e.dock,
          style: e.style,
          jsx: e.dockables.map(function (d) {
            return /*#__PURE__*/React.cloneElement(_this.dockable(d), {
              key: key++
            });
          })
        };
      });

      if (dock.length > 0) {
        var create = function create(d) {
          var first = d[0];
          if (d.length === 1) return _this.createDock(first.dock, first.jsx, _this.props.children, first.style, true);
          return _this.createDock(first.dock, first.jsx, create(d.splice(1)), first.style);
        };

        return create(dock);
      }

      return this.props.children;
    }
  }]);

  return DockContent;
}(React.Component);

DockContent.defaultProps = {
  prefixCls: "pm-dock"
};
export default DockContent;