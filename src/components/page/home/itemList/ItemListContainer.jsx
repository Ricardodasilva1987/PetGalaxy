import React, { useEffect, useState } from "react";
import { products } from "../../../../productsMock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);

      //reject("Algo salio mal");
    });
    tarea.then((res) => setItems(res)).catch((error) => setError(error));
  }, []);

  console.log(items);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
