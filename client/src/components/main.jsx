import ReactDOM from "react-dom/client";
import App from "./app.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1> error</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
