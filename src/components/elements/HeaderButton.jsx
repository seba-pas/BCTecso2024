import { useNavigate } from "react-router-dom";

export const HeaderButton = ({ children, to = "/" }) => {
  const navigate = useNavigate();
  const redirect = (to) => {
    navigate(to);
    localStorage.removeItem("action");
  };
  return (
    <button className="d-flex justify-content-center align-items-center rounded-3 border-0" style={{ backgroundColor: "var( --background-lightmode-primary)", width: "35px", height: "35px" }} onClick={() => (to === "heart" ? alert("heart") : redirect(to))}>
      {children}
    </button>
  );
};
