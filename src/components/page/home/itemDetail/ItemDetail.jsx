import { useContext, useEffect, useState } from "react";
import CounterContainer from "../../../common/counter/CounterContainer";
import { products } from "../../../../productsMock";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../../../context/CartContext";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = () => {
  const [producto, setProducto] = useState({});
  const { addToCart, getQuantityById } = useContext(CartContext);

  const { id } = useParams();
  const navigate = useNavigate();
  const totalQuantity = getQuantityById(id);
  console.log(totalQuantity);

  useEffect(() => {
    let productoSeleccionado = products.find((elemento) => elemento.id === +id);
    const tarea = new Promise((res, rej) => {
      res(productoSeleccionado);
    });
    tarea.then((res) => setProducto(res));
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...producto, quantity: cantidad };

    //console.log(producto);
    //console.log(cantidad);
    addToCart(productCart);
    //navigate("/cart"); //hook de react router dom, para poder linkear y navegar fuera del jsx ,( sin usar etiquetas Link to=)
    //SE DISPARA EL SWEETALERT
    {
      /*Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado exitosamente",
      showConfirmButton: false,
      timer: 1500,
    });*/
    }
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

      <CounterContainer
        stock={producto.stock}
        onAdd={onAdd}
        initial={totalQuantity}
      />
      <ToastContainer />
    </div>
  );
};

export default ItemDetail;
