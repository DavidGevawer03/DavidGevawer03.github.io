import Header from "./components/header/header";
import HomeSection from "./components/home section/home_section";
import ProjectsSection from "./components/projects section/projects_section";
import ContactSection from "./components/contact section/contact_section";
import Footer from "./components/footer/footer";
import Styles from "./home_page.module.css";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div id="background" className={Styles.background}>
        <div id="inicio">
          <HomeSection />
        </div>
        <div id="proyectos">
          <ProjectsSection />
        </div>
        <div id="contacto">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
