import Message from './Message';
import useForm from '../hooks/useForm';

function SimpleFormWithHook() {
  const { handleInputChange, handleSubmit, name, email, password } = useForm({
    name: '',
    email: '',
    password: '',
  });

  return (
    <div className="container">
      <h3>Form Simple</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-check-label" htmlFor="name1">
            Nombre:
          </label>
          <input
            className="form-control"
            type="text"
            id="name1"
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="name is here ..."
          />
          <label className="form-check-label" htmlFor="email1">
            Email:
          </label>
          <input
            className="form-control"
            type="email"
            id="email1"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="email@gmail.com"
          />
          <label className="form-check-label" htmlFor="password">
            Password:
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            placeholder="password is here ..."
          />

          <button className="btn btn-primary mt-2 ">Send</button>
        </div>
      </form>

      {name === 'kamila' && <Message />}
    </div>
  );
}

export default SimpleFormWithHook;
