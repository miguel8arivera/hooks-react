import { useState } from 'react';

interface SimpleFormState {
  name: string;
  email: string;
  password: string;
  task: string;
}

const initialFormState: SimpleFormState = {
  name: '',
  email: '',
  password: '',
  task: '',
};

const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState<SimpleFormState>(initialForm); // buscar la solucion del error

  const { name, email, password } = formState;

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0
    )
      return;
    console.log(formState);
    setFormState({
      name: '',
      email: '',
      password: '',
      task: '',
    });
  };

  const onResetForm = () => {
    setFormState(initialFormState);
  };

  return {
    ...formState,
    formState,
    handleInputChange,
    handleSubmit,
    onResetForm,
  };
};

export default useForm;
