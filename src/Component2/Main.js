import React from "react";
import Dummy from "./Data.json";
import "./Main.css";
import Header from "./Header";
import { useState } from "react";

const Main = () => {
  const [search, setSearch] = useState("");
  const [ Data ,setData] = useState(Dummy)
 

  return (
    <div className="container">
      <Header 
            search={search} 
            setSearch={setSearch} 
            Data = {Data}
            setData ={setData}


            />
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
    </div>
  );
};

export default Main;
