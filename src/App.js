import "./App.css";
import { Route, Routes } from "react-router-dom";
import Hompage from "./Components/Hompage";
import Discovery from "./Components/Discovery";
import Details from "./Components/Details";
import Service from "./Components/Service";
import Following from "./Components/Following";
import Signup from "./Components/Login_signup/Signup";
import Login from "./Components/Login_signup/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hompage />} />
      <Route path="/discovery" element={<Discovery />} />
      <Route path="/tripdetails/:id" element={<Details />} />
      <Route path="/service" element={<Service />} />
      <Route path="/follwing" element={<Following />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
