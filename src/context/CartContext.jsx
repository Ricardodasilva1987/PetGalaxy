import { createContext, useState } from "react";

export const CartContext = createContext(); // se crea el conxto para utilizar como argumento en el useContext

const CartContextProvider = ({ children }) => {
  //Este es el componente proveedro del contexto

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existe = isInCart(item.id);
    if (existe) {
      let arrayNuevo = cart.map((elemento) => {
        //[{},{},{}] va a aretornar otro arreglo de la misma longitud
        if (elemento.id === item.id) {
          return { ...elemento, quantity: elemento.quantity + item.quantity };
        } else {
          return elemento;
        }
      });
      setCart(arrayNuevo);
    } else {
      setCart([...cart, item]);
      console.log("item :", item);
    }
  };
  const clearCart = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    console.log(id);
    let newArray = cart.filter((elemento) => elemento.id !== id);
    setCart(newArray);
  };

  //utilizamos el metodo some para validar si el producto y esta en el carrito

  const isInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id);
    return exist;
  };

  let data = {
    cart: cart,
    addToCart: addToCart,
    clearCart: clearCart,
    deleteById: deleteById,
  }; // se podria pasar asi cart, addtoCart y clearCart ya que etienen el mismo nombre clave valor, todo lo que se va a consumir en otro lado debe ir en este objeto data.

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
