import React from "react";
import ReactDOM from "react-dom"

function DrawStar(props){
    let arr =[];

    for(let i=0; i<props.num; i++){
        let star = ''
        for(let j=0; j<=i; j++){
            star+='*';
        }
        arr.push(star);
        arr.push(<br></br>)
    }
    return arr;
}

ReactDOM.render(<DrawStar num={3}/>,document.getElementById('root'));