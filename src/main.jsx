import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { WeatherProvider } from "./services/weather/weatherContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WeatherProvider>
      <RouterProvider router={router} />
    </WeatherProvider>
  </React.StrictMode>,
);
