import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "./Cart.css";

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
      if (result.isConfirmed) {
        Swal.fire("Carrito limpio", "", "success");
        clearCart();
      } else if (result.isDenied) {
        Swal.fire("Ok, continua con tu compra", "", "info");
      }
    });
  };

  let total = getTotalPrice();

  return (
    <div style={{ marginTop: "10px" }}>
      {total < 1 ? <h3>Carrito vacio</h3> : <h3>Su listado : </h3>}
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
              <button
                className="eliminar"
                onClick={() => deleteById(elemento.id)}
              >
                Eliminar
              </button>
              <br />
            </div>
            <div>
              <img src={elemento.img} style={{ height: "15vh" }} alt="" />
            </div>
          </div>
        );
      })}

      {cart.length > 0 && (
        <button className="limpiar" onClick={limpiar}>
          Limpiar carrito
        </button>
      )}
      <Link to="/form">
        <button className="compra">Realizar compra</button>
      </Link>
      {total != 0 && <h2>El total es : $ {total} </h2>}
    </div>
  );
};

export default CartContainer;
