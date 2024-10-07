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
import { RegisterShelter } from "./Pages/RegisterShelter";
import Redirection from "./components/Redirection";

function App() {
  let routes = [
    { path: "/", element: <LoginMuma /> },
    { path: "/home", element: <HomeMascotero /> },
    { path: "/user_select", element: <UserSelect /> },
    { path: "/register_pet_owner", element: <PetRegistration /> },
    { path: "/register_shelter", element: <RegisterShelter /> },
    { path: "/validation_email", element: <ValidationAccount /> },
    { path: "/email_registered", element: <EmailRegistered /> },
    { path: "/success_registration", element: <SuccesScreen /> },
  ];
  return (
    <RouteChangeLoader>
      <Routes>
        {routes.map((value, key) => (
          <Route key={key} path={value.path} element={<Redirection path={value.path} element={value.element} />} />
        ))}
      </Routes>
    </RouteChangeLoader>
  );
}

export default App;
