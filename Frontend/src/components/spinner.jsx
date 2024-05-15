import PropTypes from "prop-types";

function Spinner({ sizeCategory }) {
  return (
    <div className="contenaire-spinner">
      <div className={`spinner ${sizeCategory}`}></div>
    </div>
  );
}

Spinner.propTypes = {
  sizeCategory: PropTypes.string.isRequired,
};

export default Spinner;
