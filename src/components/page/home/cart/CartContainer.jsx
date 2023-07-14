import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

const CartContainer = () => {
  const { cart, clearCart, deleteById } = useContext(CartContext);
  console.log(cart);
  return (
    <div style={{ marginTop: "10px" }}>
      <h2>Su compra : </h2>
      <br />
      <br />
      {cart.map((elemento) => {
        return (
          <div
            key={elemento.id}
            style={{
              borderBottom: "solid",
              borderRight: "solid",
              width: "25%",
              display: "flex",
            }}
          >
            <div>
              <h4>Producto: {elemento.tittle}</h4>
              <h4>Cantidad: {elemento.quantity}</h4>
              <h4> TOTAL : $ {elemento.price}</h4>
              <button onClick={() => deleteById(elemento.id)}>Eliminar</button>
            </div>
            <div>
              <img src={elemento.img} style={{ height: "15vh" }} alt="" />
            </div>
          </div>
        );
      })}
      <button onClick={clearCart}>Limpiar carrito</button>
    </div>
  );
};

export default CartContainer;
