import { createBrowserRouter, defer } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Root from "./layout/root";
import { fetchProductsData, fetchCategoriesData } from "./api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: async () => await fetchProductsData(),
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          let productsData = await fetchProductsData();
          let categoriesData = await fetchCategoriesData();
          return defer({
            productsData,
            categoriesData,
          });
        },
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
export default router;
