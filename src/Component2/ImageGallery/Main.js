import React from "react";
import Dummy from "./Data.json";
import "./Main.css";
import Header from "./Header";
import { useState } from "react";

const Main = () => {
  const [search, setSearch] = useState("");
  const [ Data ,setData] = useState(Dummy);
  const [view, setView] = useState(false)
  const [text, setText] = useState(false)
 

  return (
    <div className="container">
      <Header 
            search={search} 
            setSearch={setSearch} 
            Data = {Data}
            setData ={setData}
            view = {view}
            setView = {setView}
            text ={text}
            setText = {setText}


            />

{
  view ? (
    <div className="inner-container">
      
        {Data.filter((ele) => ele.name.toLowerCase().includes(search)).map(
          (ele,index) => {
            return (
              <div className="grid-wrapper" key = {index}>
                <div className="grid-images">
                  <h2 className="grid-img-title">{ele.name}</h2>
                  <img src={ele.url} alt="notFound" />
                </div>
              </div>
            );
          }
        )}
      </div>
  ) : (
    <div className="inner-container">
      
      {Data.filter((ele) => ele.name.toLowerCase().includes(search)).map(
        (ele,index) => {
          return (
            <div className="list-wrapper" key = {index}>
              <div className="list-images">
                <h2 className="list-img-title">{ele.name}</h2>
                <img src={ele.url} alt="notFound" />
              </div>
            </div>
          );
        }
      )}
    </div>
  )
}
    
    </div>
  );
};

export default Main;
