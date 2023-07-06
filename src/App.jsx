import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar.jsx";
import ItemListContainer from "./components/page/home/itemList/ItemListContainer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
