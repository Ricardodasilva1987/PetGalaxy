import { useState } from "react";
import Counter from "./Counter";

import Swal from "sweetalert2";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  //Creando logica para boton

  const [contador, setContador] = useState(initial);

  const sumar = () => {
    contador < stock
      ? setContador(contador + 1)
      : Swal.fire({
          position: "center",
          icon: "warning",
          title: "Cantidad solicitada excede stock",
          showConfirmButton: false,
          timer: 1500,
        });
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
