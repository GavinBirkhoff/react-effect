"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AgreeItem = _interopRequireDefault(require("./AgreeItem"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var _CheckboxItem = _interopRequireDefault(require("./CheckboxItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_Checkbox["default"].CheckboxItem = _CheckboxItem["default"];
_Checkbox["default"].AgreeItem = _AgreeItem["default"];
var _default = _Checkbox["default"];
exports["default"] = _default;