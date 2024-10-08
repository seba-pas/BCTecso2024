import { Routes, Route } from "react-router-dom";
import HomeMascotero from "./Pages/HomeMascotero";
import LoginMuma from "./Pages/LoginMuma";
import PetRegistration from "./Pages/PetRegistration";
import ValidationAccount from "./Pages/ValidationAccount";
import EmailRegistered from "./Pages/EmailRegistered";
import SuccesScreen from "./Pages/SuccesScreen";
import UserSelect from "./Pages/UserSelect";
import RegisterShelter from "./Pages/RegisterShelter";
import ProtectedRoute from "./components/ProtectedRoutes";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/styles/general.css";
import RouteChangeLoader from "./components/SplashLoader/Routechange";

function App() {
  let routes = [
    { path: "/", element: <LoginMuma /> },
    { path: "/user_select", element: <UserSelect /> },
    { path: "/register_pet_owner", element: <PetRegistration /> },
    { path: "/validation_email", element: <ValidationAccount /> },
    { path: "/register_shelter", element: <RegisterShelter /> },
    {
      path: "/email_registered",
      element: (
        <ProtectedRoute>
          <EmailRegistered />
        </ProtectedRoute>
      ),
    },
    {
      path: "/success_registration",
      element: (
        <ProtectedRoute>
          <SuccesScreen />
        </ProtectedRoute>
      ),
    },
    {
      path: "/home",
      element: (
        <ProtectedRoute>
          <HomeMascotero />{" "}
        </ProtectedRoute>
      ),
    },
  ];
  return (
    <RouteChangeLoader>
      <Routes>
        {routes.map((value, key) => (
          <Route key={key} path={value.path} element={value.element} />
        ))}
      </Routes>
    </RouteChangeLoader>
  );
}

export default App;
