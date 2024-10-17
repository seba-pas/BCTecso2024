import { Routes, Route, Navigate } from "react-router-dom";

import { PetDetailForPetOwner, PetDetailForShelter, EmailRegistered, HomeMascotero, LoginMuma, PetPage, PetRegistration, RegisterShelter, SuccesScreen, SuccessSubmitPet, UserSelect, ValidationAccount, AllPets, AllShelter ,HomeShelter, ForgetPassword } from "./Pages";

import RouteChangeLoader from "./components/SplashLoader/Routechange";
import ProtectedRoute from "./components/ProtectedRoutes";

import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/styles/general.css";

import {useSelector} from "react-redux"

function App() {
  const user = useSelector((state) => state.auth.user);
  const returnTextHome = () =>{
    let id = user?.tipoRegistro?.id||0;
    return id === 1 ? "/home_shelter" : "/home"
  }
  let routes = [
    { path: "/", element: <LoginMuma /> },
    { path: "/user_select", element: <UserSelect /> },
    { path: "/register_pet_owner", element: <PetRegistration /> },
    { path: "/validation_email", element: <ValidationAccount /> },
    { path: "/register_shelter", element: <RegisterShelter /> },
    { path: "/forget_password" , element: <ForgetPassword /> },
    {
      path: "/pet_details_shelter/:id",
      element: (
        <ProtectedRoute>
          <PetDetailForShelter />
        </ProtectedRoute>
      ),
    },
    {
      path: "/pet_details/:id",
      element: (
        <ProtectedRoute>
          <PetDetailForPetOwner />
        </ProtectedRoute>
      ),
    },
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
    {
      path: "/all_pets",
      element: (
        <ProtectedRoute>
          <AllPets />
        </ProtectedRoute>
      ),
    },
    {
      path: "/all_shelters",
      element: (
        <ProtectedRoute>
          <AllShelter />
        </ProtectedRoute>
      ),
    },
    {
      path: "/home_shelter",
      element: (
        <ProtectedRoute>
          <HomeShelter />
        </ProtectedRoute>
      ),
    },
    { path: "/*", element: <Navigate to={returnTextHome()} replace /> },
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
