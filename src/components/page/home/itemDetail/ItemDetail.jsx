import { useContext, useEffect, useState } from "react";
import CounterContainer from "../../../common/counter/CounterContainer";

import { useParams } from "react-router-dom";
import { CartContext } from "../../../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetail = () => {
  const [producto, setProducto] = useState({});
  const { addToCart, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const totalQuantity = getQuantityById(id);
  console.log(totalQuantity);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);
    getDoc(productRef).then((res) => {
      let producto = { ...res.data(), id: res.id };
      setProducto(producto);
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...producto, quantity: cantidad };

    addToCart(productCart);

    toast.success("Producto agregado al carrito!!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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

      {(typeof totalQuantity === "undefined" ||
        producto.stock > totalQuantity) &&
        producto.stock > 0 && (
          <CounterContainer
            stock={producto.stock}
            onAdd={onAdd}
            initial={totalQuantity}
          />
        )}

      {producto.stock === 0 && <h2>No hay stock</h2>}

      {typeof totalQuantity !== "undefined" &&
        totalQuantity === producto.stock && (
          <h2>Tienes las maximas cantidades en el carrito</h2>
        )}

      <ToastContainer />
    </div>
  );
};

export default ItemDetail;
