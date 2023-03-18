import React, { useState } from "react";
import "./CSS/ArrayTodo.css";

const ArrayTodo = () => {
  let arr = [
    { id: 0, Name: "Vishal", Age: 25, Degree: "Btech" },
    { id: 1, Name: "Ram", Age: 25, Degree: "Barch" },
    { id: 2, Name: "Govind", Age: 25, Degree: "BCom" },
    { id: 3, Name: "Vishu", Age: 25, Degree: "Btech" },
  ];

  const [myArray, setmyArray] = useState(arr);


  let handleRemove = (id) => {
    let newArr = myArray.filter((ele) => {
        return ele.id != id;
        
    });
    console.log(newArr)
    setmyArray(newArr);
  };

  return (
    <>
      <div className="mainbody">
        {myArray.map((ele) => {
          return (
            <h2 className="wrapper" key={ele.id}>
              Name:{ele.Name} & Age : {ele.Age} & Degree:{ele.Degree}
              <button className="innerBtn" onClick={() => handleRemove(ele.id)}>
                Remove
              </button>
            </h2>
          );
        })}
      </div>
    </>
  );
};

export default ArrayTodo;
