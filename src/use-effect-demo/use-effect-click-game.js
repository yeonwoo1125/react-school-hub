import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const ClickGame = function(props){
    const [timerState, setTimerState] = useState({
        time: props.time,
        timeout: false
    })
    const [clickCount, setClickCount] = useState(0)
    useEffect(() => {
        const id = setInterval(() => {
            setTimerState(prevState => {
                if(prevState.time === 1 ) {
                    clearInterval(id)
                    return {timeout: true, time: prevState.time - 1}
                } else {
                    return { ...prevState, time: prevState.time - 1 }
                }
            })
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [])
    
    return (
        <div>
            {timerState.timeout ? <h2>timeout</h2> : <h2>{timerState.time}</h2>}
            <button id="btn" onClick={()=> setClickCount((c)=>{ 
                if(timerState.time > 0) c=c+1})
                }>클릭</button>
            <p>클릭 수 : {clickCount}</p>
        </div>
    )
}

ReactDOM.render(<ClickGame time={10}/>, document.getElementById('root'));