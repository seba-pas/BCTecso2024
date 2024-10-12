import { Tag, MapPin, Pill, ShelterDetail } from "..";

export const Detail = ({ name, status, description, address, tags = [], shelter }) => {
  return (
    <main className="w-100 p-3 d-flex flex-column gap-4 position-absolute " style={{ backgroundColor: "var(--background-lightmode-primary)", marginTop: "380px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", fontFamily: "Poppins, sans-serif" }}>
      <div className="mx-auto" style={{ width: "50px", height: "2px", backgroundColor: "var( --brand-neutro-01)", opacity: "70%" }}></div>
      <div className="w-100 d-flex justify-content-between position-relative" style={{ marginTop: "0px" }}>
        <div className="d-flex flex-column gap-2">
          <h1 className="m-0 p-0 fw-semibold" style={{color:'var(--brand-neutro-01)'}}>{name}</h1>
          <div className="d-flex align-items-center gap-1">
            <MapPin />
            <span style={{ color: "var(--brand-neutro-01)", fontWeight: "400", fontSize: "14px" }}>{address}</span>
          </div>
        </div>
        <Pill status={status} />
      </div>
      <div className="d-flex gap-3">{tags && tags.map(({ type, value }) => <Tag key={value} type={type} value={value} />)}</div>
      {shelter && <ShelterDetail {...shelter} />}
      <p className="scroll-animated" style={{ marginBottom: "80px", color: "var(--brand-neutro-01)", fontWeight: "400", fontSize: "14px" }}>
        {description}
      </p>
      <div className="position-fixed bottom-0 end-0 start-0  mx-3 mb-3">
        <button className="rounded-3 border-0 py-3 mx-auto w-100" style={{ maxWidth: "640px", color: "var(--background-lightmode-secondary)", backgroundColor: "var(--brand-primary-01)", fontFamily: "Montserrat, sans-serif" }}>
          Solicitar adopción
        </button>
      </div>
    </main>
  );
};
