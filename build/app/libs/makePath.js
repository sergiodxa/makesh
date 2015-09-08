"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = makePath;

function makePath(appName) {
  var pathFolder = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

  try {
    if (pathFolder) {
      return pathFolder + "/" + appName;
    }
    return "" + appName;
  } catch (error) {
    throw error;
  }
}

module.exports = exports["default"];