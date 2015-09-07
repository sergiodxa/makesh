'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = createFolders;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mkpath = require('mkpath');

var _mkpath2 = _interopRequireDefault(_mkpath);

function createFolders(appName, framework) {
  var pathFolder = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

  try {
    if (framework === 'react') {
      if (pathFolder) {
        _mkpath2['default'].sync(pathFolder + '/' + appName);
        _mkpath2['default'].sync(pathFolder + '/' + appName + '/components');
        _mkpath2['default'].sync(pathFolder + '/' + appName + '/stores');
        _mkpath2['default'].sync(pathFolder + '/' + appName + '/actions');
      } else {
        _mkpath2['default'].sync('' + appName);
        _mkpath2['default'].sync(appName + '/components');
        _mkpath2['default'].sync(appName + '/stores');
        _mkpath2['default'].sync(appName + '/actions');
      }
    }
    return true;
  } catch (error) {
    throw error;
  }
}

module.exports = exports['default'];