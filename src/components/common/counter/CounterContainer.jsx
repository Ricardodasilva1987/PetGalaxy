import React, { useState } from "react";
import Counter from "./Counter";

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
      <Counter sumar={sumar} restar={restar} contador={contador} />
    </div>
  );
};

export default CounterContainer;
