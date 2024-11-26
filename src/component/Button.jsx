import React from "react";

const Button = ({ handleClick, children, comp, handleName }) => {
  return (
    <div
      style={{
        margin: "10px",
      }}
    >
      <button onClick={() => handleClick("test")}>Submit</button>
      {handleName && (
        <button onClick={() => handleName("this is handle name")}>
          Handling State for setter
        </button>
      )}

      {children}
    </div>
  );
};

export default Button;
