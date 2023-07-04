import React from 'react';

type HijoProps = {
  numero: number;
  incrementar: (value: number) => void;
};

export const Hijo = ({ numero, incrementar }: HijoProps) => {
  console.log('  Me volví a generar :(  ');

  return (
    <button className="btn btn-primary m-2" onClick={() => incrementar(numero)}>
      {numero}
    </button>
  );
};

const HijoMemo = React.memo(Hijo);

export { HijoMemo };
