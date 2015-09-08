'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = appExists;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _makePath = require('./makePath');

var _makePath2 = _interopRequireDefault(_makePath);

function appExists(appName, pathFolder) {
  try {
    return _fs2['default'].existsSync((0, _makePath2['default'])(appName, pathFolder));
  } catch (error) {
    throw error;
  }
}

module.exports = exports['default'];