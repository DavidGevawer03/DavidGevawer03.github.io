import { useState, useRef, useEffect } from "react";
import styles from "./popup_menu.module.css";

const PopupMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  const handleMenuClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setShowMenu(false); // Cierra el menú después de hacer clic
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.popupMenuContainer}>
      <button className={styles.menuButton} onClick={handleToggleMenu}>
        &#9776;
      </button>
      {showMenu && (
        <div className={styles.menu} ref={menuRef}>
          <a onClick={() => handleMenuClick("inicio")}>Inicio</a>
          <a onClick={() => handleMenuClick("proyectos")}>Proyectos</a>
          <a onClick={() => handleMenuClick("contacto")}>Contacto</a>
        </div>
      )}
    </div>
  );
};

export default PopupMenu;
