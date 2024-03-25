
import styled from 'styled-components';
import { CardsLOt } from './mesa';
import '../App.css';
import { Canvas } from '@react-three/fiber';
import React, { useRef, useState, createContext, useContext } from 'react';


const CardStyle = styled.div`
    display: flex;
    width: 150px;
    height: 230px;
    border-radius: 10%;
    background: black;
`;

const CardStyleH1 = styled.h1`
    font-size: 4rem;
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
    const mesh = useRef();
    const [hovered, setHover] = useState(false);

    const [cards, setCards] = useState([]);
    console.log("Valores das cartas:", cards);
    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

     const handleClick = () => {
        const num = randomNumberInRange(1, 13); // Gerar o número antes de definir o card
        const newCard = { id: Date.now(), num }; // criar um novo objeto carta com um id único baseado no timestamp atual
        setCards([...cards, newCard]); // Adicionar o novo card à matriz de cards
    }

    return (
        <>  
       
                     <div className='OrganizeCards'>
                            {cards.map((card, index) => (
                                <div key={card.id} className='card'>
                                    
                                        <CardStyleH1>
                                            {card.num}
                                        </CardStyleH1>
                                
                                </div>
                            ))}
                         </div>

                         
            
            
        
            
        </>
    );
    
}
export const CanvasCardGen = () => { // Recebendo a função handleClick como propriedade
    const mesh = useRef();
    const [hovered, setHover] = useState(false);

    return (
     

            <>
        
                                    <CardsLOt
                                ref={mesh}
                                onClick={GenerateCards.handleClick} // Chamando a função handleClick quando houver um clique
                                onPointerOver={() => setHover(true)}
                                onPointerOut={() => setHover(false)}
                            />
                          
                            
                            </>
        
           
    );
}

