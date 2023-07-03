import { useEffect, useState } from 'react';

const Message = () => {
  const [coords, setCoords] = useState<object>({ x: 0, y: 0 });
  useEffect(() => {
    // creamos una referencia a la función que queremos ejecutar
    function mouseMove(e: MouseEvent) {
      const { x, y } = e;
      const coors = { x, y };
      setCoords(coors);
    }
    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove); // sirve para limpiar el efecto
    };
  }, []);
  /*   useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third]) */

  return (
    <>
      <h3>Registrate ahora 👌</h3>
      <p>{JSON.stringify(coords)}</p>
    </>
  );
};

export default Message;
