import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import CartContextProvider from "./context/CartContext.jsx";
import AppRouter from "./routes/AppRouter.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <AppRouter />
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
