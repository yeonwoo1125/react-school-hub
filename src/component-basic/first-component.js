import React from "react";
import ReactDOM from "react-dom";

function FirstComponent(){
    return <div>My First Component</div>
}

function HelloWorld(){
    return <h1>Hello, World!</h1>
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
ReactDOM.render(
<div>
    <FirstComponent/>
    <HelloWorld/>
</div>,document.getElementById('root'));