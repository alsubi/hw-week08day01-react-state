import React from 'react';
import logo from './logo.svg';
import './App.css';
import Switcher from "./components/ Switcher";
function App() {
  return (
    <div className="App">
      <Switcher onOrOff="ON"/>
    </div>
  );
}

export default App;
