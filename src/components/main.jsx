
import '../App.css';
import { Canvas } from '@react-three/fiber';
import { Experience } from '../components/Experience';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import React, { useRef, useState, createContext, useContext } from 'react';
import styled from 'styled-components';
import { CardsLOt, DoneB } from '../components/mesa.jsx';


const CardStyleH1 = styled.h1`
    font-size: 4rem;
    color: white;
`;
const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function Main() {

  
    const [cards, setCards] = useState([]);

    console.log("Valores das cartas:", cards);
    
    const handleClick = () => {
        const num = randomNumberInRange(1, 13);
        const newCard = { id: Date.now(), num };
        setCards([...cards, newCard]);
    };




  return (
    <>
     
    <div >
      
      <div className='CanvasS'> <Canvas shadows async>
              <OrbitControls></OrbitControls>
              <PerspectiveCamera makeDefault fov={65} near={0.5} far={100} position={[4, 0.2, 0]} />

                <Experience>
                  
                </Experience>
                <CardsLOt onClick={handleClick}/>
                <DoneB />
        </Canvas></div>
       
     
      
        
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
   
    </>)}

export function Overlayer(){
    return(
        <div className='overLayer'>
        <div className='MainOver'> </div>
        </div>
    )
}