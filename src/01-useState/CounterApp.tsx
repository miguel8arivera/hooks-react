import { useState } from 'react';

type CounterState = {
  value1: number;
  value2: number;
  value3: number;
};

export const CounterApp = () => {
  const [state, setstate] = useState<CounterState>({
    value1: 10,
    value2: 20,
    value3: 30,
  });

  const { value1, value2, value3 } = state; // desestructuración del state para no tener que usar state.value1, state.value2, state.value3

  const handleCounterValue = () => {
    setstate({
      ...state,
      value1: value1 + 1,
      value2: value2 + 1,
      value3: value3 + 1,
    });
  };
  return (
    <>
      <div className="container">
        <h3>UseState</h3>
        <h5>Descripcion</h5>
        <p>
          useState es un Hook que te permite añadir el estado de React a un
          componente de función. Te da una forma de declarar el estado de una
          variable que el componente va a cambiar (como el nombre de un
          usuario). El único argumento para el Hook useState() es el estado
          inicial. A diferencia de las variables de estado en las clases, el
          estado no tiene que ser un objeto. Puedes mantener un número o una
          cadena si eso es todo lo que necesitas. En nuestro ejemplo, empezamos
          con un número, pero podríamos haber empezado con una cadena de texto
          igual de fácilmente. El Hook useState() devuelve un array con dos
          elementos. El primer elemento es el valor actual del estado, y el
          segundo elemento es una función que te permite actualizar el estado.
          Por eso lo escribimos así. const [count, setCount] = useState(0); Esto
          es lo que llamamos “array destructuring”. Te permite dar nombres
          diferentes a estos dos elementos que obtenemos del array devuelto por
          useState().
        </p>

        <h3>Counter1: {value1}</h3>
        <h3>Counter2: {value2}</h3>
        <h3>Counter3: {value3}</h3>
        <button className="btn btn-primary" onClick={handleCounterValue}>
          Incrementar + 1
        </button>
      </div>
    </>
  );
};
