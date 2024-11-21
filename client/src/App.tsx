import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";

import DashBoard from "./views/dashboard/index";
import LayOut from "./views/layout";
import Product from "./views/products/index.tsx";
import Customer from "./views/customers";
import Transaction from "./views/transaction";

const router = createBrowserRouter([
  {
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/customers",
        element: <Customer />,
      },
      {
        path: "/transactions",
        element: <Transaction />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
