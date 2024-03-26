
import { SpotLight,AmbientLight, PointLight } from "three";
import { MESA, CardsLOt } from "./mesa.jsx";
import { useRef } from "react";
import { useState } from "react";
export const Experience = () => {

    
    return (
            <>

            <pointLight position={[1,0.8,0]} intensity={7} castShadow/>
            <MESA></MESA>
           
            
            
            
            </>

    )
}