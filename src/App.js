import logo from './logo.svg';
import './App.css';
import { Main, Overlayer, Phone } from './components/main';
import React, { useRef, useState, createContext, useContext } from 'react';




function App() {

  return (
  
    
    <div className="App">
      
      
         <Main></Main>
          <Overlayer></Overlayer>
          <div className='OnlyPC'>Only pc :C</div>
    </div>
   
   
  );
}

export default App;
