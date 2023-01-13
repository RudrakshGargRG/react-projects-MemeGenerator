import React from "react";
import Draggable from 'react-draggable';

export default function Toptext(props){
    return (
        <Draggable>
            <h2 className="meme--text top">{props.topText}</h2>
        </Draggable>
        
    )
}