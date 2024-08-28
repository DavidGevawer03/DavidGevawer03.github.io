import PropTypes from "prop-types";
import Styles from "./project_card.module.css";

const ProjectCard = ({
  image,
  title,
  description,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
}) => {
  return (
    <div className={Styles.card}>
      <div className={Styles.cardHeader}>
        <div className={Styles.imageContainer}>
          {image ? (
            <img src={image} alt={title} className={Styles.projectImage} />
          ) : (
            <div className={Styles.noImageContainer}>
              <p className={Styles.noImageText}>No Image</p>
            </div>
          )}
        </div>
        <p className={Styles.projectTitle}>{title}</p>
      </div>
      <p className={Styles.projectDescription}>{description}</p>
      <div className={Styles.iconContainer}>
        {icon1 && <div className={Styles.icon}>{icon1}</div>}
        {icon2 && <div className={Styles.icon}>{icon2}</div>}
        {icon3 && <div className={Styles.icon}>{icon3}</div>}
        {icon4 && <div className={Styles.icon}>{icon4}</div>}
        {icon5 && <div className={Styles.icon}>{icon5}</div>}
        {icon6 && <div className={Styles.icon}>{icon6}</div>}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon1: PropTypes.node,
  icon2: PropTypes.node,
  icon3: PropTypes.node,
  icon4: PropTypes.node,
  icon5: PropTypes.node,
  icon6: PropTypes.node,
};

export default ProjectCard;
