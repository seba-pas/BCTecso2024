export const DetailLayout = ({ children }) => {
  return (
    <section className="w-100 min-vh-100 mx-auto d-flex flex-column align-items-center position-absolute start-0 end-0" style={{ maxWidth: "640px" }}>
      {children}
    </section>
  );
};
