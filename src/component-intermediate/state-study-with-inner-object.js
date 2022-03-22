import React,{useState} from "react";
import  ReactDOM  from "react-dom";

const StateDemoComponent = function(props){
    const[state, setState] = useState({
        val1 : "hello",
        val2 : {
            inner1 : "world",
            inner2 : 1234
        },
        val3 : {
            inner3 : "react",
            inner4 : 9999
        }
    })

    return (
        <div>
            <h1>{state.val1}</h1>
            <h1>{JSON.stringify(state.val2)}</h1>
            <h1>{JSON.stringify(state.val3)}</h1>
            <button onClick={()=>{
                setState({
                    ...state,
                    val2:{
                        ...state.val2,
                        inner2:5678
                    }
                })
            }}>값 변경</button>
        </div>
    )
}

ReactDOM.render(<StateDemoComponent/>,document.getElementById('root'))