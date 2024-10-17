import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import forget from '../assets/images/forget.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Notify } from 'notiflix';

const ForgetPassword = () =>{
    const navigate = useNavigate ();
    const [email ,setEmail ] = useState('');

    const forgetLogin = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!email) {
          Notify.warning('Por favor ingrese su correo electrónico');
        } else if (!emailRegex.test(email)) {
          Notify.warning('Por favor ingrese un correo electrónico válido');
        } else {
          Notify.success('Correo electrónico válido. Procediendo...');
          navigate ('/foget_password');
        }
      };

    return(
        <div className='d-flex align-items-center justify-content-center flex-column mt-5 gap-4'>
            <img className='forget-img' src={forget} alt="" style={{width:'20rem',height:'28rem'}}/>
            <Form className='d-flex align-items-center justify-content-center flex-column' >
                <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} className='' type="email" placeholder="ingrese email" style={{backgroundColor:'#DCDCDC'}}/>
                    <Form.Text className="text-muted">
                        Si existe un mail relacionado a una cuenta le llegara un correo.
                    </Form.Text>
                </Form.Group>
                <button type="submit" className="w-100 rounded-3 border-0 py-3 mt-3 mb-5" style={{ color: "var(--background-lightmode-secondary)", backgroundColor: "var(--brand-primary-01)" }} onClick={forgetLogin}>
                    Recuperar
                </button>
            </Form>
        </div>
    )
    
}

export default ForgetPassword;