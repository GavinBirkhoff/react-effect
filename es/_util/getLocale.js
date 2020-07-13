function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

export function getComponentLocale(props, context, componentName, getDefaultLocale) {
  var locale = {};

  if (context && context.antLocale && context.antLocale[componentName]) {
    locale = context.antLocale[componentName];
  } else {
    var defaultLocale = getDefaultLocale();
    locale = defaultLocale["default"] || defaultLocale;
  }

  var result = _extends({}, locale);

  if (props.locale) {
    result = _extends(_extends({}, result), props.locale);

    if (props.locale.lang) {
      result.lang = _extends(_extends({}, locale.lang), props.locale.lang);
    }
  }

  return result;
}
export function getLocaleCode(context) {
  var localeCode = context.antLocale && context.antLocale.locale; // Had use LocaleProvide but didn't set locale

  if (context.antLocale && context.antLocale.exist && !localeCode) {
    return "zh-cn";
  }

  return localeCode;
}