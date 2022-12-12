import React from 'react';
import "./buttons.css"

const Buttons = (props) => {
    
    return (
        <div id="btn">
        <button id="start">Start</button>
        <button onClick={() => props.onReset()} id="reset">Reset</button>
        </div>
    )
}

export default Buttons;