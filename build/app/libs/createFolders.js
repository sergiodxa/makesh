'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = createFolders;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mkpath = require('mkpath');

var _mkpath2 = _interopRequireDefault(_mkpath);

var _appExists = require('./appExists');

var _appExists2 = _interopRequireDefault(_appExists);

var _makePath = require('./makePath');

var _makePath2 = _interopRequireDefault(_makePath);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

function createFolders(appName, framework) {
  var pathFolder = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

  try {
    if ((0, _appExists2['default'])(appName, pathFolder)) {
      _fsExtra2['default'].copySync((0, _makePath2['default'])(appName, pathFolder), 'tmp');
      _fsExtra2['default'].removeSync((0, _makePath2['default'])(appName, pathFolder));
      _fsExtra2['default'].copySync('tmp', (0, _makePath2['default'])(appName, pathFolder) + '/legacy');
      _fsExtra2['default'].removeSync('tmp');
    }
    if (framework === 'react') {
      _mkpath2['default'].sync('' + (0, _makePath2['default'])(appName, pathFolder));
      _mkpath2['default'].sync((0, _makePath2['default'])(appName, pathFolder) + '/components');
      _mkpath2['default'].sync((0, _makePath2['default'])(appName, pathFolder) + '/stores');
      _mkpath2['default'].sync((0, _makePath2['default'])(appName, pathFolder) + '/actions');
    }

    return true;
  } catch (error) {
    throw error;
  }
}

module.exports = exports['default'];