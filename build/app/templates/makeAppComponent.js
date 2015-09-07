"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function makeAppComponent() {
  return "import React from 'react';\n\nconst App = React.createClass({\n  displayName: 'App',\n  propTypes: {\n    lang: React.PropTypes.string,\n    messages: React.PropTypes.string,\n  },\n  getDefaultProps() {\n    return {\n      lang: 'es',\n      messages: {},\n    };\n  },\n  render() {\n    return (\n      <div>\n        {/* Children */}\n      </div>\n    );\n  },\n});\n\nexport default App;\n";
}

exports["default"] = makeAppComponent;
module.exports = exports["default"];