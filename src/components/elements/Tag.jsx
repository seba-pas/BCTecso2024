export const Tag = ({ type, value }) => {
  return (
    <div className="d-flex flex-column py-3 align-items-center rounded-3 gap-2" style={{ border: " 1px solid rgba(245, 245, 245, 1)", width: "70px" }}>
      <h5 className="p-0 m-0" style={{ color: "var(--brand-neutro-01)", fontWeight: "500", fontSize: "12px" }}>
        {value}
      </h5>
      <span style={{ color: "var(--brand-neutro-02)", fontWeight: "400", fontSize: "10px" }}>{type}</span>
    </div>
  );
};
