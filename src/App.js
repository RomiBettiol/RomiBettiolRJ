import logo from './logo.svg';
import './App.css';
import Modulo1 from './Modulo1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Equipo - Bienvenidos
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prueba uno
        </a>
      </header>

      <Modulo1/>

    </div>
  );
}

export default App;
