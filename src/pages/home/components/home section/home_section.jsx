import Styles from "./home_section.module.css";
import IconButton from "/src/global components/icon button/icon_button";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faGithub, faPlay);

const HomeSection = () => {
  return (
    <div className={Styles.homeSection}>
      <h1>Hola, buenas.</h1>
      <h2>¿Qué tal?</h2>
      <h3>El gobierno gobierna con su pierna hay leche y sal XD</h3>
      <div className={Styles.divRow}>
        <IconButton
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1"
          icon={<FontAwesomeIcon icon="play" />}
          text="Link 100% real no fake"
        />
        <IconButton
          url="https://github.com/DavidGevawer03"
          icon={<FontAwesomeIcon icon={["fab", "github"]} />}
          text="GitHub"
        />
      </div>
    </div>
  );
};

export default HomeSection;
