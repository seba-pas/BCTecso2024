
import { useNavigate } from "react-router-dom";

import iconMascotero from "../../assets/mascotero.png";
import iconProtectora from "../../assets/protectora.png";
import iconPuntosAbajo from "../../assets/iconPuntos-abajo.png";
import iconPuntosArriba from "../../assets/iconPuntosArriba.png";
import "./rol.scss"

const Rol = () => {

    const navigate = useNavigate();
    
    const handleSubmit = () =>{
        navigate("/")

    };
    return(

        <div className="container-rol">
            <div className="container-arriba" >
                <img src={iconPuntosArriba} alt="Puntos Arriba"  className="puntos-arriba" />
                <button className="btn-mascotero" onClick={handleSubmit}> <img className="img-arriba" src={iconMascotero} alt="Mascotero"></img></button>
                <p className="title">Mascotero</p>
                
            </div>
            
            <div className="container-abajo">
                <button className="btn-protectora" onClick={handleSubmit}> <img className="img-abajo" src={iconProtectora} alt="Protectora"></img></button>
                <p className="title">Protectora</p>
                <img src={iconPuntosAbajo} alt="puntos abajo" className="puntos-abajo" />
                
            </div>

        </div>
    );
}; 

export default Rol; 