import { useState } from 'react';
import { UserContext } from './userContext';

// 2.importamos el contexto que creamos en el archivo UserContext.tsx y lo usamos en este componente.
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
