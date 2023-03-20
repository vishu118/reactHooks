import React, { useState } from "react";
import "./CSS/Form.css";

const Form = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [allEntry, setallEntry] = useState([]);

  const handleSubmit = () => {
    const newEntry = { Email: Email, Password: Password };
    setallEntry([ ...allEntry, newEntry ]);
    console.log(allEntry)
  };
  return (
    <>
      <div className="formSection">
        <label htmlFor="email">Email </label>
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          id="email"
          autoComplete="off"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password </label>
        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          id="password"
          autoComplete="off"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn" onClick={handleSubmit}>
          Submit
        </button>

     
       
       
      </div>
      {
          allEntry.map((ele) => {
            return (
              <div>
                <p>Email : {ele.Email}</p>
                <p>Password : {ele.Password}</p>
              </div>
            );
          })
          }
    </>
  );
};

export default Form;
