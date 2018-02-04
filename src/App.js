import React from 'react';
import Clock from './containers/Clock'

const App = () => {
  return (
    <div className="tc white pv7">
      <h1 className="f1 ma0">Hello Kawana</h1>
      <Clock attr="f2 ma3"/>
    </div>
  );
}

export default App;