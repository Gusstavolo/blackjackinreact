
import React, { useRef, useState, createContext, useContext } from 'react';


const DelerAnimContext = createContext({});

export const DelerAnimProvider = (props) => {
    const [animationIndex, setAnimationIndex] = useState(0);
    const [animations,setAnimations] = useState([]);
    return( <DelerAnimContext.Provider value={{
        animationIndex, 
        setAnimationIndex,
        animations,
        setAnimations,
        
    }}>
        {props.children}
    </DelerAnimContext.Provider>
    );
};

export const useDelerAnim = () => {

    return useContext(DelerAnimContext);
}
