'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = createFiles;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _getTemplate = require('./getTemplate');

var _getTemplate2 = _interopRequireDefault(_getTemplate);

var _makePath = require('./makePath');

var _makePath2 = _interopRequireDefault(_makePath);

function createFiles(appName, framework) {
  var pathFolder = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

  try {
    if (framework === 'react') {
      _fs2['default'].writeFileSync((0, _makePath2['default'])(appName, pathFolder) + '/index.js', (0, _getTemplate2['default'])('index', appName));

      _fs2['default'].writeFileSync((0, _makePath2['default'])(appName, pathFolder) + '/messages.json', (0, _getTemplate2['default'])('messages'));

      _fs2['default'].writeFileSync((0, _makePath2['default'])(appName, pathFolder) + '/components/App.jsx', (0, _getTemplate2['default'])('appComponent'));
    }

    return true;
  } catch (error) {
    throw error;
  }
}

module.exports = exports['default'];