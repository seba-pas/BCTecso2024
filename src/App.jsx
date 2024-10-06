import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoginMuma from "./Pages/LoginMuma";
import PetRegistration from "./Pages/PetRegistration";
import ValidationAccount from "./Pages/ValidationAccount";
import EmailRegistered from "./Pages/EmailRegistered";
import SuccesScreen from "./Pages/SuccesScreen";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/styles/general.css";
import RouteChangeLoader from "./components/SplashLoader/Routechange";
import { RegisterShelter } from "./Pages/RegisterShelter";

function App() {
  return (
    <RouteChangeLoader>
      <Routes>
        <Route path="/" element={<LoginMuma />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register_pet_owner" element={<PetRegistration />} />
        <Route path="/register_shelter" element={<RegisterShelter />} />
        <Route path="/validation_email" element={<ValidationAccount />} />
        <Route path="/email_registered" element={<EmailRegistered />} />
        <Route path="/success_registration" element={<SuccesScreen />} />
      </Routes>
    </RouteChangeLoader>
  );
}

export default App;
