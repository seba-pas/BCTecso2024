import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../assets/styles/home.css';
import Header from '../components/Header/Header';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import iconSex from '../assets/images/icons/sexo.png';

const Home =() => {
    const [searchTerm, setSearchTerm] = useState('');
    const [images, setImages] = useState([]);

    const handleSearch = (e) => {
      e.preventDefault();
      console.log('Buscando:', searchTerm);
    };

    // Cargar las imágenes dinámicamente
    useEffect(() => {
        const imagesObject = import.meta.glob('../assets/images/pets/*.{png,jpg,jpeg,svg}');
        
        const loadImages = async () => {
            const imagePromises = Object.entries(imagesObject).map(async ([path, resolver]) => {
                const image = await resolver();
                return { path, image: image.default };
            });
            
            const loadedImages = await Promise.all(imagePromises);
            setImages(loadedImages); // Guardar las imágenes en el estado
        };

        loadImages(); // Llamada para cargar las imágenes
    }, []); // [] asegura que se ejecute solo una vez al montar el componente

    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: false,
        variableWidth: true,
        cssEase: "linear",
        arrows: false,
        draggable: true,
        centerMode: false,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 4 } },
          { breakpoint: 700, settings: { slidesToShow: 3 } },
          { breakpoint: 480, settings: { slidesToShow: 1} },
        ],
    };

    return (
        <div>
            <Header/>
            <main className='vh-100'>
                <Form className="d-flex justify-content-center p-4">
                    <Form.Control
                    type="search"
                    placeholder="Nombre, estado, protectora y sexo"
                    className='input-bar-search'
                    aria-label="Search"
                    />
                    <Button className='button-bar-search'><i className="bi bi-search"></i></Button>
                </Form>
                <section className='mb-4'>
                    <h4 className='home-categorias mb-3'>Categorías</h4>
                    <div className='home-group-button'>
                        <button className='home-button-categoria'>🐱 Gato</button>
                        <button className='home-button-categoria'>🐶 Perro</button>
                        <button className='home-button-categoria'>🐹 Hamster</button>
                        <button className='home-button-categoria'>🐰 Conejo</button>
                    </div>
                </section>
                {images.length === 0 ? (
                    <div className='d-flex align-items-center justify-content-center' style={{height:'75vh'}}>
                        <p>No hay animales registrados actualmente</p>
                    </div>
                ) : (
                    <div>
                        <div className='d-flex justify-content-between ms-4 me-4'> 
                            <p>Animales</p>
                            <a href="#"style={{textDecoration:'none',color:'#017179'}}>Ver todos</a>
                        </div>
                        <Slider {...settings}>
                            {images.map((image, index) => (
                                <div key={index} className='pb-5'>
                                    <div className="card ms-3" style={{ width: '18rem',heigh:'18rem',border:'none',boxShadow:'-4px 14px 17px -3px rgba(0,0,0,0.25)'}}>
                                        <img src={image.image} className="card-img-top pet-img" alt="..." />
                                        <div className="card-body">
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <h5 className="card-title" >Nombre del Animal</h5>
                                                <img src={iconSex} style={{width:'30px'}}/>
                                            </div>
                                            <div className='d-flex justify-content-start align-items-center'>
                                                <i class="bi bi-geo-alt fs-3" style={{color:'#99DBD6'}}></i>
                                                <p className="card-text ms-2">Ubicación</p>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </Slider>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Home;
