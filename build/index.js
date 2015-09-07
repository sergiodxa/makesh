#!/usr/bin/env node
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

_commander2['default'].version('1.0.0').option('--path [path]', 'set path to create files');

_commander2['default'].command('app').description('Initialize an application').action(_app2['default']);

_commander2['default'].parse(process.argv);