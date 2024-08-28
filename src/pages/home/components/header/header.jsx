import Styles from "./header.module.css";
import { useState, useEffect } from "react";
import PopupMenu from "../../../../global components/popup menu/popup_menu";

const Header = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const section = document.querySelector("#background");
    const handleScroll = () => {
      if (section.scrollTop > 100) {
        setSmall(true);
      } else {
        setSmall(false);
      }
    };
    section.addEventListener("scroll", handleScroll);
    return () => {
      section.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={small ? Styles.header_scrolled : Styles.header}>
      <div className={Styles.header_left}>
        <div
          className={
            small ? Styles.header_avatar_scrolled : Styles.header_avatar
          }
        />
        <span className={Styles.header_name}>David Gevawer</span>
      </div>
      <nav className={Styles.header_right}>
        <ul className={Styles.header_nav_list}>
          <li className={Styles.header_nav_item}>
            <a onClick={() => scrollToSection("inicio")}>Inicio</a>
          </li>
          <li className={Styles.header_nav_item}>
            <a onClick={() => scrollToSection("proyectos")}>Proyectos</a>
          </li>
          <li className={Styles.header_nav_item}>
            <a onClick={() => scrollToSection("contacto")}>Contacto</a>
          </li>
        </ul>
        <PopupMenu />
      </nav>
    </header>
  );
};

export default Header;
