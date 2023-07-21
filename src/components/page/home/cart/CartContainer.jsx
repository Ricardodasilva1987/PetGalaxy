import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  const limpiar = () => {
    Swal.fire({
      title: "Deseas borrar los elementos de tu carrito?",
      showDenyButton: true,
      confirmButtonText: "Si quiero",
      denyButtonText: `No, no quiero`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Carrito limpio", "", "success");
        clearCart();
      } else if (result.isDenied) {
        Swal.fire("Ok, continua con tu compra", "", "info");
      }
    });
  };

  let total = getTotalPrice();
  console.log(cart);
  return (
    <div style={{ marginTop: "10px" }}>
      {total < 1 ? <h3>Carrito vacio</h3> : <h3>Su compra : </h3>}
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
      {cart.length > 0 && <button onClick={limpiar}>Limpiar carrito</button>}
      {total != 0 && <h2>El total es :{total} </h2>}
    </div>
  );
};

export default CartContainer;
