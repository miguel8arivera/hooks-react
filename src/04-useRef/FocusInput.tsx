import { useRef } from 'react';

export default function FocusInput() {
  const input = useRef(null);

  const onFocus = () => {
    input.current.select();
  };
  return (
    <div className="container">
      <h3>useRef </h3>
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
