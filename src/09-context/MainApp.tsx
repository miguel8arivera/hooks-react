import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';

export const MainApp = () => {
  return (
    <div className="container">
      <h2 className="text-center">MainApp</h2>
      <NavBar />
      <hr />
      <h3>Main Dasboard</h3>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
