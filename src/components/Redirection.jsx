import { Navigate } from "react-router-dom";

const Redirection = ({ element, path }) => {
  let pathsNoToken = ["/user_select", "/register_pet_owner", "/validation_email", "/email_registered", "/success_registration"];
  function goToLoginOrHome(element, path) {
    let isAutenticated = localStorage.getItem("token");
    if (path === "/") return isAutenticated ? <Navigate to="/home" /> : element;
    else if (pathsNoToken.includes(path)) return element;
    else return isAutenticated ? element : <Navigate to="/" />;
  }
  return goToLoginOrHome(element, path);
};

export default Redirection;
