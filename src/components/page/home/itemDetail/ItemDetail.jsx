import React, { useEffect, useState } from "react";
import CounterContainer from "../../../common/counter/CounterContainer";
import { products } from "../../../../productsMock";
import { useParams, useNavigate } from "react-router-dom";

const ItemDetail = () => {
  const [producto, setProducto] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    let productoSeleccionado = products.find((elemento) => elemento.id === +id);
    const tarea = new Promise((res, rej) => {
      res(productoSeleccionado);
    });
    tarea.then((res) => setProducto(res));
  }, [id]);

  const onAdd = (cantidad) => {
    console.log(producto);
    console.log(cantidad);
    navigate("/cart"); //hook de react router dom, para poder linkear y navegar fuera del jsx ,( sin usar etiquetas Link to=)
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h3>{producto.tittle}</h3>
      <h3>$ {producto.price}</h3>
      <img
        src={producto.img}
        alt="elementovista"
        style={{ width: "15%", height: "30vh" }}
      />

      <CounterContainer stock={producto.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
