import { Height } from "@mui/icons-material";
import { width } from "@mui/system";
import React from "react";

const Counter = ({ contador, sumar, restar }) => {
  return (
    <div style={{ display: "flex", width: "30%" }}>
      <button onClick={restar}> - </button>
      <div style={{ border: "solid 1px" }}>
        <h6>{contador}</h6>
      </div>
      <button onClick={sumar}> + </button>
    </div>
  );
};

export default Counter;
