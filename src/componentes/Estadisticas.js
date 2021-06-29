import { useContext } from "react";
import { PalabrasContext } from "../contexts/PalabrasContext";

export const Estadisticas = () => {
  const { frase } = useContext(PalabrasContext);
  const nPalabras = frase.length;
  const nCaracteres = frase.map((palabra) => palabra.texto).join(" ").length;
  const longitudMedia =
    nPalabras === 0
      ? 0
      : frase.map((palabra) => palabra.texto).join("").length / nPalabras;
  const lenguajes = frase
    .filter((palabra) => palabra.esLenguaje)
    .map((palabra) => palabra.texto)
    .filter((palabra, i, palabras) => palabras.indexOf(palabra) === i);
  return (
    <ul>
      <li>
        Nº de palabras <span>{nPalabras}</span>
      </li>
      <li>
        Nº de caracteres <span>{nCaracteres}</span>
      </li>
      <li>
        Longitud media <span>{longitudMedia.toFixed(2)}</span>
      </li>
      <li>
        Contiene {lenguajes.length} lenguaje/s de programación
        <ul>
          {lenguajes.map((lenguaje) => (
            <li key={lenguaje}>{lenguaje}</li>
          ))}
        </ul>
      </li>
    </ul>
  );
};
