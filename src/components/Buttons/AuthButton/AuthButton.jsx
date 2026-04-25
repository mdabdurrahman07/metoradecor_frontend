import React, { useState } from "react";

const AuthButton = ({user}) => {

  return (
    <>
    {user ? <button className="authBtn">
        Login
      </button> 
      : <button className="authBtn authBtn-outline">
        Logout
      </button>}
      
    </>
  );
};

export default AuthButton;
