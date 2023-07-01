import { useState } from 'react';
export const useCounter = (initialValue: number) => {
  const [counter, setCounter] = useState<number>(initialValue);
  const increment = (value: number) => setCounter(counter + value);
  const decrement = (value: number) => {
    if (counter > 0) {
      setCounter(counter - value);
    }
  };
  const reset = (value: number) => setCounter(initialValue);
  return { counter, increment, decrement, reset };
};
