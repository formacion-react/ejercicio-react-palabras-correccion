import { useContext } from "react";
import { PalabrasContext } from "../contexts/PalabrasContext";

export const ListaPalabras = (props) => {
  const { anyadePalabraFrase } = props;
  const { listaPalabras } = useContext(PalabrasContext);
  return (
    <ul className="lista-palabras">
      {listaPalabras.map((palabra) => (
        <li key={palabra.id} onClick={() => anyadePalabraFrase(palabra)}>
          {palabra.texto}
        </li>
      ))}
    </ul>
  );
};
