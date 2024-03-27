import React, { useState } from 'react';
import { useDelerAnim } from './animation';
import { randomNumberInRange } from './main';

const GameDeler = () => {
    const [cardsD, setCardsD] = useState([]);
    const { changeAnimation } = useDelerAnim();
    changeAnimation(1);
    
    const handleClick = () => {
        const numD = randomNumberInRange(1, 13);
        const newCardD = { id: Date.now(), numD };
        setCardsD([...cardsD, newCardD]);
    };

    
};

export default GameDeler;
