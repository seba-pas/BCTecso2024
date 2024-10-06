import React, { useState } from 'react';
import { Form, Button,InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import '../assets/styles/home.css';
import Header from '../components/Header/Header';


const Home =() => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
      e.preventDefault();
      console.log('Buscando:', searchTerm);
  
    };
    return(
        <div>
        <Header/>
            <main className='vh-100'>
                <Form className="d-flex justify-content-center p-4">
                    <Form.Control
                    type="search"
                    placeholder="Nombre,estado,protectora y sexo"
                    className='input-bar-search'
                    aria-label="Search"
                    />
                    <Button className='button-bar-search'><i class="bi bi-search"></i></Button>
                </Form>
                <section>
                    <h4 className='home-categorias mb-3'>Categorias</h4>
                    <div className='home-group-button'>
                        <button className='home-button-categoria'>🐱Gato</button>
                        <button className='home-button-categoria'>🐶Perro</button>
                        <button className='home-button-categoria'>🐹Hamster</button>
                        <button className='home-button-categoria'>🐰Conejo</button>
                    </div>
                </section>
                <div className='d-flex align-items-center justify-content-center' style={{height:'75vh'}}>
                    <p style={{width:''}}>No hay animales registrados actualmente</p>
                </div>
            </main>
        </div>
    )
 
};

export default Home;