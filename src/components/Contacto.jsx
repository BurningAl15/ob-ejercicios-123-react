import { Component } from "react";
import PropTypes from "prop-types";

class Contacto extends Component {
  constructor(props) {
    super(props);
    const { nombre, apellido, email, conectado } = this.props;
    this.state = {
      nombre: nombre || "",
      apellido: apellido || "",
      email: email || "",
      conectado: conectado || false,
    };
  }

  render() {
    return (
      <div className={`contact ${this.state.conectado ? "On" : "Off"}`}>
        <span>{this.state.nombre} </span>
        <span>{this.state.apellido}</span>
        <p>{this.state.email}</p>
      </div>
    );
  }
}

Contacto.propTypes = {
  nombre: PropTypes.string,
  apellido: PropTypes.string,
  email: PropTypes.string,
  conectado: PropTypes.bool,
};

export default Contacto;
