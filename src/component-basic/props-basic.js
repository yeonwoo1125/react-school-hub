import React from "react";
import  ReactDOM  from "react-dom";


const ComponentWithProps = function(props){
    console.log(props);
    return <p>{JSON.stringify(props)}</p>
}

const Greeting = function(props){
    const {name} = props; //구조 분해 할당
    return <h1>Hello, {name}</h1>
}

// const PersonProfile = function({name, age, gender, profile, highlight}){
//     return (
//         <div className="person" style={highlight ? {color:'red'} : null}>
//             <h1>Profple</h1>
//             <img src="profile"/>
//             <p>name : {name}</p>
//             <p>age : {age}</p>
//             <p>gender : {gender}</p>
//         </div>
//     )
// }
const PersonProfile = function(props){
    const {name, age, gender, profile}=props.person;
    return (
        <div className="person" style={highlight ? {color:'red'} : null}>
            <h1>Profple</h1>
            <img src="profile"/>
            <p>name : {name}</p>
            <p>age : {age}</p>
            <p>gender : {gender}</p>
        </div>
    )
}
const anotherPerson={
    name:"jane",
    age:28,
    gender:"female",
    profile:"https://randomuser.me/api/portraits/women/75.jpg"
}
const {name,gender, ...rest}=anotherPerson;
console.log(rest);
ReactDOM.render(<div>
    <PersonProfile />
</div>
    ,document.getElementById('root'));
