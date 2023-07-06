import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';
describe('prueba en el hook useCounter', () => {
  test('deberia de retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;
    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('deberia de retornar el counter en 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test('deberia incremetar el counter', () => {
    const { result } = renderHook(() => useCounter(14));
    const { increment } = result.current;
    act(() => {
      increment();
      increment(5);
    });

    expect(result.current.counter).toBe(20);
  });

  test('deberia decrementar el counter', () => {
    const { result } = renderHook(() => useCounter(20));
    const { decrement } = result.current;

    act(() => {
      decrement();
      decrement(5);
    });

    expect(result.current.counter).toBe(14);
  });

  test('deberia resetear el counter', () => {
    const { result } = renderHook(() => useCounter());
    const { reset, decrement } = result.current;

    act(() => {
      decrement();
      reset(0);
    });

    expect(result.current.counter).toBe(0);
  });
});
