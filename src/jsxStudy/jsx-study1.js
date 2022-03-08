import React from "react";
import  ReactDOM  from "react";

const name="Josh Perez";
const element =<h1>Hello ,{name}</h1>
const list=[100,200,300];
const person={
    name:'John',
    age:20
}

function double(value){
    return value*2;
}
ReactDOM.render(element,document.getElementById('root'));
