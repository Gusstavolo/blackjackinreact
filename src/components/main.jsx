
import '../App.css';
import { Canvas } from '@react-three/fiber';
import { Experience } from '../components/Experience';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import React, { useRef, useState, createContext, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { CardsLOt, DoneB,Deler } from '../components/mesa.jsx';
import { DelerAnimProvider,useDelerAnim } from './animation.jsx';
import GameDeler from './DelerConfig.jsx';
const CardStyleH1 = styled.h1`
    font-size: 4rem;
    color: white;
`;
export const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};





export const Main = () => {
    const mesh = useRef();
    const [hovered, setHover] = useState(false);
    const [cards, setCards] = useState([]);
    const [isVisible, setIsVisible] = useState(true);
    const [isVisibleEND, setIsVisibleEND] = useState(false);
    const { changeAnimationIndex } = useDelerAnim();

    
    const clickEND = () => {
        setIsVisibleEND(true); // Define isVisible como false quando a div é clicada
    };


    const click = () => {
        setIsVisible(false); // Define isVisible como false quando a div é clicada
    };

    const handleClick = () => {
        const num = randomNumberInRange(1, 13);
        const newCard = { id: Date.now(), num };
        setCards([...cards, newCard]);
    };

    
    const [cardsDeler, setCardsDeler] = useState([]);
    const handleClickDeler = () => {
        const numDeler = randomNumberInRange(1, 13);
        const newCardDeler = { id: Date.now(), numDeler };
        setCardsDeler([...cardsDeler, newCardDeler]);
    };

    let nextIdD = 1;
   const addCard = () => {
            const num = randomNumberInRange(1, 13);
            const newCard = { id:  nextIdD++, num };
            setCards(prevCards => [...prevCards, newCard]);
        };
      

    useEffect(() => {
       
        
        
        // Chamando a função apenas se isVisible for false
        if (!isVisible) {
            setTimeout(() => {
                addCard();// Muda para a animação 1
            }, 300);
            setTimeout(() => {
                addCard();// Muda para a animação 1
            }, 900);
            
        }
    }, [isVisible]);


    const [isAnimation2Completed, setIsAnimation2Completed] = useState(false);
    const [isAnimation2Completed2, setIsAnimation2Completed2] = useState(false);
    const [isAnimation2Completed3, setIsAnimation2Completed3] = useState(false);

    let nextId = 1;
    const addCardDeler = () => {
        const numDeler = randomNumberInRange(1, 13);
        const newCardDeler = { id: nextId++, numDeler };
        setCardsDeler(prevCardsDeler => [...prevCardsDeler, newCardDeler]);
    };

useEffect(() => {
    
    // Chamando a função apenas se isVisible for false
    if (!isVisible) {
        // Executa a animação 2 e define isAnimation2Completed como true
        addCardDeler();
        addCardDeler(); 
        setIsAnimation2Completed(true);
    }
    else{
        changeAnimationIndex(5);
    }
}, [isVisible]);

useEffect(() => {
    if(isAnimation2Completed){
        changeAnimationIndex(2);
        setTimeout(() => {
            setIsAnimation2Completed(false);
            setIsAnimation2Completed2(true);
        }, 7000);
    }
}, [isAnimation2Completed, changeAnimationIndex]);


useEffect(() => {
    if(isAnimation2Completed2){
        changeAnimationIndex(4);
        setTimeout(() => {
            setIsAnimation2Completed(false);
            setIsAnimation2Completed3(true);
        }, 2000);
    }
}, [isAnimation2Completed2, changeAnimationIndex]);

useEffect(() => {
    if(isAnimation2Completed3){
        changeAnimationIndex(1);

    }
}, [isAnimation2Completed3, changeAnimationIndex]);

useEffect(() => {
    // Chamando a função apenas quando Acabar
    if (isVisibleEND) {
        changeAnimationIndex(5);
    }
}, [isVisibleEND, changeAnimationIndex]);






const determineWinner = (totalPlayer, totalDeler) => {
    const playerDifference = Math.max(21 - totalPlayer, 0);
    const dealerDifference = Math.max(21 - totalDeler, 0);

    if (totalPlayer === 21 || (totalDeler > 21 && totalPlayer <= 21) || (playerDifference < dealerDifference && totalPlayer <= 21)) {
        return "Player";
    } else if (totalDeler === 21 || (totalPlayer > 21 && totalDeler <= 21) || (dealerDifference < playerDifference && totalDeler <= 21)) {
        return "Dealer";
    } else if (totalDeler === 21 && totalPlayer === 21 ){
        return "Empate";
    }
    else{
        return "Empate";
    }
};

// Determinar o vencedor



const totalDeler = cardsDeler.reduce((accumulator, currentCard) => accumulator + currentCard.numDeler, 0);
const totalPlayer = cards.reduce((accumulator, currentCard) => accumulator + currentCard.num, 0);

const winner = determineWinner(totalPlayer, totalDeler);
const [deler21, setdeler21] = useState(false);


useEffect(() => {
    if(totalDeler === 21 && !isVisible){
        setdeler21(true);
    }

    if(deler21 && !isVisibleEND){
        changeAnimationIndex(3);

        setTimeout(() => {
            clickEND();
            setdeler21(false);
        }, 2000);
    }
}, [deler21, changeAnimationIndex]);

  return (
    <>
     
    <div >
      
      <div className='CanvasS'> <Canvas shadows async>
              <OrbitControls></OrbitControls>
              <PerspectiveCamera makeDefault fov={65} near={0.5} far={100} position={[4, 0.2, 0]} />

                <Experience>
                  
                </Experience>
                <CardsLOt 
                
                onClick={handleClick}
               />
                <DoneB 
                
                onClick={clickEND}
                
              />
                <Deler></Deler>
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
         
          
         
          <Overlayer isVisible={isVisible} click={click} />
                    
                    
                    
         <OverlayerENDGAME isVisibleEND={!isVisibleEND} totalDeler={totalDeler} totalPlayer={totalPlayer} winner={winner} />
    </div>
   
    </>)}


const Overlayer = ({ isVisible, click }) => {
    
    return (
        <div className={isVisible ? 'overLayer' : 'overLayer hidden'}>
            <div className='MainOver'>
                {/* Utilizando a função click recebida como propriedade */}
                <div onClick={click} className='ButJogar'>
                    JOGAR
                </div>
            </div>
        </div>
    );
};
const OverlayerENDGAME = ({ isVisibleEND,totalDeler, totalPlayer, winner }) => {
    return (
        <div className={isVisibleEND ? 'overLayerEND' : 'overLayerEND show'}>
            <div className='MainOverEND'>
                <div className={winner === 'Dealer' ? 'mainSideDeler winner' : 'mainSideDeler'}>
                    <div className='topMainEnd'>
                        <div className='h1deler'> Dealer</div>
                    </div>
                    <div className='topMainEnd'>
                    <div className='h1Pts'>{totalDeler} Pts</div>
                    </div>
                    
                </div>
                <div className={winner === 'Player' ? 'mainSidePlayer winner' : 'mainSidePlayer'}>

                     <div className='topMainEnd'>
                       <div className='h1player'>Player</div>
                    </div>

                    <div className='topMainEnd'>
                        <div className='h1Pts'>{totalPlayer} Pts</div>
                    </div>
                    
                </div>
               
            </div>
            <div className='Result'>
                        <div className='h1Pts'>{winner}</div>
                    </div>
        </div>
    );
};

export default Main;