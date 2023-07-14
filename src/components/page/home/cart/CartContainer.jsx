import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

const CartContainer = () => {
  const { cart, clearCart, deleteById } = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      <h1>Este es el carrito</h1>

      {cart.map((elemento) => {
        return (
          <div key={elemento.id} style={{ border: "solid", width: "25%" }}>
            <h3>Producto: {elemento.tittle}</h3>
            <h4>Cantidad: {elemento.quantity}</h4>
            <h4> TOTAL : $ {elemento.price}</h4>
            <button onClick={() => deleteById(elemento.id)}>Eliminar</button>
          </div>
        );
      })}
      <button onClick={clearCart}>Limpiar carrito</button>
    </div>
  );
};

export default CartContainer;
