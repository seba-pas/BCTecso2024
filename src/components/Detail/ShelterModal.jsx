import Modal from "react-bootstrap/Modal";
import phoneLogo from "../../assets/images/icons/phone.svg";
import mail from "../../assets/images/icons/mail.svg";
import instagram from "../../assets/images/icons/instagram.svg";
import xCircle from "../../assets/images/icons/x-circle.svg";
import shelter from "../../assets/images/protectors/Protectora-Animalistas.png";

export const ShelterModal = ({ show, setShow }) => {
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Body closeButton className="d-flex flex-column align-items-center" style={{ backgroundColor: "var(--background-lightmode-primary)", borderRadius: "20px", fontFamily: "Poppins, sans-serif" }}>
          <button className="align-self-end border-0 p-0" onClick={() => setShow(false)} style={{ backgroundColor: "var(--background-lightmode-primary)" }}>
            <img src={xCircle} alt="exit-logo" className="bg-transparent" />
          </button>

          <img src={shelter} alt="shelter-logo" className="" style={{ height: "115px" }} />
          <div className="d-flex flex-column">
            <h2 className="text-center m-0" style={{ color: "var(--brand-neutro-01)", fontSize: "16px", fontWeight: 700 }}>
              Animalistas
            </h2>
            <span style={{ color: "var(--brand-neutro-02)", fontSize: "12px", fontWeight: 400 }}>Se parte del cambio que queres ver en el mundo</span>
          </div>
          <div className=" w-100 mt-5 d-grid gap-2">
            <div className="d-flex gap-2 align-items-center">
              <div style={{ display: "grid", placeItems: "center", borderRadius: "50%", width: "35px", height: "35px", backgroundColor: "var(--brand-secondary-01)" }}>
                <img src={phoneLogo} alt="phone-logo" width="18.67px" height="18.67px" />
              </div>
              <span style={{ color: "var(--brand-neutro-01)", fontSize: "14px", fontWeight: 700 }}>+54 3415 6789 0</span>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <div style={{ display: "grid", placeItems: "center", borderRadius: "50%", width: "35px", height: "35px", backgroundColor: "var(--brand-secondary-01)" }}>
                <img src={mail} alt="mail-logo" width="18.67px" height="18.67px" />
              </div>
              <span style={{ color: "var(--brand-neutro-01)", fontSize: "14px", fontWeight: 700 }}>animalistas@gmail.com</span>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <div style={{ display: "grid", placeItems: "center", borderRadius: "50%", width: "35px", height: "35px", backgroundColor: "var(--brand-secondary-01)" }}>
                <img src={instagram} alt="instagram-logo" width="18.67px" height="18.67px" />
              </div>
              <span style={{ color: "var(--brand-neutro-01)", fontSize: "14px", fontWeight: 700 }}>@animalistasderosario</span>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
