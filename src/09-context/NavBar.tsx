import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <Link
        to="/"
        className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover m-2"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover m-2"
      >
        About
      </Link>
      <Link
        to="/login"
        className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover m-2"
      >
        Login
      </Link>
      <Link
        to="/contact"
        className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover m-2"
      >
        Contacto
      </Link>
    </>
  );
};
