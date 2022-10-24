import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { welcomeLoader } from "./pages/Welcome";
import { productLoader } from "./pages/Products";
import NotFound from "./pages/NotFound";

const Products = React.lazy(() => import('./pages/Products'))
const Welcome = React.lazy(() => import('./pages/Welcome'))



const router = createBrowserRouter([
  {
    path: "/*",
    element: (
      <React.Suspense fallback={<p>loading...</p>}>
      <Welcome />
      </React.Suspense>
    ),
    children: [
      {
        path: "products",
        element: (
          <React.Suspense fallback={<p>loading...</p>}>
            <Products />
          </React.Suspense>
        ),
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