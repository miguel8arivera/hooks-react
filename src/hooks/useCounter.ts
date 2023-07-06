import { useState } from 'react';
export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState<number>(initialValue);
  /* const increment = (value = 1) => setCounter(counter + value); */ // da error en los test porque el estado no se actualiza de forma sincrona y el test falla porque no se actualiza el estado antes de hacer la comparacion

  const increment = (value = 1) => setCounter((c) => c + value);
  const decrement = (value = 1) => {
    if (counter > 0) {
      setCounter((c) => c - value);
    }
  };
  const reset = (value: number) => setCounter((initialValue = 0));
  return { counter, increment, decrement, reset };
};
