"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = void 0;

// eslint-disable-next-line @typescript-eslint/no-empty-function
function noop() {}

var defaultProps = {
  prefixCls: "pm-search",
  placeholder: "",
  onSubmit: noop,
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
  onClear: noop,
  showCancelButton: false,
  disabled: false
};
exports.defaultProps = defaultProps;