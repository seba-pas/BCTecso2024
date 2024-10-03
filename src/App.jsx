import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import PetRegistration from "./Pages/PetRegistration";
import ValidationAccount from "./Pages/ValidationAccount";
import EmailRegistered from "./Pages/EmailRegistered";
import SuccesScreen from "./Pages/SuccesScreen";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/styles/general.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register_pet_owner" element={<PetRegistration />} />
      <Route path="/validation_email" element={<ValidationAccount />} />
      <Route path="/email_registered" element={<EmailRegistered />} />
      <Route path="/success_registration" element={<SuccesScreen />} />
    </Routes>
  );
}

export default App;
