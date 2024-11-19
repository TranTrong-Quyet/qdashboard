import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";

import DashBoard from "./views/dashboard/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
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
