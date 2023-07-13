import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/page/home/itemList/ItemListContainer.jsx";
import CartContainer from "./components/page/home/cart/CartContainer.jsx";
import Layout from "./components/layout/Layout.jsx";
import ItemDetail from "./components/page/home/itemDetail/ItemDetail.jsx";
import CheckoutContainer from "./components/page/home/checkout/CheckoutContainer.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<CheckoutContainer />} />

            <Route path="/ItemDetail/:id" element={<ItemDetail />} />
          </Route>

          <Route path="*" element={<h1>Error 404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
