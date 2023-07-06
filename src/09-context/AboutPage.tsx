import { useContext } from 'react';
import { UserContext } from './context/userContext';
export const AboutPage = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="container">
      <h3>About Page</h3>
      <hr />
      <pre>{user.name}</pre>
    </div>
  );
};
