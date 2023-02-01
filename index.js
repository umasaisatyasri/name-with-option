import React,{useState,useContext} from 'react';
import ReactDOM from "react-dom/client";
import {data} from './data';
const PersonContext=React.createContext();
const ContextAPI=()=>{
  const[people,SetPeople]=useState(data);
  const removePerson=(id)=>{
    SetPeople((people) => {
      return people.filter((person)=>person.id!==id);
    });
  };
  return(
    <PersonContext.Provider value={{removePerson,people}}>
      <h3>Context API/useContext..</h3>
      <List/>
    </PersonContext.Provider>
  );
};
const List=()=>{
  const mainData=useContext(PersonContext);
  console.log(mainData);
  return(
    <>
    {mainData.people.map((person)=>{
      return<SinglePerson Key={person.id}{...person}/>;
    })}
    </>
  );
};
const SinglePerson=({id,name})=>{
  const{removePerson}=useContext(PersonContext);
  return(
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={()=>removePerson(id)}>
        remove
      </button>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ContextAPI />);
export default ContextAPI;



/*import React from "react";
import  ReactDOM  from "react-dom/client";
import Cart from "./Cart";
function Hello ()
{
  return (
    <div>
      <Cart></Cart>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello/>);*/
//import Demo1 from "./Demo1";
//import Demo from "./Demo";

//import App from "./App";
/*import App1 from "./App1";
import App2 from "./App2";
 function Travel()
 {
  return(
    <div>
      <h1 style={{color:"blue"}}>Travel by bus or car</h1>
      <App2></App2>
      <App1></App1>
    </div>
  );
 }*/
 /*function MyButton()
 { 
  return (
            <Demo1></Demo1>
          )
 }
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<MyButton/>);*/
