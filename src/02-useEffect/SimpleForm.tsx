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
      <h3>Form Simple (useEffect and useState)</h3>
      <h5>Descripcion:</h5>
      <p>
        useEffect es para disparar efectos secundarios... por ejemplo, una
        variable cambia... quieres cancelar una subscripción, quieres crear un
        listener... eso lo puedes hacer con un useEffect y un return que se va a
        ejecutar cuando el componente se desmonte o cuando se vuelva a ejecutar
        el useEffect (si le pasas un array vacío) o cuando cambie la variable
        que le pasas en el array de dependencias (si le pasas una variable en el
        array de dependencias) o cuando cambie el estado del componente (si no
        le pasas nada en el array de dependencias) o cuando cambie el estado del
        componente (si no le pasas nada en el array de dependencias)
      </p>
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
