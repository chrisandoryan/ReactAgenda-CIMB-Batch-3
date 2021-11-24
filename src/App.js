import logo from './logo.svg';
import './App.css';
import AgendaClass from './pages/AgendaClass';

import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './components/class/ErrorBoundary';

function Greeting() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi. Nama saya Boby. 
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

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <AgendaClass></AgendaClass>
      </ErrorBoundary>
    </div>
  );
}

export default App;
