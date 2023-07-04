import { useCounter, useFetch } from '../hooks';
import { Character, IsError, IsLoading } from '../03-examples';
import Quote from './Quote';

function Posts() {
  const { increment, counter, decrement } = useCounter(1);
  const { getData, data, isLoading, isError } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${counter}`
  );

  const { body, title } = !!data && data;
  // si en el caso de que la data sea un array, se puede desestructurar de la siguiente manera:
  // const {} = !!data && data[0]; => la primera ! significa que ese null lo pasamos a true y el segundo ! lo pasa a false
  // console.log({ data, isLoading, isError });
  return (
    <div className="container">
      <h3>Multiple Cootom Hooks (useLayoutEffect )</h3>
      <h5>Descripcion:</h5>
      <p>
        El useLayoutEffect es similar al useEffect, pero se ejecuta antes de que
        se pinte el componente, es decir, antes de que se pinte el html, y el
        useEffect se ejecuta después de que se pinte el html (después de que se
        pinte el componente) y antes de que se pinte el siguiente componente (el
        que se pinte después del componente que tiene el useEffect) y el
        useLayoutEffect se ejecuta antes de que se pinte el componente y antes
        de que se pinte el siguiente componente (el que se pinte después del
        componente que tiene el useLayoutEffect) y antes de que se pinte el
        html. El useLayoutEffect es síncrono y el useEffect es asíncrono. El
        useLayoutEffect se ejecuta antes de que se pinte el html, y el useEffect
        se ejecuta después de que se pinte el html.
      </p>
      {isLoading ? (
        <IsLoading />
      ) : isError ? (
        <IsError />
      ) : (
        <Quote body={body} title={title} />
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

export default Posts;
