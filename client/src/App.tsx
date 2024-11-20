import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";

import DashBoard from "./views/dashboard/index";
import LayOut from "./views/layout";

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
        element: <h1>Product</h1>,
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
