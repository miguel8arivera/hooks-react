import { useContext } from 'react';
import { UserContext } from './context/userContext';

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  return (
    <div className="container">
      <h3>Login Page {user?.name}</h3>
      <hr />
      <ul>
        <li>
          <pre>{JSON.stringify(user, null, 3)}</pre>
        </li>
      </ul>
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({
            id: '123',
            name: 'Kamila Valieva',
            email: 'kamila@valieva.com',
          })
        }
      >
        Obtener Usuario
      </button>
    </div>
  );
};
