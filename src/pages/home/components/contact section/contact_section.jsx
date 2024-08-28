import Styles from "./contact_section.module.css";

const ContactSection = () => {
  const whatsappUrl = `https://wa.me/+50489961292/?text=${encodeURIComponent(
    "encontré tu número en tu página xd"
  )}`;

  return (
    <div className={Styles.contactSection}>
      <h1>Hola, contáctame.</h1>
      <div className={Styles.container}>
        <h2>
          Whatsapp:{" "}
          <a href={whatsappUrl} className={Styles.a}>
            +504 8996-1292
          </a>
        </h2>
        <h3>
          Escribeme diciendo: encontré tu número en tu página xd
          <br />
          <br />
          Si me das suficiente plata también hago tus tareas :P
        </h3>
        <h2>
          Instagram:{" "}
          <a
            href="https://www.instagram.com/david_gevawer/"
            className={Styles.a}
          >
            david_gevawer
          </a>
        </h2>
        <h3>Andá seguime, publico historias de animalitos</h3>
      </div>
    </div>
  );
};

export default ContactSection;
