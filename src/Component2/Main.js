import React from "react";
import Data from "./Data.json";
import './Main.css'
import Header from "./Header"
import { useState } from "react";

const Main = () => {
    const[search,setSearch] = useState('')
    

  return (

    <div className="container">
     <Header search = {search} setSearch ={setSearch} />
      <div className="inner-container">
        {Data.filter(ele=>ele.name.toLowerCase().includes(search)).map((ele) => {
          return (
            <div className="grid-wrapper" key={Data.id}>
              <div className="grid-images">
                <h2 className="grid-img-title">{ele.name}</h2>
                <img src={ele.url} alt="notFound" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
