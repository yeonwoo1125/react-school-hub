import React from "react";
import ReactDom from "react-dom";

const div=(
    <div>
        {true}
        {false}
        {undefined}
        {null}
    </div>   
)
//위에 있는 4가지는 그려지지 않음

const unreadMessage=['hello               '];
const div2 = (
    <div>
        <h1>Hello!</h1>
        {
            unreadMessage.length > 0 &&
            <h2>You have {unreadMessage.length} unread messages.</h2>
        }

        {/* 안읽은 메세지가 있으면(앞이 true면) 뒷문장 리턴됨
            false면 안 그려짐
        */}
    </div>
)
const age=18;
const div4=(
    <>{age>=20 ? <div>성인</div>:<div>미성년자</div>}</>
)

const h1=<h1 style={{color:"red", backgroundColor:"lightblue"}}>Hello Style!</h1>

function conditionalRender(age){
    if(age>=20)
    return <div>성인</div>
    else return <div>미성년자</div>
}
const div3 = <div>
    {conditionalRender(18)}
</div>
ReactDom.render(h1,document.getElementById('root'));