import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./templates/Home.jsx";
import NotFound from "./templates/NotFound.jsx";
import InitialPage from "./templates/InitialPage.jsx";
import Locals from "./templates/Locals.jsx";
import Gastos from "./templates/Gastos.jsx";
import Clima from "./templates/Clima.jsx";
import { WeatherProvider } from "./services/weatherContext.jsx";

function App() {
  return (
    <WeatherProvider>
      <BrowserRouter>
     <Routes>
     <Route path="/" element={<InitialPage/>} />
     <Route path="/home" element={<Home/>} />
     <Route path="/climate" element={<Clima/>} />
     <Route path="/locals" element={<Locals/>} />
     <Route path="/expenses" element={<Gastos/>} />
     <Route path="*" element={<NotFound />} />
     </Routes>
     </BrowserRouter>
    </WeatherProvider>
    
  );
}

export default App;
