import React from 'react';
import logo from './logo.svg';
import './App.css';

interface AppProps {}

function App({}: AppProps) {

  const name = "Pylly"

  const person = { first: name }

  console.log(person)

  const sayHelloLinting = (fName) => {
    console.log(`Hello linting, ${fName}`);
  }

  console.log("LEJEJ")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
