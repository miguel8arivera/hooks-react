import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    return `${iterationNumber} iteraciones realizadas`;
  }
};

export default function MemoHook() {
  const { counter, increment } = useCounter(40);
  const [show, setShow] = useState<boolean>(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <div className="container">
      <h3>useMemo</h3>
      <h5>Descripcion:</h5>
      <p>
        Un useMemo, es para memorizar un valor, digamos que tienes un proceso
        pesado que tomo tiempo calcular, entonces lo memorizas, y únicamente lo
        volverás a calcular si los parámetros o argumentos cambian (en este caso
        el counter)
      </p>
      <h4>Counter: {counter}</h4>
      <div>
        <p>{memorizedValue}</p>
        <button className="btn btn-primary" onClick={() => increment(1)}>
          +1
        </button>
        <button
          onClick={() => setShow(!show)}
          className="btn btn-outline-primary m-2"
        >
          {JSON.stringify(show)}
        </button>
      </div>
    </div>
  );
}
