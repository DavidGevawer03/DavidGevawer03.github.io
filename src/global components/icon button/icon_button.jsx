import PropTypes from "prop-types";
import Styles from "./icon_button.module.css";

const IconButton = ({ url, icon, text }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <button className={Styles.button} onClick={handleClick}>
      <span className={Styles.icon}>{icon}</span>
      <span>{text}</span>
    </button>
  );
};

IconButton.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default IconButton;
