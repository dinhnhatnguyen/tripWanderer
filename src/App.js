import "./App.css";
import { Route, Routes } from "react-router-dom";
import Hompage from "./Components/Hompage";
import Discovery from "./Components/Discovery";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hompage />} />
      <Route path="/discovery" element={<Discovery />} />
    </Routes>
  );
}

export default App;
