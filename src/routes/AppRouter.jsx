import { Route, Routes } from "react-router-dom";

import Layout from "../components/layout/Layout";
import { routes } from "./routes";
import Error from "../components/page/home/error/Error";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ id, path, Element }) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
