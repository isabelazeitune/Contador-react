// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//import './styles/contador.css'
import React, {Component} from 'react';
import Contador from './componentes/contador'

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//         Olá, mundo!
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

//export default App;

class App extends Component {
  render() {
    return <Contador />
  }
}

export default App;