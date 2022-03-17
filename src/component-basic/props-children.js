import React from "react";
import  ReactDOM  from "react-dom";

const Child = props => <div>{props.children}</div>
ReactDOM.render(
    <Child>Hello</Child>
    , document.getElementById('root'));