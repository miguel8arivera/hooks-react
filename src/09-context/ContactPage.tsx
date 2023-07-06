import { useContext } from 'react';
import { UserContext } from './context/userContext';

export const ContactPage = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="container">
      <h3>Contact Page</h3>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
};
