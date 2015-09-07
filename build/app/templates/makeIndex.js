"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function makeIndex(appName) {
  return "import $ from 'jquery';\nimport React from 'react';\n\nfunction startApp() {\n  const App = require('./components/App');\n  const data = window.data;\n  const renderTarget = document.getElementById('" + appName + "');\n\n  React.render(<App {...data} />, renderTarget);\n}\n\nif (!window.Intl) {\n  $.getScript(window.intlURL, startApp);\n} else {\n  startApp();\n}\n";
}

exports["default"] = makeIndex;
module.exports = exports["default"];