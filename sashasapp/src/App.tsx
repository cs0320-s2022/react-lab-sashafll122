import React from 'react';
import logo from './logo.svg';
import './App.css';
import Horoscope from "./Horoscope";
import axios from 'axios';
// @ts-ignore
import TextBox from './TextBox';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Horoscope/>
      </header>
    </div>
  );
}

export default App;
