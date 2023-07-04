import { useCallback, useState } from 'react';
import { ShowIncrementMemo } from './ShowIncrement';

export default function CallbackHook() {
  const [counter, setCounter] = useState(10);

  const increment = useCallback((value: number) => {
    setCounter((c) => c + value);
  }, []);

  // useEffect(() => {
  //   increment();
  // }, [increment]);
  return (
    <div className="container">
      <h3>useCallback</h3>
      <h5>descripcion:</h5>
      <p>
        useCallback es para memorizar una función, digamos que tienes una
        función pesada que tomo tiempo calcular, entonces la memorizas, y
        únicamente la volverás a calcular si los parámetros o argumentos cambian
        (en este caso el counter)
      </p>
      <div>
        <h4>Counter: {counter}</h4>
        <ShowIncrementMemo increment={increment} />
      </div>
    </div>
  );
}
