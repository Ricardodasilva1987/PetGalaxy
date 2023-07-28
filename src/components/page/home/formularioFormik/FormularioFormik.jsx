import { Button, TextField, Grid } from "@mui/material";
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
      name: Yup.string().required().min(3).max(12),
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
          <br />
          <h4>Su N° OC :{orderId}</h4>
          <br />
          <br />
          <p>Detalle de compra:</p>
          <ul>
            {cart.map((items) => {
              return (
                <li key={items.id}>
                  Cant: {items.quantity}. {items.tittle} -----${items.price}
                </li>
              );
            })}
          </ul>
          <br />
          TOTAL: $ {total}
          <br />
          <Link to="/">
            <Button variant="contained">Volver a comprar</Button>
          </Link>
          <br />
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "60px",
            marginLeft: "35%",
            textAlign: "center",
          }}
        >
          <Grid container spacing={3}>
            <form onSubmit={handleSubmit}>
              <h4>Completa tus datos para culminar compra</h4>
              <Grid item xs={12}>
                <TextField
                  label="Nombre"
                  variant="outlined"
                  name="name"
                  error={errors.name ? true : false}
                  onChange={handleChange}
                  helperText={errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Telefono"
                  variant="outlined"
                  name="telefono"
                  error={errors.telefono ? true : false}
                  onChange={handleChange}
                  helperText={errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  name="email"
                  error={errors.email ? true : false}
                  onChange={handleChange}
                  helperText={errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained">
                  Enviar
                </Button>
              </Grid>
            </form>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default FormularioFormik;
