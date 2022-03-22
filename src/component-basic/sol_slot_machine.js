import React from "react";
import  ReactDOM  from "react-dom";


//props.s1, props.s2, props.s3
const SlotMachine = function(props){
    if(props.s1 == props.s2 && props.s2 == props.s3) {
        return (
            <div style={props.s1 ==7 ? {color : 'red'} : null}>
                <p>{props.s1} {props.s2} {props.s3}</p>
                <p></p>Congratz!
            </div>
        )                  
    }
    else {
        return (
            <div><p>{props.s1} {props.s2} {props.s3}</p></div>
        )
    }
}
ReactDOM.render(
<>
    <SlotMachine s1='X' s2='Y' s3='Z'/>
    <SlotMachine s1='X' s2='X' s3='X'/>
    <SlotMachine s1='7' s2='7' s3='7'/>
    <SlotMachine s1='🍒' s2='🍒' s3='🍒'/>
    <SlotMachine s1='🍓' s2='🍒' s3='🍒'/>
</>

    , document.getElementById('root'));