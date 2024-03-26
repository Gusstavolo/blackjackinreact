import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { OrbitControls } from '@react-three/drei';
import React, { useRef, useState, createContext, useContext } from 'react';
import styled from 'styled-components';
import { CardsLOt } from './components/mesa.jsx';


const CardStyleH1 = styled.h1`
    font-size: 4rem;
    color: white;
`;

function App() {

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
    const mesh = useRef();
    const [cards, setCards] = useState([]);

    console.log("Valores das cartas:", cards);

    const CardClick = ({ onClick }) => {
        const mesh = useRef();
        const [hovered, setHover] = useState(false);
    
        return (
            <CardsLOt
                ref={mesh}
                onClick={onClick}
            ></CardsLOt>
        );
    };
    
    const handleClick = () => {
        const num = randomNumberInRange(1, 13);
        const newCard = { id: Date.now(), num };
        setCards([...cards, newCard]);
    };




  return (
    <div className="App">
      <div className='CanvasS'> 
      <Canvas>
              <OrbitControls></OrbitControls>
                <Experience>
                  
                </Experience>
                <CardsLOt onClick={handleClick}/>
        </Canvas>
      </div>
      
        
          <footer>
          <div className='OrganizeCards'>
                {cards.map((card, index) => (
                    <div key={card.id} className='card'>
                        <CardStyleH1>
                            {card.num}
                        </CardStyleH1>
                    </div>
                ))}
            </div>
          </footer>
          
         
     
    </div>
  );
}

export default App;
