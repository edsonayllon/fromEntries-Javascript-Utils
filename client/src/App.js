import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {pick, invert, mapObject, findKey} from './utils';

function App() {
  const tests = () => {
    const address = {
      street: 'Evergreen Terrace',
      number: '742',
      city: 'Springfield',
      state: 'NT',
      zip: '49007',
    };
    const picked = pick(address, 'street', 'number');
    console.log(picked);

    const inverted = invert({a: 1, b: 2, c: 3});
    console.log(inverted);

    const mapped = mapObject({x: 7, y: 4}, value => value * 2);
    console.log(mapped);

    const keyFound = findKey(address, (value, _key) => value === 'NT');
    console.log(keyFound);
  }

  useEffect(()=>{
    tests();
  },[])

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
      </header>
    </div>
  );
}

export default App;
