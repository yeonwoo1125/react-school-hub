import React from "react";
import  ReactDOM  from "react-dom";


const ComponentWithProps = function(props){
    console.log(props);
    return <p>{JSON.stringify(props)}</p>
}

const Greeting = function(props){
    const {name} = props; //구조 분해 할당
    return <h1>Hello, {name}</h1>
}

ReactDOM.render(<Greeting name="yeonwoo"/>,document.getElementById('root'));
