import React, {useState} from "react";


const App = () => {
 const [count,setcount] = useState(0)
  const Increment = () => {
  setcount(count+1)
  };
  const Decrement = () => {
 
  if(count > 0){
setcount(count-1)
  }
  };
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
    </>
  );
};

export default App;
