import { useNavigate } from "react-router-dom";

export const HeaderButton = ({ children, to = "/" }) => {
  console.log(to);
  const navigate = useNavigate();
  return (
    <button className="d-flex justify-content-center align-items-center rounded-3 border-0" style={{ backgroundColor: "var( --background-lightmode-primary)", width: "35px", height: "35px" }} onClick={() => (to === "heart" ? alert("heart") : navigate(to))}>
      {children}
    </button>
  );
};
