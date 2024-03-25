import '../App.css';
import { createElement } from 'react';
import styled from 'styled-components';
import { useState } from 'react';

var ChangerCard = ('./models/cards/cardsss.png')


export const CardStyle = styled.div`
        display: flex;
        width: 150px;
        height: 230px;
        border-radius: 10%;
        background: black;
        
`;


export const test = () => {
    return (
        <div className='card'>
            {/* Conteúdo do card */}
        </div>
    );
}

export const ButtonCard = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Click me
    </button>
  );
}

export const GenerateCards = () => {
    const [cards, setCards] = useState([]);

    const handleClick = () => {
        setCards([...cards, test()]);
        console.log('aaaaaa');
    }

    return (
    <><ButtonCard onClick={handleClick} />
      
        <div className='OrganizeCards'>
            
            {cards}
            {/* Outros cards */}
        </div>
    </>
    )
}