import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalState from "./context/testContext";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ShoppingCartProvider from "./Shopping Cart/context/productContext.jsx";
import AuthState from "./firbase/context/authContext.jsx";
import { ToastContainer } from "react-toastify";
import { TaskManagerProvider } from "./Task Manager/context/TasKContext.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Routing wrapper for react routing */}
    <BrowserRouter>
      {/* Query Client Provider for Tanstack Query */}
      <QueryClientProvider client={queryClient}>
        {/* Context from our Shopping Cart Project */}
        <ShoppingCartProvider>
          {/* Global contextAPI wrapper for global state mgt */}
          <GlobalState>
            <AuthState>
              <TaskManagerProvider>
                <App />
                <ToastContainer />
              </TaskManagerProvider>
            </AuthState>
          </GlobalState>
        </ShoppingCartProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);
