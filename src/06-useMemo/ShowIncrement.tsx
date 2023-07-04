import React from 'react';
function ShowIncrement({ increment }: { increment: (value: number) => void }) {
  // console.log('me volvi a generar :(');
  return (
    <>
      <button className="btn btn-primary" onClick={() => increment(5)}>
        Incrementar
      </button>
    </>
  );
}

const ShowIncrementMemo = React.memo(ShowIncrement);
export { ShowIncrementMemo };
