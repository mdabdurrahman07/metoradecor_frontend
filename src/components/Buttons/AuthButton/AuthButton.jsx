import Link from "next/link";
import React, { useState } from "react";

const AuthButton = ({user}) => {

  return (
    <>
    {user ? <button className="authBtn">
        <Link href={"/login"}>Login</Link>
      </button> 
      : <button className="authBtn authBtn-outline">
        Logout
      </button>}
      
    </>
  );
};

export default AuthButton;
