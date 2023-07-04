import { useRef } from 'react';

export default function FocusInput() {
  const input = useRef(null);

  const onFocus = () => {
    input.current.select();
  };
  return (
    <div className="container">
      <h3>useRef </h3>
      <h5>Descripcion:</h5>
      <p>
        useRef es un hook que nos permite crear una referencia mutable, es decir
        que no va a cambiar su valor, pero si va a cambiar su contenido, por
        ejemplo, si queremos hacer focus a un input, podemos crear una
        referencia a ese input y luego hacer focus a ese input
        (input.current.focus()) o seleccionar todo el texto
        (input.current.select()) o hacer cualquier otra cosa que se nos ocurra
        con ese input (input.current.value = 'Hola mundo') o con cualquier otro
        elemento del DOM (input.current.querySelector('h1').innerText = 'Hola
        mundo')
      </p>
      <div>
        <label className="form-chek-label" htmlFor="user">
          Usuario:{' '}
        </label>
        <input ref={input} className="form-control" type="text" />
        <button onClick={onFocus} className="btn btn-primary m-2">
          Focus
        </button>
      </div>
    </div>
  );
}
