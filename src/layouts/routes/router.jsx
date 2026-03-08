import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout";
import InitialPage from "../../templates/InitialPage";
import Home from "../../templates/Home";
import Clima from "../../templates/Clima";
import Gastos from "../../templates/Gastos";
import Distance from "../../templates/Distance";
import Locals from "../../templates/Locals";
import NotFound from "../../templates/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <InitialPage />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "clima",
        element: <Clima />,
      },
      {
        path: "gastos",
        element: <Gastos />,
      },
      {
        path: "distancia",
        element: <Distance />,
      },
      {
        path: "locais",
        element: <Locals />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
