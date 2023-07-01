import { useCounter } from '../hooks/useCounter';

const CounterAppWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(0);
  return (
    <div className="container">
      <h3>CounterAppWithCustomHook</h3>
      <h3>Counter: {counter}</h3>
      <div className="d-flex mx-2">
        <button className="btn btn-primary m-2" onClick={() => increment(2)}>
          incrementar
        </button>

        <button className="btn btn-primary m-2" onClick={() => reset(0)}>
          reset
        </button>

        <button className="btn btn-primary m-2" onClick={() => decrement(2)}>
          decrementar
        </button>
      </div>
    </div>
  );
};

export default CounterAppWithCustomHook;
