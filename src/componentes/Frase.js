import { useContext } from "react";
import { PalabrasContext } from "../contexts/PalabrasContext";

export const Frase = (props) => {
  const { quitaPalabraFrase } = props;
  const { frase } = useContext(PalabrasContext);
  return (
    <ul className="resultado">
      {frase.map((palabra, i) => (
        <li key={palabra.id} onClick={() => quitaPalabraFrase(palabra)}>
          {i === 0
            ? palabra.texto[0].toUpperCase() + palabra.texto.slice(1)
            : palabra.texto}
        </li>
      ))}
    </ul>
  );
};
