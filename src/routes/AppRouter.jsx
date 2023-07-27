import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { routes } from "./routes";
import Error from "../components/page/home/error/Error";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "../components/page/home/dashboard/Dashboard";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ id, path, Element }) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
        </Route>

        {/*Rutas privadas*/}
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
