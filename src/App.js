import logo from './logo.svg';
import './App.css';
import AgendaClass from './pages/AgendaClass';
import AgendaFunction from './pages/AgendaFunction';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './components/class/ErrorBoundary';
import AgendaNavbar from './components/class/AgendaNavbar';


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

function RouteComponent() {
  // Routes:
  // /home
  // /agendaClass
  // /agendaFunction
  return (
    <Router>
      <AgendaNavbar />
      <Routes>
        <Route path="/" element={<Greeting />}></Route>
        <Route path="/agendaClass" element={<AgendaClass />}></Route>
        <Route path="/agendaFunction" element={<AgendaFunction editMode={false} />}></Route>
      </Routes>
    </Router>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
          <RouteComponent />
      </div>
    </ErrorBoundary>
  );
}

export default App;
