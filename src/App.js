import "./App.css";
import { Route, Routes } from "react-router-dom";
import Hompage from "./Components/Hompage";
import Discovery from "./Components/Discovery";
import TripDetails from "./Components/Cards/TripDetails";
import Details from "./Components/Details";
import WeatherCard from "./Components/Cards/Weather";
import WeatherCardTmp from "./Components/Cards/tmp";
import Weather from "./Components/Cards/tmp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hompage />} />
      <Route path="/discovery" element={<Discovery />} />
      <Route path="/tripdetails/:id" element={<Details />} />
      {/* <Route path="/weather" element={<Weather />} /> */}
      {/* <Route path="/tripdetails/:id" element={<TripDetails trip={trip} />} /> */}
    </Routes>
  );
}

export default App;
