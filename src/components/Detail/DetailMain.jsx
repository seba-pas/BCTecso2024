import { Tag, MapPin, Pill, ShelterDetail } from "..";

export const DetailMain = ({ nombre, estado, descripcion, ciudad, contacto, edad, raza, sexo, tamano }) => {
  const tags = Object.entries({ edad, raza, sexo, tamano }).map(([key, value]) => ({
    type: key,
    value: value,
  }));

  return (
    <main className="w-100 p-3 d-flex flex-column gap-4 position-absolute z-1" style={{ backgroundColor: "var(--background-lightmode-primary)", marginTop: "380px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", fontFamily: "Poppins, sans-serif" }}>
      <div className="mx-auto" style={{ width: "50px", height: "2px", backgroundColor: "var( --brand-neutro-01)", opacity: "70%" }}></div>
      <div className="w-100 d-flex justify-content-between position-relative" style={{ marginTop: "0px" }}>
        <div className="d-flex flex-column gap-2">
          <h1 className="m-0 p-0 fw-semibold" style={{ color: "var(--brand-neutro-01)" }}>
            {nombre}
          </h1>
          <div className="d-flex align-items-center gap-1">
            <MapPin />
            <span style={{ color: "var(--brand-neutro-01)", fontWeight: "400", fontSize: "14px" }}>{ciudad}</span>
          </div>
        </div>
        <Pill status={estado} />
      </div>
      <div className="d-flex justify-content-center flex-wrap gap-3">{tags && tags.map(({ type, value }) => <Tag key={type} type={type} value={value} />)}</div>
      {contacto && <ShelterDetail {...contacto} />}
      <p className="scroll-animated" style={{ marginBottom: "80px", color: "var(--brand-neutro-01)", fontWeight: "400", fontSize: "14px",whiteSpace:'normal' ,overflowWrap:'break-word'}}>
        {descripcion}
      </p>
      <div className="w-100 mb-3 start-0 px-3 bottom-0 position-fixed d-flex justify-content-center ">
        <button className="rounded-3 border-0 py-3 w-100 " style={{ maxWidth: "608px", color: "var(--background-lightmode-secondary)", backgroundColor: "var(--brand-primary-01)", fontFamily: "Montserrat, sans-serif" }}>
          Solicitar adopción
        </button>
      </div>
    </main>
  );
};
