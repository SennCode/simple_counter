//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import Buttons from './button.jsx'


// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
function SimpleCounter(props){
    return(
        <div className="bigCounter">
            <div className="calender">
            <i class="far fa-clock"></i>            </div>
            <div className="four">{props.digitFour % 10}</div>
            <div className="three">{props.digitThree % 10}</div>
            <div className="two">{props.digitTwo % 10}</div>
            <div className="one">{props.digitOne % 10}</div>
        </div>
    )
}

let Home = (props) => {
    return (
        <div>
            <SimpleCounter digitOne={props.digitOne} digitTwo={props.digitTwo} digitThree={props.digitThree} digitFour={props.digitFour}></SimpleCounter>
            <Buttons  onReset={onReset}></Buttons>
        </div>
    )
}


SimpleCounter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
};

let counter = 0;
let pause = false 

const onReset = () => {
    counter = 0
}

const time = setInterval(function(){
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    console.log(four,three,two,one);

    counter++;
    ReactDOM.render(
        <Home digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />, 
        document.querySelector("#app"));
},1000)

// clearInterval(time)



//render your react application
