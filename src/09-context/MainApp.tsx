import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';
import { useContext } from 'react';
import { UserContext } from './context/userContext';

// 3. usamos el useContext para obtener el user del contexto y lo mostramos en el componente.
export const MainApp = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="container mt-2">
      <NavBar />
      <hr />
      <h3>Main Dasboard</h3>
      <hr />

      <div>
        <pre>{JSON.stringify(user, null, 3)}</pre>
        <Outlet />
      </div>
    </div>
  );
};
