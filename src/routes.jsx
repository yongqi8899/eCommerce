import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Root from "./layout/root";
import { fetchProductsData} from "./api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: async () => await fetchProductsData(),
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => await fetchProductsData(),
        // loader: async ({params}) => await fetchProductsData(params),
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
