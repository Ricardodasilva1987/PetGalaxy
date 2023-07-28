import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  //const [error, setError] = useState("");

  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollections = collection(db, "products");

    let consulta;
    if (categoryName) {
      consulta = query(
        productsCollections,
        where("category", "==", categoryName)
      );
    } else {
      consulta = productsCollections;
    }

    getDocs(consulta).then((res) => {
      let productos = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setItems(productos);
    });

    /* let productosFiltrados = products.filter(
      (elemento) => elemento.category === categoryName
    );
    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName === undefined ? products : productosFiltrados);

      //reject("Algo salio mal");
    });
    tarea.then((res) => setItems(res)).catch((error) => setError(error));
  */
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
