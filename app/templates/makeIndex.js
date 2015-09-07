function makeIndex(appName) {
  return `import $ from 'jquery';
import React from 'react';

function startApp() {
  const App = require('./components/App');
  const data = window.data;
  const renderTarget = document.getElementById('${appName}');

  React.render(<App {...data} />, renderTarget);
}

if (!window.Intl) {
  $.getScript(window.intlURL, startApp);
} else {
  startApp();
}
`;
}

export default makeIndex;
