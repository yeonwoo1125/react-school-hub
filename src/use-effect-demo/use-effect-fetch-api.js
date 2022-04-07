import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const NewsItem = (props) => {
    const {title, description, url, urlToImage} = props.article

    return (
        <div>
            <h1><a href={url} target='_blank'>{title}</a></h1>
            <img style={{height: '100px'}} src={urlToImage}/>
            <p>{description}</p>
        </div>
    )
}

const NewsApp = (props) => {
    const [articles, setArticles] = useState([]) //저장 데이터를 위한 상태
    const [loading, setLoading] = useState(true) //로딩 여부 판단
    const apiKey = '1f53e5d2542c4249ae8ab514d7ca273a'

    useEffect(() => {
        // 초기에 한 번만 API를 통해서 뉴스 데이터 읽어오기
        fetch(`http://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}`)
            .then(res => res.json()) //res는 text 타입의 promise를 리턴, json으로 변형함
            .then(data => { //data는 json 객체를 받음
                // 데이터 설정 및 로딩 상태 갱신
                setArticles(data.articles)
                setLoading(false) //데이터를 정상적으로 받아옴
                console.log(data)
            })
    }, [])

    return (
        <div>
            {
                articles.length === 0
                    ? loading ? <h1>뉴스를 불러오는 중입니다.</h1> : <h1>표시할 뉴스가 없습니다.</h1>
                    :
                    <ul>
                        {
                            articles.map((article, idx) => {
                                return (<li key={idx}>
                                    <NewsItem article={article} />
                                </li>)
                            })
                        }
                    </ul>
            }
        </div>
    )
}

ReactDOM.render(<NewsApp />, document.getElementById("root"))