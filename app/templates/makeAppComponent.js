function makeAppComponent() {
  return `import React from 'react';

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
`;
}

export default makeAppComponent;
