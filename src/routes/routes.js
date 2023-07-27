import CartContainer from "../components/page/home/cart/CartContainer";
import CheckoutContainer from "../components/page/home/checkout/CheckoutContainer";
import FormularioFormik from "../components/page/home/formularioFormik/FormularioFormik";
import ItemDetail from "../components/page/home/itemDetail/ItemDetail";
import ItemListContainer from "../components/page/home/itemList/ItemListContainer";
import Dashboard from "../components/page/home/dashboard/Dashboard";

export const routes = [
  { id: "home", path: "/", Element: ItemListContainer },
  {
    id: "categories",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  { id: "cart", path: "/cart", Element: CartContainer },
  { id: "detalle", path: "/ItemDetail/:id", Element: ItemDetail },
  { id: "checkout", path: "/checkout", Element: CheckoutContainer },
  { id: "form", path: "/form", Element: FormularioFormik },
  { id: "dashboard", path: "/dashboard", Element: Dashboard },
];
