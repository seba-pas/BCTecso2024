import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import PetRegistration from "./Pages/PetOwner/PetRegistration";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/styles/general.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register_pet_owner" element={<PetRegistration />} />
    </Routes>
  );
}

export default App;
