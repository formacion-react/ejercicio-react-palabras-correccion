import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Estadisticas } from "./componentes/Estadisticas";
import { Formulario } from "./componentes/Formulario";
import { Frase } from "./componentes/Frase";
import { ListaPalabras } from "./componentes/ListaPalabras";
import { PalabrasContext } from "./contexts/PalabrasContext";
import { palabras } from "./datos/palabras";

function App() {
  const [listaPalabras, setListaPalabras] = useState([]);
  const [frase, setFrase] = useState([]);
  const anyadePalabraFrase = (palabra) => {
    if (
      palabra.maximo > 0 &&
      frase.filter((palabraNueva) => palabraNueva.texto === palabra.texto)
        .length === palabra.maximo
    ) {
      return;
    }
    setFrase([...frase, { ...palabra, id: uuidv4() }]);
  };
  const quitaPalabraFrase = (palabraBorrar) => {
    setFrase(frase.filter((palabra) => palabra.id !== palabraBorrar.id));
  };
  const crearPalabra = (palabra) => {
    if (
      listaPalabras.find(
        (palabraBuscada) => palabraBuscada.texto === palabra.texto
      )
    ) {
      return;
    }
    setListaPalabras([
      ...listaPalabras,
      { ...palabra, id: uuidv4(), maximo: +palabra.maximo },
    ]);
  };
  useEffect(() => {
    setTimeout(() => setListaPalabras([...palabras]), 2000);
  }, []);
  return (
    <PalabrasContext.Provider
      value={{ listaPalabras, setListaPalabras, frase, setFrase }}
    >
      <section className="palabras">
        <ListaPalabras anyadePalabraFrase={anyadePalabraFrase} />
        <Frase quitaPalabraFrase={quitaPalabraFrase} />
      </section>
      <section className="crear-palabras">
        <Formulario crearPalabra={crearPalabra} />
      </section>
      <section className="info">
        <Estadisticas />
      </section>
    </PalabrasContext.Provider>
  );
}

export default App;
