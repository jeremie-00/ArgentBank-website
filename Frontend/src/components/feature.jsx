import PropTypes from "prop-types";

function Feature({ srcImg, title, txt }) {
  return (
    <div className="feature-item">
      <img src={srcImg} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title"> {title} </h3>
      <p>{txt}</p>
    </div>
  );
}

Feature.propTypes = {
  srcImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
};

export default Feature;
