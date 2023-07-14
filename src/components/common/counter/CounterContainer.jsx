import React, { useState } from "react";
import Counter from "./Counter";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const CounterContainer = ({ stock, onAdd }) => {
  //Creando logica para boton

  const [contador, setContador] = useState(1);

  const sumar = () => {
    contador < stock
      ? setContador(contador + 1)
      : alert("Cantidad solicitada excede stock");
  };
  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (
    <div>
      <Counter
        sumar={sumar}
        restar={restar}
        contador={contador}
        onAdd={onAdd}
      />
    </div>
  );
};

export default CounterContainer;
