'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.modifyBabelrc = function (_ref, options) {
  var babelrc = _ref.babelrc;

  return _extends({}, babelrc, {
    plugins: babelrc.plugins.concat([['transform-imports', options]])
  });
};