import { useState } from 'react';
import { useCounter } from '../hooks';

import { SmallMemo } from './Small';

export default function Memorize() {
  const { counter, increment } = useCounter(1);
  const [show, setShow] = useState<boolean>(true);

  return (
    <div className="container">
      <h3>Memo</h3>
      <h5>descripcion:</h5>
      <p>
        un memo es para memorizar un valor, digamos que tienes un proceso pesado
        que tomo tiempo calcular, entonces lo memorizas, y únicamente lo
        volverás a calcular si los parámetros o argumentos cambian (en este caso
        el counter)
      </p>
      <div>
        <SmallMemo value={counter} />
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
