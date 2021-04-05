import React from "react";
import Radium from "radium";

const Button = (props) => {
  const style = {
    ":hover": {
      backgroundColor: "black",
      color: "yellow",
      fontSize: "30px",
    },
    color: "green",
    fontSize: "20px",
    marginTop: "50px",
    borderRadius: "10px",
  };

  return (
    <div>
      <button style={style}>Click me!</button>
    </div>
  );
};

export default Radium(Button);
