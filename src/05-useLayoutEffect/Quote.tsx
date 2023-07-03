import { useLayoutEffect, useRef, useState } from 'react';
type QuoteProps = {
  body: string;
  title: string;
};

const initialValue = {
  width: 0,
  height: 0,
  getBoundingClientRect: () => ({
    width: 0,
    height: 0,
  }),
};
export default function Quote({ body, title }: QuoteProps) {
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  const pRef = useRef(initialValue);
  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [body]);
  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: 'flex' }}>
        <p ref={pRef} className="mb-1">
          {body}
        </p>
        <footer className="blockquote-footer"> {title}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
}
