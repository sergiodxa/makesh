'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = template;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _templatesMakeIndex = require('../templates/makeIndex');

var _templatesMakeIndex2 = _interopRequireDefault(_templatesMakeIndex);

var _templatesMakeMessages = require('../templates/makeMessages');

var _templatesMakeMessages2 = _interopRequireDefault(_templatesMakeMessages);

var _templatesMakeAppComponent = require('../templates/makeAppComponent');

var _templatesMakeAppComponent2 = _interopRequireDefault(_templatesMakeAppComponent);

function template(type) {
  var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  if (type === 'index') {
    return (0, _templatesMakeIndex2['default'])(data.appName);
  }
  if (type === 'messages') {
    return (0, _templatesMakeMessages2['default'])();
  }
  if (type === 'appComponent') {
    return (0, _templatesMakeAppComponent2['default'])();
  }
  return null;
}

module.exports = exports['default'];