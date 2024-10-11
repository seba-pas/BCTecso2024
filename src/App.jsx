import { Routes, Route } from "react-router-dom";

import { PetDetailsWithShelter, EmailRegistered, HomeMascotero, LoginMuma, PetPage, PetRegistration, RegisterShelter, SuccesScreen, SuccessSubmitPet, UserSelect, ValidationAccount, PetDetails } from "./Pages";

import RouteChangeLoader from "./components/SplashLoader/Routechange";
import ProtectedRoute from "./components/ProtectedRoutes";

import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/styles/general.css";

import { element } from "prop-types";

function App() {
  let routes = [
    { path: "/", element: <LoginMuma /> },
    { path: "/user_select", element: <UserSelect /> },
    { path: "/register_pet_owner", element: <PetRegistration /> },
    { path: "/validation_email", element: <ValidationAccount /> },
    { path: "/register_shelter", element: <RegisterShelter /> },
    { path: "/pet_details_shelter", element: <PetDetailsWithShelter /> },
    { path: "/pet_details", element: <PetDetails /> },
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
      path: "/success_submit_pet",
      element: (
        <ProtectedRoute>
          <SuccessSubmitPet />
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
    {
      path: "/form_pet",
      element: (
        <ProtectedRoute>
          <PetPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/form_pet/:id",
      element: (
        <ProtectedRoute>
          <PetPage />
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
