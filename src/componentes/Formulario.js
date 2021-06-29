import { useState } from "react";

export const Formulario = (props) => {
  const { crearPalabra } = props;
  const datosIniciales = {
    texto: "",
    maximo: "",
    esLenguaje: false,
  };
  const [datosNuevaPalabra, setDatosNuevaPalabra] = useState(datosIniciales);
  const setDato = (e) => {
    setDatosNuevaPalabra({
      ...datosNuevaPalabra,
      [e.target.id]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  const formularioValido = () => {
    return datosNuevaPalabra.texto !== "" && datosNuevaPalabra.maximo !== "";
  };
  const enviarFormulario = (e) => {
    e.preventDefault();
    crearPalabra(datosNuevaPalabra);
    setDatosNuevaPalabra(datosIniciales);
  };
  return (
    <form className="form-palabras" onSubmit={enviarFormulario}>
      <div className="form-grupo">
        <input
          type="text"
          placeholder="Nueva palabra"
          id="texto"
          value={datosNuevaPalabra.texto}
          onChange={setDato}
          required
        />
      </div>
      <div className="form-grupo">
        <select
          required
          id="maximo"
          value={datosNuevaPalabra.maximo}
          onChange={setDato}
        >
          <option value="">Máximo de veces</option>
          <option value="0">Sin límite</option>
          <option value="1">1 vez</option>
          <option value="2">2 veces</option>
          <option value="3">3 veces</option>
        </select>
      </div>
      <div className="form-grupo">
        <label>
          <input
            type="checkbox"
            id="esLenguaje"
            checked={datosNuevaPalabra.esLenguaje}
            onChange={setDato}
          />{" "}
          Es un lenguaje de programación
        </label>
      </div>
      <div className="form-grupo">
        <button type="submit" disabled={!formularioValido()}>
          Crear
        </button>
      </div>
    </form>
  );
};
