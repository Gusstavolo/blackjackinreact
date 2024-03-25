
import { SpotLight,AmbientLight, PointLight } from "three";
import { MESA, CardsLOt } from "./mesa.jsx";
import { GenerateCards } from "./GenerateCards.jsx";
import { useRef } from "react";
import { useState } from "react";
export const Experience = () => {

    
    return (
            <>

            <pointLight position={[0,0,3.8]} intensity={7} />
            <MESA></MESA>
           
            
            
            
            
            </>

    )
}