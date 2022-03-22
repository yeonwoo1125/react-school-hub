import React,{useState} from "react";
import  ReactDOM  from "react-dom";

const Counter = function(props){
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count+1)}>증가</button>
            <button onClick={()=> setCount(count-1)} style={{background:'blue', color:'white'} }>감소</button>
        </div>
    )
}


const MultipkeStateComponent = function(props){
    const[count, setCount] = useState(0);
    const[text, setText]=useState("a");

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>증가</button>
            <h1>{text}</h1>
            <button onClick={()=> setText(text+"a")}>문자열 늘리기</button>
        </div>
    )
}

const UserProfile = function(props){
    const[userName, setUserName] = useState("name")
    const[userAge, setUserAge] = useState(0)
    const[emailAddress, setEmailAddress] = useState("email@naver.com")

    return (
        <div>
            <h1>{userName}</h1>
            <h1>{userAge}</h1>
            <h1>{emailAddress}</h1>
        </div>
    )
}

const StateDemoComponent = function(props){
    const[state, setState]= useState({
        val1 : "Hello",
        val2 : 1000
    })

    return (
        <div>
            <button onClick={()=>{
                if(state.val1 =="Hello"){
                    setState({...state, val1:"bye"})
                }
                else if(state.val1=="bye"){
                    setState({...state, val1:"Hello"})
                }
            }}>{state.val1}</button><br/>
            <button onClick={()=>{
                setState({...state, val2 : state.val2*2})
            }}>{state.val2}</button>   
        </div>
    )
}
ReactDOM.render(<StateDemoComponent/>,document.getElementById('root'));