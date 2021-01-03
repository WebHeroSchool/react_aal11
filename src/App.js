import logo from './logo.svg';
import './App.css';


const flag = true;
const count = 7;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Hello World!
        </p>
        <p>
          {count},
          {21},
          {7+7},
          {flag && 'FLAG'},
          {flag ? 'flag is true': 'flag is false'},
          {undefined},
          {null},
          {false},
          {true}
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
