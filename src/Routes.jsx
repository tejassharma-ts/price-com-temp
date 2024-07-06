import { Route, Routes } from "react-router-dom";
import { HomePage, ProductsPage } from "@/pages";

const ROUTE_MAP = {
  HomePage: "/",
  Products: "/products"
};

function RoutingComponent() {
  return (
    <Routes>
      <Route path={ROUTE_MAP.HomePage} element={<HomePage />} />
      <Route path={ROUTE_MAP.Products} element={<ProductsPage />} />
    </Routes>
  );
}

export { ROUTE_MAP as ROUTES, RoutingComponent };
