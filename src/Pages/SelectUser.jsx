import { Link } from "react-router-dom"
const SelectUser = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 vw-100">
        <div>Pantalla para seleccionar el tipo de usuario</div>
        <div className="text-center">
          <Link to="/register/protector" className="px-2">Protectora</Link>
          <Link to="/register/petter" className="px-2">Mascotero</Link>
        </div>
      </div>
    </>
  )
}

export default SelectUser
