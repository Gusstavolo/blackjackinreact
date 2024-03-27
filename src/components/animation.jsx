
import React, { useRef, useState, createContext, useContext } from 'react';


const DelerAnimContext = createContext({});

export const DelerAnimProvider = (props) => {
    const [animationIndex, setAnimationIndex] = useState(0);
    const [animations, setAnimations] = useState([]);
    const [currentAnimation, setCurrentAnimation] = useState(null);

    const changeAnimationIndex = (index) => {
        setAnimationIndex(index);
    };

    return (
        <DelerAnimContext.Provider value={{
            animationIndex,
            setAnimationIndex,
            animations,
            setAnimations,
            currentAnimation,
            changeAnimationIndex, // Adicione este método
        }}>
            {props.children}
        </DelerAnimContext.Provider>
    );
};

export const useDelerAnim = () => {
    return useContext(DelerAnimContext);
};

