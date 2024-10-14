import { Form, Button } from "react-bootstrap";
import { useState } from "react";


function Filters() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Buscando:", searchTerm);
      };

    return(
    <>
        <Form className="d-flex justify-content-center p-4 align-items-stretch ms-2 me-2" onSubmit={handleSearch}>
            <div className="col-12 col-md-8 col-lg-6 d-flex">
                <Form.Control type="search" placeholder="Nombre, estado, protectora y sexo" className="input-bar-search flex-grow-1" aria-label="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <Button className="button-bar-search" type="submit">
                <i className="bi bi-search"></i>
            </Button>
        </Form>

        <section className="mb-5">
          <h4 className="home-categorias mb-3 text-start text-lg-center">Categorías</h4>
          <div className="home-group-button d-flex justify-content-start justify-content-lg-center">
            <button className="home-button-categoria mb-2">🐱 Gato</button>
            <button className="home-button-categoria mb-2">🐶 Perro</button>
            <button className="home-button-categoria mb-2">🐹 Hamster</button>
            <button className="home-button-categoria mb-2">🐰 Conejo</button>
          </div>
        </section>
    </>
    );
}

export default Filters;