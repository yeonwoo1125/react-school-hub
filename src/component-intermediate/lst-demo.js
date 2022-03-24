import React,{useState} from "react";
import  ReactDOM  from "react-dom";

const numbers = [1,2,3,4,5]
const listItems = numbers.map((number)=><li>{number}</li>)
//배열 내용을 가져올때 map 사용

ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('root')
)