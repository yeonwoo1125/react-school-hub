import React,{useState} from "react";
import  ReactDOM  from "react-dom";

const Counter = function(props){
    const [count, setCount] = useState(0);
    const increase= () => setCount(prev => prev+1)
    const decrease= () => setCount(prev => prev-1)
    const add = (amount) => setCount(prev => prev+amount)
    

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick={() => add(5)}>+5</button>
            <button onClick={() => add(10)}>+10</button>
            
        </div>
    )//호출된 결과값을 넘겼다..?
}

ReactDOM.render(<Counter/>, document.getElementById('root'))