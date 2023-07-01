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
        <h3>Simple CounterApp</h3>
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
