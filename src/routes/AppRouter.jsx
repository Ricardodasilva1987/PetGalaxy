import { Route, Routes } from "react-router-dom";

import Layout from "../components/layout/Layout";
import { routes } from "./routes";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ id, path, Element }) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
        </Route>

        <Route path="*" element={<h1>Error 404 NOT FOUND</h1>} />
      </Routes>
    </div>
  );
};

export default AppRouter;
