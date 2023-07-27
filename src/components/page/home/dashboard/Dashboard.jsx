import React from "react";
import { db } from "../../../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { products } from "../../../../productsMock";

const Dashboard = () => {
  const cargarBaseDeDatos = () => {
    products.forEach((product) => {
      let refCollection = collection(db, "products");
      addDoc(refCollection, product);
    });
  };
  return (
    <div>
      <h3>Cargar elementos: </h3>
      <button onClick={cargarBaseDeDatos}>Cargar BBDD</button>
    </div>
  );
};

export default Dashboard;
