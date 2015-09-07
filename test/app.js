import makeAppComponent from '../app/templates/makeAppComponent';
import makeIndex from '../app/templates/makeIndex';
import makeMessages from '../app/templates/makeMessages';
import test from 'tape';

test('Make App Component', t => {
  t.plan(1);

  const appComponentFile = makeAppComponent();

  t.equal(appComponentFile, `import React from 'react';

const App = React.createClass({
  displayName: 'App',
  propTypes: {
    lang: React.PropTypes.string,
    messages: React.PropTypes.string,
  },
  getDefaultProps() {
    return {
      lang: 'es',
      messages: {},
    };
  },
  render() {
    return (
      <div>
        {/* Children */}
      </div>
    );
  },
});

export default App;
`, 'components/App.jsx');
});

test('Make Index', t => {
  t.plan(1);

  const indexFile = makeIndex('TestApp');

  t.equal(indexFile, `import $ from 'jquery';
import React from 'react';

function startApp() {
  const App = require('./components/App');
  const data = window.data;
  const renderTarget = document.getElementById('TestApp');

  React.render(<App {...data} />, renderTarget);
}

if (!window.Intl) {
  $.getScript(window.intlURL, startApp);
} else {
  startApp();
}
`, 'index.js template file');
});

test('Make Messages', t => {
  t.plan(1);

  const messagesFile = makeMessages('messages');

  t.equal(messagesFile, `{
  "en": {},
  "es": {}
}
`, 'messages.json template file');
});
