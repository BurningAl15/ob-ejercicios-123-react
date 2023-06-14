import { Component } from "react";
import PropTypes from "prop-types";
import Contacto from "./Contacto";

class ListaContacto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactos: [
        {
          nombre: "Aldhair",
          apellido: "Vera",
          email: "aldhairvera15@gmail.com",
          conectado: false,
        },
        {
          nombre: "Ana",
          apellido: "Gonzales",
          email: "agonzales27@gmail.com",
          conectado: true,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.contactos.map((contacto, index) => (
          <div className="contact-container" key={index}>
            <Contacto
              nombre={contacto.nombre}
              apellido={contacto.apellido}
              email={contacto.email}
              conectado={contacto.conectado}
            />
            <p className={`connect-state ${contacto.conectado ? "On" : "Off"}`}>
              {contacto.conectado
                ? "Contacto En Línea"
                : "Contacto No Disponible"}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

ListaContacto.propTypes = {
  contacto: PropTypes.object,
};

export default ListaContacto;
