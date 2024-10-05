import { Navigate } from "react-router-dom";

const Redirection = ({ element, path }) => {
  function goToLoginOrHome(element, path) {
    let isAutenticated = localStorage.getItem("token");
    switch (path) {
      case "/":
        return isAutenticated ? <Navigate to="/home" /> : element;
      default:
        return isAutenticated ? element : <Navigate to="/" />;
    }
  }
  return goToLoginOrHome(element, path);
};

export default Redirection;
