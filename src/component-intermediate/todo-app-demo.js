import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const TodoItem = function({ todo: { completed, text, priority }, idx, handleTodoStatusToggle, handleTodoRemove,handleTodoPriority }) {
    let style = {}
    if(completed) style = { ...style, textDecoration: 'line-through' }
    if(priority >= 5) style = { ...style, fontWeight: 'bold' }
    
    return (
        <div>
            <span style={style}
                onClick={() => handleTodoStatusToggle(idx)}>
                {text}  (중요도 : {priority})
            </span>&nbsp;
            <button onClick={() => handleTodoRemove(idx)}>삭제</button>
            <button onClick={()=> handleTodoPriority(idx, priority + 1)}>증가</button>
            <button onClick={()=> handleTodoPriority(idx, priority - 1 < 0 ? 0 : priority - 1 )}>감소</button>
        </div>
    )
}

const TodoList = function({ todos, handleTodoStatusToggle, handleTodoRemove, handleTodoPriority }) {
    return (
        <ol>
            {
                todos.map((todo, idx) => {
                    return (
                        <li key={idx}>
                            <TodoItem idx={idx} todo={todo}
                                handleTodoStatusToggle={handleTodoStatusToggle}
                                handleTodoRemove={handleTodoRemove}
                                handleTodoPriority={handleTodoPriority} />
                        </li>
                    )
                })
            }
        </ol>
    )
}

const TodoAdder = function({ handleTodoAdd }) {
    const [input, setInput] = useState("")
    const handleChange = (e) => setInput(e.target.value)
    return (
        <div>
            {/*값이 바뀔때마다 onChange가 호출됨, setInput에  <input>의 value가 넘어감*/}
            <input type='text' onChange={handleChange} value={input} />
            <button onClick={() => {
                handleTodoAdd({ completed: false, text: input })
                setInput("")
            }}>추가</button>
        </div>
    )
}

const TodoApp = function(props) {
    const [todos, setTodos] = useState([
        { completed: false, text: '리액트 공부하기', priority : 1 },
        { completed: false, text: 'ES6 문법 공부하기', priority : 3 }
    ])

    //idx를 넘겨받아서 해당되는 idx에 중요도를 증가
    const handleTodoPriority = (todoIndex, newPriority) => {
        setTodos(todos => {
            return todos.map((todo, idx) => {
                if(idx === todoIndex) {     
                    return {
                        ...todo,
                        priority: newPriority
                    }
                }
                return todo
            })
        })
    }

    const handleTodoAdd = newTodo => setTodos(todos => todos.concat(newTodo))
    //setTodos에서 concat을 통해 매개변수로 들어온 newTodo를 추가한 새로운 배열을 생성
    const handleTodoStatusToggle = todoIndex => {
        setTodos(todos => {
            return todos.map((todo, idx) => {
                if(idx === todoIndex) {
                    {/*idx는 선택한 위치?랑 todo의 위치랑 같을 경우*/}
                    return {
                        ...todo,
                        completed: !todo.completed
                        //...todo를 통해 객체를 복사하고, completed의 상태만 반대로 바꿈
                    }
                }
                return todo
            })
        })
    }
    const handleTodoRemove = (todoIndex) => {
        setTodos(todos => {
            return todos.filter((_, idx) => {
                {/*선택된 todo의 위치가 넘어옴 _는 value는 상관하지 않고 위치만 보겠다는 뜻인듯 */}
                return idx !== todoIndex
                {/*filter가 todos에 객체를 하나씩 체크해서 idx가 같은 애들 찾으면 false를 리턴*/}
            })
            //false된 객체를 제외하고 새로운 객체를 생성해서 리턴
        })
    }

    return (
        <div>
            <TodoList todos={todos}
                handleTodoStatusToggle={handleTodoStatusToggle}
                handleTodoRemove={handleTodoRemove}
                handleTodoPriority={handleTodoPriority}/> 
            <TodoAdder handleTodoAdd={handleTodoAdd} />
        </div>
    )
}

ReactDOM.render(<TodoApp />, document.getElementById("root"))