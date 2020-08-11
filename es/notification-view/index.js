function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import classnames from "classnames";
import * as React from "react";
import Button from "../button/index";
import { Md5 } from "ts-md5/dist/md5";
var notification = [];
var notificationUpdate;
var intervalID = 0;

function exists(md5) {
  return notification.findIndex(function (e) {
    return e.md5 === md5;
  }) >= 0;
}

function deleteNotification(uid, result) {
  var i = notification.findIndex(function (e) {
    return e.uid === uid;
  });

  if (i >= 0) {
    var notify = notification.splice(i, 1);
    if (notify.length > 0 && notify[0].onResult !== undefined) notify[0].onResult(result);
    notificationUpdate();
  }
}

function watchNotification() {
  intervalID = window.setInterval(function () {
    var withTimer = notification.filter(function (e) {
      return e.timerS !== undefined && e.timerS > 0;
    });

    if (withTimer.length > 0) {
      withTimer.filter(function (e) {
        return Date.now() - e.created > (e.timerS !== undefined ? e.timerS : 0);
      }).forEach(function (e) {
        deleteNotification(e.uid, false);
      });
      notificationUpdate();
    } else {
      window.clearInterval(intervalID);
    }
  }, 1000);
}

export var Notification = /*#__PURE__*/function () {
  function Notification(message) {
    _classCallCheck(this, Notification);

    this.UID = ++Notification.lastUID;
    var jsx;
    var text;

    if (typeof message === "string") {
      jsx = /*#__PURE__*/React.createElement("p", {
        className: "p-text"
      }, message);
      text = message;
    } else {
      jsx = message;
      text = message.props.toString();
    }

    var i = notification.findIndex(function (e) {
      return e.text === text;
    });

    if (i < 0) {
      var md5 = Md5.hashStr(text);

      if (!exists(md5)) {
        notification.push({
          uid: this.UID,
          modal: false,
          jsx: jsx,
          text: text,
          declineButton: undefined,
          acceptButton: undefined,
          timerS: undefined,
          created: Date.now(),
          md5: md5,
          clickable: false,
          modalable: false
        });
        notificationUpdate();
      }
    } else {
      notification[i].created = Date.now();
    }
  }

  _createClass(Notification, [{
    key: "modal",
    value: function modal() {
      var n = this.find();
      if (n !== null) n.modal = true;
      return this;
    }
  }, {
    key: "clickable",
    value: function clickable() {
      var n = this.find();
      if (n !== null) n.clickable = true;
      return this;
    }
  }, {
    key: "modalable",
    value: function modalable() {
      var n = this.find();
      if (n !== null) n.modalable = true;
      return this;
    }
  }, {
    key: "declineButton",
    value: function declineButton(text) {
      var n = this.find();
      if (n !== null) n.declineButton = text;
      return this;
    }
  }, {
    key: "acceptButton",
    value: function acceptButton(text) {
      var n = this.find();
      if (n !== null) n.acceptButton = text;
      return this;
    }
  }, {
    key: "timer",
    value: function timer(timerS) {
      var n = this.find();
      if (n !== null) n.timerS = timerS;
      watchNotification();
      return this;
    }
  }, {
    key: "onResult",
    value: function onResult(_onResult) {
      var n = this.find();
      if (n !== null) n.onResult = _onResult;
      return this;
    }
  }, {
    key: "didMount",
    value: function didMount(_didMount) {
      var n = this.find();
      if (n !== null) n.didMount = _didMount;
      return this;
    }
  }, {
    key: "delete",
    value: function _delete(result) {
      deleteNotification(this.UID, result);
    }
  }, {
    key: "find",
    value: function find() {
      var _this = this;

      var i = notification.findIndex(function (e) {
        return e.uid === _this.UID;
      });

      if (i >= 0) {
        return notification[i];
      }

      return null;
    }
  }]);

  return Notification;
}();
Notification.lastUID = 0;

var NotificationView = /*#__PURE__*/function (_React$Component) {
  _inherits(NotificationView, _React$Component);

  var _super = _createSuper(NotificationView);

  function NotificationView(props) {
    var _this2;

    _classCallCheck(this, NotificationView);

    _this2 = _super.call(this, props);

    notificationUpdate = function notificationUpdate() {
      return _this2.forceUpdate();
    };

    return _this2;
  }

  _createClass(NotificationView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      watchNotification();
      this.extraDidMount();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.clearInterval(intervalID);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.extraDidMount();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          extraCoverName = _this$props.extraCoverName;
      var warpCls = classnames(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-modal"), notification.some(function (e) {
        return e.modal;
      })));
      return /*#__PURE__*/React.createElement("div", {
        className: warpCls,
        onClick: function onClick(event) {
          event.preventDefault();
          event.stopPropagation(); // notification.forEach(e => {
          //   if (!e.modalable) return
          //   deleteNotification(e.uid, false)
          // })

          var lastMess = notification[notification.length - 1];
          if (!lastMess.modalable) return;
          deleteNotification(lastMess.uid, false);
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-cover ").concat(extraCoverName ? extraCoverName : "")
      }, this.notifications()));
    }
  }, {
    key: "notifications",
    value: function notifications() {
      var _this3 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          extraMessageName = _this$props2.extraMessageName;
      var result = notification.map(function (e, i) {
        return /*#__PURE__*/React.createElement("div", {
          key: i,
          className: "".concat(prefixCls, "-message ").concat(extraMessageName ? extraMessageName : ""),
          onClick: function onClick(event) {
            event.preventDefault();
            event.stopPropagation();

            if (e.clickable || e.declineButton === undefined && e.acceptButton === undefined) {
              deleteNotification(e.uid, true);
            }
          }
        }, e.jsx, _this3.buttons(e));
      });
      return result;
    }
  }, {
    key: "hasButtons",
    value: function hasButtons(n) {
      return n.acceptButton !== undefined || n.declineButton !== undefined;
    }
  }, {
    key: "buttons",
    value: function buttons(n) {
      if (!this.hasButtons(n)) return false;
      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          extraButton = _this$props3.extraButton,
          activeName = _this$props3.activeName;
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-buttons")
      }, n.acceptButton !== undefined && /*#__PURE__*/React.createElement(Button, {
        inline: true,
        activeClassName: activeName ? activeName : "",
        className: "".concat(prefixCls, "-button ").concat(extraButton ? extraButton : ""),
        onClick: function onClick() {
          deleteNotification(n.uid, true);
        }
      }, n.acceptButton), n.declineButton !== undefined && /*#__PURE__*/React.createElement(Button, {
        inline: true,
        activeClassName: activeName,
        className: "".concat(prefixCls, "-button ").concat(extraButton ? extraButton : ""),
        onClick: function onClick() {
          deleteNotification(n.uid, false);
        }
      }, n.declineButton));
    }
  }, {
    key: "extraDidMount",
    value: function extraDidMount() {
      notification.filter(function (e) {
        return e.didMount !== undefined;
      }).forEach(function (e) {
        if (e.didMount !== undefined) {
          e.didMount();
          e.didMount = undefined;
        }
      });
    }
  }]);

  return NotificationView;
}(React.Component);

NotificationView.Notification = Notification;
NotificationView.defaultProps = {
  prefixCls: "pm-notification"
};
export default NotificationView;