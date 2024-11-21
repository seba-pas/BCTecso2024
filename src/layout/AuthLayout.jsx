import PropTypes from "prop-types";
import logo from "../assets/images/logo.png";

export const AuthLayout = ({ children }) => {
  return (
    <section className="px-3 d-flex flex-column align-items-center gap-5" style={{ backgroundColor: "var(--background-lightmode-primary)" }}>
      <div className="position-fixed w-100 d-flex justify-content-center" style={{ height: "280px", zIndex: 10, backgroundColor: "var(--background-lightmode-primary)" }}>
        <img src={logo} alt="Logo" className="position-absolute  bottom-0 mb-5" />
      </div>
      <main className="w-100" style={{ marginTop: "280px" }}>
        {children}
      </main>
    </section>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
