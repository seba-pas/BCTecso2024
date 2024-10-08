import PropTypes from "prop-types";

export const EyeIcon = ({ show, error, className }) => {
  return show ? (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={className}>
      <path stroke={` ${error ? "var(--system-error)" : "#F08318"}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
      <path stroke={` ${error ? "var(--system-error)" : "#F08318"}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={className}>
      <g stroke={` ${error ? "var(--system-error" : "#F08318"}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" clipPath="url(#a)">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.494 18.494 0 0 1-2.16 3.19m-6.72-1.07a2.998 2.998 0 0 1-5.194-2.098A3 3 0 0 1 9.88 9.88M1 1l22 22" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

EyeIcon.propTypes = {
  show: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  className: PropTypes.string,
};
