import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterPets, searchPets } from "../../features/home/homeData";

function Filters() {
  const dispatch = useDispatch();

  const petsFilter = (e) => dispatch(filterPets(e.target.name));

  const petsSearch = (e) => dispatch(searchPets(e.target.value));

  return (
    <>
      <Form className="d-flex justify-content-center p-4 align-items-stretch ms-2 me-2">
        <div className="col-12 col-md-8 col-lg-6 d-flex">
          <Form.Control onChange={petsSearch} type="search" placeholder="Nombre, estado, protectora y sexo" className="input-bar-search flex-grow-1" aria-label="Search" />
        </div>
        <Button variant="none" className="button-bar-search text-light">
          <i className="bi bi-search"></i>
        </Button>
      </Form>
      <section className="mb-5">
        <h4 className="home-categorias mb-3 text-start text-lg-center">Categorías</h4>
        <div className="home-group-button d-flex justify-content-start justify-content-lg-center">
          <button className="home-button-categoria mb-2" name="Gato" onClick={petsFilter}>
            🐱 Gato
          </button>
          <button className="home-button-categoria mb-2" name="Perro" onClick={petsFilter}>
            🐶 Perro
          </button>
          <button className="home-button-categoria mb-2" name="Hamster" onClick={petsFilter}>
            🐹 Hamster
          </button>
          <button className="home-button-categoria mb-2" name="Conejo" onClick={petsFilter}>
            🐰 Conejo
          </button>
        </div>
      </section>
    </>
  );
}

export default Filters;
