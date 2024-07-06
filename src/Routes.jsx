import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";

const ROUTE_MAP = {
  HomePage: "/",
  Products: "/products"
};

function RoutingComponent() {
  return (
    <Routes>
      <Route path={ROUTE_MAP.HomePage} element={<HomePage />} />
      <Route path={ROUTE_MAP.Products} element={<h1>products page</h1>} />
    </Routes>
  );
}

export { ROUTE_MAP as ROUTES, RoutingComponent };
