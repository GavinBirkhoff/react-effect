"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _index["default"];
  }
});
Object.defineProperty(exports, "touchEffect", {
  enumerable: true,
  get: function get() {
    return _index2["default"];
  }
});

var _index = _interopRequireDefault(require("./button/index"));

var _index2 = _interopRequireDefault(require("./touch-effect/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ENV = process.env.NODE_ENV;

if (ENV !== "production" && ENV !== "test" && typeof console !== "undefined" && console.warn && typeof window !== "undefined") {
  // tslint:disable-next-line:no-console
  console.warn("You are using a whole package of react-pearls");
}