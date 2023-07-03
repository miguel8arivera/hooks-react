import { useState } from 'react';

interface SimpleFormState {
  name: string;
  email: string;
  password: string;
}

const initialFormState: SimpleFormState = {
  name: '',
  email: '',
  password: '',
};

const useForm = (initalFormState = {}) => {
  const [formState, setFormState] = useState<SimpleFormState>(initialFormState);

  const { name, email, password } = formState;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

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
    });
  };

  return {
    ...formState,
    formState,
    handleInputChange,
    handleSubmit,
  };
};

export default useForm;
