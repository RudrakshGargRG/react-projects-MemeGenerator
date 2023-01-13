import React from "react";
import Draggable from 'react-draggable';

export default function Bottomtext(props){
    
    return (
        <Draggable>
            <h2 className="meme--text bottom">{props.bottomText}</h2>
        </Draggable>
        
    )
}