import React, { useState, useContext, createContext, useEffect } from "react"
import ReactDOM from "react-dom"

const Search = ({onSubmit}) =>{
    const [input, setInput] = useState('')
    return (
        <div>
            <input type="text" onChange={e=> setInput(e.target.value)} value={input}/>
            <button onClick={e=>{
                if(input.trim().length!==0) onSubmit(input)
            }}>검색</button>
        </div>
    )
}

const RepoList = (props) => {
    
}

const GithubSearchApp =(props)=> {
    const[keyword, setkeyword] = useState(null)
    const[fetching, setFetching] = useState(false)
    const [articles, setArticles] = useState([])

    useEffect(() => {
        if(keyword){
            setFetching(true)
        // 초기에 한 번만 API를 통해서 뉴스 데이터 읽어오기
        fetch(`https://api.github.com/users/${keyword}/repos`, {headers:{Authorization : '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'}})
            .then(res => res.json()) //res는 text 타입의 promise를 리턴, json으로 변형함
            .then(data => { //data는 json 객체를 받음
                // 데이터 설정 및 로딩 상태 갱신
                setArticles({
                    reponame: data[0].name,
                    //username : data.owner.login
                });
            })
        }

    }, [keyword])

    return (
        <div>
            <Search onSubmit={setkeyword} />

            {
                articles.length === 0
                    ? fetching ? <h1>레포를 불러오는 중입니다.</h1> : <h1>표시할 레포가 없습니다.</h1>
                    :
                    <ul>
                        {
                            articles.map((article, idx) => {
                                return (<li key={idx}>
                                    <RepoItem article={article} />
                                </li>)
                            })
                        }
                    </ul>
            }
        </div>
    )
}

const RepoItem = (props) => {
    
}


ReactDOM.render(<GithubSearchApp />, document.getElementById("root"));