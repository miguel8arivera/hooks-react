import { HijoMemo } from './Hijo';
import { useCallback, useState } from 'react';

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  /* const incrementar = (num: number) => {
    setValor(valor + num);
  }; */

  const incrementar = useCallback((value: number) => {
    setValor((v) => v + value);
  }, []);

  return (
    <div className="container">
      <h3>Fin de la seccion de los hooks basicos</h3>
      <p> Total: {valor} </p>

      <hr />
      <h5>Tarea</h5>
      <p>
        lograr que el componente <b>Hijo</b> no se renderice cuando el valor del
        contador no cambia (usar React.memo) y que el componente <b>Padre</b> no
        se renderice cuando el valor del contador no cambia (usar useCallback)
        (ver en la consola que no se vuelven a renderizar los componentes)
      </p>

      {numeros.map((n) => (
        <HijoMemo key={n} numero={n} incrementar={incrementar} />
      ))}
      {/* <Hijo /> */}
    </div>
  );
};
