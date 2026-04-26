import React from "react";

const UserAuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default UserAuthLayout;
