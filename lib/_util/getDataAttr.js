"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if (key.substr(0, 5) === "aria-" || key.substr(0, 5) === "data-" || key === "role") {
      prev[key] = props[key];
    }

    return prev;
  }, {});
};

exports["default"] = _default;