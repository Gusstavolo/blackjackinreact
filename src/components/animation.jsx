
import React, { useRef, useState, createContext, useContext } from 'react';


const DelerAnimContext = createContext({});

export const DelerAnimProvider = (props) => {
    const [animationIndex, setAnimationIndex] = useState(0);
    const [animations, setAnimations] = useState([]);
    const [currentAnimation, setCurrentAnimation] = useState(null);

    const changeAnimation = (index) => {
        setCurrentAnimation(animations[index]);
    };

    return (
        <DelerAnimContext.Provider value={{
            animationIndex,
            setAnimationIndex,
            animations,
            setAnimations,
            currentAnimation,
            changeAnimation,
        }}>
            {props.children}
        </DelerAnimContext.Provider>
    );
};

export const useDelerAnim = () => {
    return useContext(DelerAnimContext);
};

