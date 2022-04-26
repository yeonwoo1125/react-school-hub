import React, { useState, useContext, createContext } from "react"
import ReactDOM from "react-dom"

const LoginUserContext = createContext(null)
//user 정보 저장(로그인한 유저 정보), 처음엔 null

function LoginButton(props) {
    // 비구조화 할당시, loginUser 정보가 필요하지 않으면 생략 가능 (세터 함수만 받기)
    const { setLoginUser } = useContext(LoginUserContext)
    const [ fetching, setFetching ] = useState(false)

    const handleLogin = () => {
        setFetching(true)
        fetch('https://randomuser.me/api/', { headers: { 'Content-Type': 'application/json' } })
            .then(res => res.json())
            .then(data => {
                
                setLoginUser({
                    picture: data.results[0].picture.large,
                    username: data.results[0].login.username,
                    email: data.results[0].email,
                    cell: data.results[0].cell,
                });
            })
    }

    return (
        fetching ?
            <button disabled>...</button> :
            <button onClick={handleLogin}>Login</button>
    )
}

function LogoutButton(props) {
    const { setLoginUser } = useContext(LoginUserContext) 

    const handleLogout = () => {
        setLoginUser(null)
    }
    //null로 바꿔서 다시 로그인 하세요 뜨게 함
    return (
        <button onClick={handleLogout}>Logout</button>
    )
}

function UserInfo(props) {
    const { loginUser } = useContext(LoginUserContext)
    //보여주기 용이라 세터 필요엇음
    return (
        <div>
            <img src={loginUser.picture} style={{ borderRadius: '50%' }}/>
            <p>username: {loginUser.username}</p>
            <p>email: {loginUser.email}</p>
            <p>cell: {loginUser.cell}</p>
        </div>
    )
}

function UserButton(props){
    const {loginUser, setLoginUser} = useContext(LoginUserContext)
    const [ fetching, setFetching ] = useState(false)
    
    const handleLogin = () => {
        setFetching(true)
        fetch('https://randomuser.me/api/', { headers: { 'Content-Type': 'application/json' } })
            .then(res => res.json())
            .then(data => {
                
                setLoginUser({
                    picture: data.results[0].picture.large,
                    username: data.results[0].login.username,
                    email: data.results[0].email,
                    cell: data.results[0].cell,
                });
                setFetching(false)
            })
     
    }

    const handleLogout = () => {
        setLoginUser(null)
    }

    if(fetching) return <button disabled>...</button>
    
    return (

        loginUser ?
            <div>
                <button onClick={handleLogout}>Logout</button><br/>
                <img src={loginUser.picture} style={{ borderRadius: '50%', width:50}}/><br/>
                <span>username: {loginUser.username}</span><br/>
                <span>email: {loginUser.email} </span><br/>
                <span>cell: {loginUser.cell}</span>
            </div> 
            :
            <button onClick={handleLogin}>Login</button>    
    )
}

function App() {
    const [ loginUser, setLoginUser ] = useState(null)

    return (
        <LoginUserContext.Provider value={ { loginUser, setLoginUser } }>
            <UserButton />
        </LoginUserContext.Provider>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));