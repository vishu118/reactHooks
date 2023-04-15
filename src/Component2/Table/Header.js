import React from "react";

const Header = () => {
  return (
    <>
      <div className="head">
        <h1>User Data</h1>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Enter here to Search"
          />
        </div>
      </div>

      <form action="" className="input">
        <input type="text" name="id" placeholder="Enter id" />
        <input type="text" name="name" placeholder="Enter Name" />
        <input type="email" name="email" placeholder="Enter your Email" />
        <input type="text" name="phone" placeholder="Enter Your Phone" />

        <button className="btn" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default Header;
