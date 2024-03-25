import '../App.css';
import { createElement } from 'react';
import styled from 'styled-components';
import React, { useState } from "react";

let ChangerCard = ('./models/cards/cardsss.png')


export const CardStyle = styled.div`
        display: flex;
        width: 150px;
        height: 230px;
        border-radius: 10%;
        background: black;
        
`;
const CardStyleH1 = styled.h1`

color: white;

`;



export const ButtonCard = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Click me
    </button>
  );
}

export const GenerateCards = () => {
    
    
    
    
    const [cards, setCards] = useState([]);
  
    const randomNumberInRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  
    const handleClick = () => {
      const num = randomNumberInRange(1, 13); // Gerar o número antes de definir o card
      setCards([...cards, test(num)]); // Adicionar um novo card com o número gerado
    }
  
    const test = (num) => {
      return (
        <div className='card'>
          <CardStyleH1>
            {num}
          </CardStyleH1>
        </div>
      );
    }
  




    return (
    <><ButtonCard onClick={handleClick} />
      
        <div className='OrganizeCards'>
            
                {cards.map((card, index) => (
                <div key={index}>{card}</div>
            ))}
                
        </div>
    </>
    )
}