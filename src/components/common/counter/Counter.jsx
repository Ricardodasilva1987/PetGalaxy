import React from "react";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "7vh",
      }}
    >
      <button onClick={restar}> - </button>
      <div
        style={{
          border: "solid 1px",
          width: "15%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h3>{contador}</h3>
      </div>
      <button onClick={sumar}> + </button>

      <button
        onClick={() => {
          onAdd(contador);
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
