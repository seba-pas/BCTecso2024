import { Routes, Route } from "react-router-dom";
import HomeMascotero from "./Pages/HomeMascotero";
import LoginMuma from "./Pages/LoginMuma";
import PetRegistration from "./Pages/PetRegistration";
import ValidationAccount from "./Pages/ValidationAccount";
import EmailRegistered from "./Pages/EmailRegistered";
import SuccesScreen from "./Pages/SuccesScreen";
import UserSelect from "./Pages/UserSelect";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/styles/general.css";
import RouteChangeLoader from "./components/SplashLoader/Routechange";
import PetPage from "./Pages/PetPage";
import RegisterShelter from "./Pages/RegisterShelter";

function App() {
  return (
    <RouteChangeLoader>
      <Routes>
        <Route path="/" element={<LoginMuma />} />
        <Route path="/home" element={<HomeMascotero />} />
        <Route path="/user_select" element={<UserSelect />} />
        <Route path="/register_pet_owner" element={<PetRegistration />} />
        <Route path="/register_shelter" element={<RegisterShelter />} />
        <Route path="/validation_email" element={<ValidationAccount />} />
        <Route path="/email_registered" element={<EmailRegistered />} />
        <Route path="/success_registration" element={<SuccesScreen />} />
        <Route path="/form_pet" element={<PetPage />} />
      </Routes>
    </RouteChangeLoader>
  );
}

export default App;
