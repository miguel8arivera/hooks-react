import React from 'react';

function Small({ value }: { value: number }) {
  // console.log('Me volvi a generar :(');
  return (
    <p>
      Counter: <small>{value}</small>
    </p>
  );
}

const SmallMemo = React.memo(Small); // el memo sirve para memorizar el componente y que no se vuelva a renderizar si no cambia su estado o sus props, se le pone el valor de la función que queremos memorizar
export { SmallMemo }; // se exporta el componente memorizado para poder usarlo en otro componente {} de esta manera para poder importarlo de la siguiente manera: import { SmallMemo } from './Small';
