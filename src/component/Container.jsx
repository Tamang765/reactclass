import React from "react";

const Container = ({ children }) => {
  return (
    <div style={{ border: "12px solid black" }}>
      {children}
      <p>this is from Container</p>
    </div>
  );
};

export default Container;
