import Styles from "./projects_section.module.css";
import { Link } from "react-router-dom";
import ProjectCard from "../project card/project_card";
import FirebaseLogo from "/src/assets/icons/firebase.svg";
import FlutterLogo from "/src/assets/icons/flutter.svg";
import ReactLogo from "/src/assets/icons/react.svg";
import NestJsLogo from "/src/assets/icons/nestjs.svg";
import PostgreSQLLogo from "/src/assets/icons/postgresql.svg";
import CampusConnectImage from "/src/assets/projects/campusconnect.webp";
import CrewStockImage from "/src/assets/projects/crewstock.webp";
import MLGHubImage from "/src/assets/projects/mlghub.webp";

const ProjectsSection = () => {
  return (
    <div className={Styles.projectsSection}>
      <h1>Proyectos</h1>
      <div className={Styles.divWrap}>
        <Link to="/project/campusconnect" className={Styles.projectLink}>
          <ProjectCard
            image={CampusConnectImage}
            title="Campus Connect: UNAH-VS"
            description="Campus Connect: UNAH-VS es una red social estudiantil con un toque especial. Ofrece un marketplace, noticias, entretenimiento y personalización de perfiles, todo en un solo lugar."
            icon1={<img src={FlutterLogo} className={Styles.imageIcons} />}
            icon2={<img src={FirebaseLogo} className={Styles.imageIconsAlt} />}
          />
        </Link>
        <Link to="/" className={Styles.projectLink}>
          <ProjectCard
            image={CrewStockImage}
            title="Crew Stock"
            description="Crew Stock es tu destino en línea definitivo donde comprar tus zapatos, ropa y accesorios. Con un diseño elegante y fácil de usar, Crew Stock ofrece una experiencia de compra inigualable, permitiéndote explorar una amplia variedad de productos cuidadosamente seleccionados para adaptarse a todos los estilos y ocasiones."
            icon1={<img src={FlutterLogo} className={Styles.imageIcons} />}
            icon2={<img src={FirebaseLogo} className={Styles.imageIconsAlt} />}
          />
        </Link>

        <Link to="/" className={Styles.projectLink}>
          <ProjectCard
            //image="/src/assets/projects/crewstock.png"
            title="QuickBus Pay"
            description="QuickBus Pay es una innovadora aplicación móvil diseñada para facilitar y modernizar los pagos de transporte público en autobuses mediante el uso de códigos QR. Con QuickBus Pay, los pasajeros pueden realizar pagos de manera rápida, segura y sin contacto, mejorando la eficiencia y la comodidad en sus desplazamientos diarios."
            icon1={<img src={FlutterLogo} className={Styles.imageIcons} />}
            icon2={<img src={ReactLogo} className={Styles.imageIconsAlt} />}
            icon3={<img src={NestJsLogo} className={Styles.imageIconsAlt} />}
            icon4={
              <img src={PostgreSQLLogo} className={Styles.imageIconsAlt} />
            }
          />
        </Link>

        <Link to="/" className={Styles.projectLink}>
          <ProjectCard
            image={MLGHubImage}
            title="MLG Hub"
            description="MLG Hub es una plataforma innovadora diseñada específicamente para Multiservicio Lara Gevawer, proporcionando una solución integral para la gestión de recursos y operaciones empresariales. Este proyecto consta de una landing page pública y una aplicación interna robusta con múltiples dashboards y aplicaciones internas, facilitando una gestión eficiente y centralizada."
            icon1={<img src={FlutterLogo} className={Styles.imageIcons} />}
            icon2={<img src={ReactLogo} className={Styles.imageIconsAlt} />}
            icon3={<img src={FirebaseLogo} className={Styles.imageIconsAlt} />}
            icon4={<img src={NestJsLogo} className={Styles.imageIconsAlt} />}
            icon5={
              <img src={PostgreSQLLogo} className={Styles.imageIconsAlt} />
            }
          />
        </Link>

        <Link to="/" className={Styles.projectLink}>
          <ProjectCard
            //image="/src/assets/projects/mlghub.jpg"
            title="ZooGotchi"
            description="¡Bienvenido a ZooGotchi! Esta aplicación te permite adoptar y cuidar de una adorable mascota digital directamente desde tu dispositivo móvil. Diseñada para ofrecer una experiencia interactiva y entretenida, ZooGotchi es perfecta para aquellos que buscan revivir la nostalgia de los clásicos Tamagotchis o para quienes desean experimentar por primera vez la diversión de tener una mascota virtual."
            icon1={<img src={FlutterLogo} className={Styles.imageIcons} />}
            icon3={<img src={FirebaseLogo} className={Styles.imageIconsAlt} />}
          />
        </Link>
      </div>
      <div className={Styles.divCenter}>
        <h3>Más proyectos próximamente</h3>
      </div>
    </div>
  );
};

export default ProjectsSection;
