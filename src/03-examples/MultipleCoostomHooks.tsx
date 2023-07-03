import { useCounter, useFetch } from '../hooks';
import { Character, IsError, IsLoading } from '../03-examples';

function MultipleCoostomHooks() {
  const { increment, counter, decrement } = useCounter(1);
  const { getData, data, isLoading, isError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );
  // si en el caso de que la data sea un array, se puede desestructurar de la siguiente manera:
  // const {} = !!data && data[0]; => la primera ! significa que ese null lo pasamos a true y el segundo ! lo pasa a false
  // console.log({ data, isLoading, isError });
  return (
    <div className="container">
      <h3>Multiple Cootom Hooks</h3>
      {isLoading ? (
        <IsLoading />
      ) : isError ? (
        <IsError />
      ) : (
        <Character data={data} />
      )}
      <button
        disabled={isLoading}
        className="btn btn-primary m-2"
        onClick={() => increment(1)}
      >
        next
      </button>
      <button className="btn btn-primary m-2" onClick={() => decrement(1)}>
        prev
      </button>
    </div>
  );
}

export default MultipleCoostomHooks;
