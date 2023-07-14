import { useEffect, useState } from "react";
import { products } from "../../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  const { categoryName } = useParams();
  //console.log("category ", categoryName);

  useEffect(() => {
    let productosFiltrados = products.filter(
      (elemento) => elemento.category === categoryName
    );
    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName === undefined ? products : productosFiltrados);

      //reject("Algo salio mal");
    });
    tarea.then((res) => setItems(res)).catch((error) => setError(error));
  }, [categoryName]);

  //console.log(items);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
