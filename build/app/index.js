// node_modules
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = makeApp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _prompt = require('prompt');

var _prompt2 = _interopRequireDefault(_prompt);

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

var _libsCreateFolders = require('./libs/createFolders');

var _libsCreateFolders2 = _interopRequireDefault(_libsCreateFolders);

var _libsCreateFiles = require('./libs/createFiles');

var _libsCreateFiles2 = _interopRequireDefault(_libsCreateFiles);

var _availableFrameworksJs = require('../available-frameworks.js');

var _availableFrameworksJs2 = _interopRequireDefault(_availableFrameworksJs);

function makeApp() {
  var pathFolder = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

  _prompt2['default'].start();

  _prompt2['default'].get({
    properties: {
      appName: {
        description: 'Application name',
        type: 'String',
        pattern: /^[a-zA-Z\s\-\.]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      framework: {
        description: 'Framework (react)',
        type: 'String',
        pattern: /^[a-zA-Z\s\-\.]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true,
        'default': 'react'
      }
    }
  }, function done(error, _ref) {
    var appName = _ref.appName;
    var framework = _ref.framework;

    if (error) throw error;

    if (_availableFrameworksJs2['default'].indexOf(framework.toLowerCase()) === -1) {
      return console.error(_colors2['default'].red('Selected framework invalid.'));
    }

    var transforms = [_libsCreateFolders2['default'], _libsCreateFiles2['default']];

    var path = typeof pathFolder === 'string' ? pathFolder : false;

    var result = transforms.map(function (fn) {
      return fn(appName, framework, path);
    }).reduce(function (p, c) {
      return p === true && c === true;
    });

    if (result) {
      return console.log(_colors2['default'].green('App created'));
    }
    return console.error(_colors2['default'].red('App creator failed'));
  });
}

module.exports = exports['default'];