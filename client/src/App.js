import React from 'react';
import logo from './guitar-12793.png';
import './App.css';
import SignUp from './Components/Sign-up';
import LogIn from './Components/Log-in';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          U, Me, and the Kevins
        </p>
        
          <p>Let's Rock</p>
        
      </header> */}
      <LogIn />
    </div>
  );
}

export default App;
