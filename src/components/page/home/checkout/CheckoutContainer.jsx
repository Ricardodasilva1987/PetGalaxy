import React, { useState } from "react";

const CheckoutContainer = () => {
  //const [nombre, setNombre] = useState("");
  //const [apellido, setApellido] = useState("");

  //REFACTORIZACION DE LOS HOOKS useState:

  const [data, setData] = useState({
    nombre: "",
    apellido: "",
  });

  const enviarForm = (evento) => {
    evento.preventDefault();

    /* const datos = {
      nombre, //cuando la el key y el value son de igual nombre, se puede colocar simplemente nombre
      apellido: apellido, //este esjemplo es colocando clave y valor, pero tambien se podria colocar solo apellido y funcionaria.
    };*/
  };

  /*const capturarNombre = (event) => {
    //
    setData({ ...data, nombre: event.target.value }); //se utiliza el spread operator para conservar las key:values originales. y que no se modifiquensi las demas estan vacias.
  };
  const capturarApellido = (event) => {
    setData(event.target.value);
  };*/

  //REFACTORIZAMOS AHORA UTILIZANDO LA BRACKET NOTATION

  const capturarInfo = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={enviarForm}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="nombre"
          onChange={capturarInfo}
        />
        <input
          type="text"
          placeholder="Ingrese su apellido"
          name="apellido"
          onChange={capturarInfo}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CheckoutContainer;
