import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../../../context/CartContext";
import { db } from "../../../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { Link } from "react-router-dom";

const FormularioFormik = () => {
  const { cart, getTotalPrice } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  let total = getTotalPrice();
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      telefono: "",
      email: "",
    },
    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total: total,
        date: serverTimestamp(),
      };

      //Se crea la OC en FIREBASE

      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

      //Modificar el Stock

      cart.forEach((producto) => {
        updateDoc(doc(db, "products", producto.id), {
          stock: producto.stock - producto.quantity,
        });
      });
    },
    validationSchema: Yup.object({
      name: Yup.string().required().min(5).max(12),
      telefono: Yup.string().required().min(6),
      email: Yup.string().email().required(),
    }),
    validateOnChange: false,
  });

  return (
    <div>
      {orderId ? (
        <>
          <h3>Gracias por su compra.</h3>
          <h4>Su numero de compra es :{orderId}</h4>
          <Link to="/">Volver a comprar</Link>
        </>
      ) : (
        <div style={{ padding: "40px" }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nombre"
              variant="outlined"
              name="name"
              error={errors.name ? true : false}
              onChange={handleChange}
              helperText={errors.name}
            />
            <TextField
              label="Telefono"
              variant="outlined"
              name="telefono"
              error={errors.telefono ? true : false}
              onChange={handleChange}
              helperText={errors.name}
            />
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              error={errors.email ? true : false}
              onChange={handleChange}
              helperText={errors.name}
            />

            <Button type="submit" variant="contained">
              Enviar
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FormularioFormik;
