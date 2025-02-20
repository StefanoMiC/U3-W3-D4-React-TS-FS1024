import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";

interface FunctionalComponentProps {
  title: string;
  subtitle?: string;
}

interface IMovieObj {
  title: string;
  year: number | string;
}

const FunctionalComponent = ({ title, subtitle }: FunctionalComponentProps) => {
  const [isLoading, setIsLoading] = useState(false);
  // non è obbligatorio specificare PER FORZA il parametro di tipo manualmente in caso di valori primitivi
  // volendo rispettare le best-practices di TS, in questo caso non andremo a fare nulla. lasceremo che il valore di tipo sia inferito automaticamente

  //   const [movieObj, setMovieObj] = useState<null | { title: string; year: number | string }>(null);
  const [movieObj, setMovieObj] = useState<null | IMovieObj>(null);
  // in questi casi particolari, in cui abbiamo l'esigenza di cominciare specificando un valore iniziale, ma questo valore cambierà tipo nel tempo
  // avremo bisogno di specificare tutte le possibili varianti di tipo
  // quindi tramite l'apertura delle parentesi angolari <> possiamo specificare manualmente queste eventualità, in modo da evitare che venga inferito
  // un UNICO VALORE DI TIPO che rimarrà agganciato per sempre. in questo caso sarebbe stato sempre null se non avessimo fatto l'unione di due tipi

  return (
    <div onClick={() => setIsLoading(true)}>
      {isLoading && <Spinner animation="border" variant="success" />}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}

      <Button variant="success" onClick={() => setMovieObj({ title: "Batman", year: 1980 })}>
        Create Movie Object
      </Button>

      {movieObj && (
        <div>
          <h4>{movieObj.title}</h4>
          <p>{movieObj.year}</p>
        </div>
      )}
    </div>
  );
};
export default FunctionalComponent;
