"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IS_IOS = exports.canUseDOM = void 0;
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
var IS_IOS = canUseDOM && /iphone|ipad|ipod/i.test(window.navigator.userAgent);
exports.IS_IOS = IS_IOS;