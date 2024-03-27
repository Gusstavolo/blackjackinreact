import logo from './logo.svg';
import './App.css';
import { Main, Overlayer, Phone } from './components/main';
import React, { useRef, useState, createContext, useContext } from 'react';
import Interface from './components/Interface';



function App() {

  return (
  
    <>
    <div className="App">
      
      
         <Main></Main>
          <div className='OnlyPC'>Only pc :C</div>
    </div>
       <Interface />
   </>
  );
}

export default App;
