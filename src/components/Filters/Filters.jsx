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
        <Form className="d-flex justify-content-center p-4" onSubmit={handleSearch}>
          <Form.Control type="search" placeholder="Nombre, estado, protectora y sexo" className="input-bar-search" aria-label="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <Button className="button-bar-search" type="submit">
            <i className="bi bi-search"></i>
          </Button>
        </Form>
        <section className="mb-4">
          <h4 className="home-categorias mb-3">Categorías</h4>
          <div className="home-group-button">
            <button className="home-button-categoria">🐱 Gato</button>
            <button className="home-button-categoria">🐶 Perro</button>
            <button className="home-button-categoria">🐹 Hamster</button>
            <button className="home-button-categoria">🐰 Conejo</button>
          </div>
        </section>
    </>
    );
}

export default Filters;