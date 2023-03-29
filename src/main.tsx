import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/home/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Product } from "./pages/product/Product";
import "./index.css";
import { AddProduct } from "./pages/addProduct/AddProduct";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import { Cart } from "./pages/cart/Cart";
import { PersistGate } from "redux-persist/integration/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "product/:id",
    element: <Product />,
  },
  {
    path: "add",
    element: <AddProduct />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
