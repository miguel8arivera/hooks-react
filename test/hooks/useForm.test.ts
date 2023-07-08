import { act, renderHook } from '@testing-library/react';
import useForm from '../../src/hooks/useForm';

describe('Prueba en el hook useForm', () => {
  const formulario = {
    name: 'kamila',
    email: 'kamila@gmai.com',
    password: 'aouaoeu',
    task: 'aoeuaoeu',
  };

  test('deberia retornar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(formulario));
    console.log(result.current);
    expect(result.current).toEqual({
      name: formulario.name,
      email: formulario.email,
      password: formulario.password,
      task: formulario.task,
      formState: formulario,
      handleInputChange: expect.any(Function),
      handleSubmit: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  const newForm = {
    name: 'Anna',
  };
  test('deberia de cambiar el valor del formulario(cambiar name', () => {
    const newValue = 'Anna';
    const { result } = renderHook(() => useForm(newForm));
    const { handleInputChange } = result.current;

    act(() => {
      handleInputChange({ target: { name: 'name', value: newValue } });
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState).toBe(newValue);
  });
});
