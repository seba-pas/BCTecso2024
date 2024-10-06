import circlesUp from '../assets/images/select_user/circles-up.png';
import circlesDown from '../assets/images/select_user/circles-down.png';
import logoMascW from '../assets/images/select_user/int-logo-mascotero.png';
import logoProtecG from '../assets/images/select_user/int-logo-protectores.png';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/userSelect.css';

function UserSelect (){

    const navigate = useNavigate();
    const handleClick = (props) => {
        if (props === "pet") {
          navigate('/register_pet_owner');
        } else if (props === "protector") {
          navigate('/home');
        }
      };

    return(
        <div className="d-flex vh-100 flex-column justify-content-center align-items-center">
            <section className='w-100'>
                <a onClick={() => handleClick("pet")} style={{textDecoration:'none'}} className='d-flex flex-column justify-content-center align-items-center'>
                    <img src={circlesUp} alt="" className='arco-cirulos-arriba'/>
                    <div className='d-flex flex-column align-items-center' style={{paddingRight:'8rem'}}>
                        <div className="rounded-circle d-flex align-items-center justify-content-center flex-column logo-mascotero">
                            <img src={logoMascW} alt="" style={{width:'83px'}}/>
                        </div>
                        <p className='denominacion-mascotero'>Mascotero</p>
                    </div>
                </a>
            </section >
            <section className="w-100">
                <a onClick={() => handleClick("protector")} style={{textDecoration:'none'}} className='d-flex flex-column justify-content-center align-items-center'> 
                    <div className='d-flex flex-column align-items-center' style={{paddingLeft:'8rem'}}>
                        <div className="rounded-circle d-flex align-items-center justify-content-center logo-protectora">
                            <img src={logoProtecG} alt="" style={{width:'83px'}} />
                        </div>
                        <p className='denominacion-protectora'>Protectora</p>
                    </div>
                    <img src={circlesDown} alt="" className='arco-cirulos-abajo'/>
                </a>
            </section>
        </div>
    );
}

export default UserSelect;