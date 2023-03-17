import React, {useState} from "react";


const App = () => {
 const [count,setcount] = useState(0)
 const [val,setval] = useState("click to change")

  const Increment = () => {
  setcount(count+1)
  };

  const Decrement = () => {
 if(count > 0){
setcount(count-1)
  }
  };

 
  let handleClick = ()=>{
    setval('Name Changed')
    let name = val;

    if(name === "click to change"){
      setval('Name Changed')
    }
    else{
      setval('click to change')
    }
  }
  
 

  return (
    <>
      <div className="continer">
        <h1>{count}</h1>
        <button className="btn" onClick={Increment} >
           Increment
        </button>
        <button className="btn" onClick={Decrement}disabled = {count==0}>
           Decrement
        </button>
      </div>


      <div className="continer">
        <h1>{val}</h1>
        <button className="btn" onClick={handleClick}>
           Click Me
        </button>
       
      </div>
    </>
  );
};

export default App;
