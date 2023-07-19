import { Button, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormularioFormik = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object({
      name: Yup.string().required().min(5).max(12),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    }),
    validateOnChange: false,
  });

  return (
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
          label="Email"
          variant="outlined"
          name="email"
          error={errors.email ? true : false}
          onChange={handleChange}
          helperText={errors.name}
        />
        <TextField
          label="Password"
          variant="outlined"
          name="password"
          error={errors.password ? true : false}
          onChange={handleChange}
          helperText={errors.name}
        />

        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default FormularioFormik;
