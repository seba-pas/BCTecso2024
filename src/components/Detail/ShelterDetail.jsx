import { useState } from "react";
import { ShelterModal } from "./ShelterModal";

import phoneLogo from "../../assets/images/icons/phone.svg";
import shelter from "../../assets/images/protectors/Protectora-Animalistas.png";

export const ShelterDetail = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div className="d-flex justify-content-between align-items-center" style={{}}>
      <div className="d-flex gap-2 align-items-center" style={{ height: "50px" }}>
        <img src={shelter} alt="shelter-logo" className="h-100" />
        <div className="d-flex flex-column">
          <label style={{ color: "var(--brand-neutro-02)", fontSize: "10px", fontWeight: 400 }}>Protectora</label>
          <span style={{ color: "var(--brand-neutro-01)", fontSize: "14px", fontWeight: 500 }}>Animalistas</span>
        </div>
      </div>
      <button style={{ border: "none", display: "grid", placeItems: "center", borderRadius: "50%", width: "35px", height: "35px", backgroundColor: "var(--brand-secondary-01)" }} onClick={() => setShow(true)}>
        <img src={phoneLogo} alt="phone-logo" width="18.67px" height="18.67px" />
      </button>
      <ShelterModal show={show} setShow={setShow} />
    </div>
  );
};
