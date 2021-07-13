import { useState }  from 'react';

import Component from './Component';
import logo from './logo.svg';
import './App.css';

function App() {
  const [flag, setFlag] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => setFlag(value => !value)}>Toggle</button>
        { flag && <Component /> }
      </header>
    </div>
  );
}

export default App;
