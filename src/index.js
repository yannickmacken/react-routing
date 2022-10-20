import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Welcome, { welcomeLoader } from "./pages/Welcome";
import Products, { productLoader } from "./pages/Products";
import NotFound from "./pages/NotFound";


const router = createBrowserRouter([
  {
    path: "/*",
    element: <Welcome />,
    children: [
      {
        path: "products",
        element: <Products />,
        loader: productLoader,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);