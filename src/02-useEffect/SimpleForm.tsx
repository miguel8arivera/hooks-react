import { useEffect, useState } from 'react';
import Message from './Message';

type SimpleFormState = {
  name: string;
  email: string;
};

function SimpleForm() {
  /*   const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>(''); */
  const [formState, setFormState] = useState<SimpleFormState>({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim().length === 0 || email.trim().length === 0) return;
    console.log(formState);
    setFormState({
      name: '',
      email: '',
    });
  };

  useEffect(() => {
    // console.log('useEffect');
  }, []);

  useEffect(() => {
    // console.log('useEffect formState');
  }, [formState]);

  useEffect(() => {
    // console.log('useEffect email');
  }, [email]);
  return (
    <div className="container">
      <h3>Form Simple</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-check-label" htmlFor="name">
            Nombre:
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="name is here ..."
          />
        </div>
        <label className="form-check-label" htmlFor="email">
          Email:
        </label>
        <input
          className="form-control"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          placeholder="email@gmail.com"
        />

        <button className="btn btn-primary mt-2 ">Send</button>
      </form>

      {name === 'kamila' && <Message />}
    </div>
  );
}

export default SimpleForm;
