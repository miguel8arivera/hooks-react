import { useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="container " id="error-page">
      <div className="m-10">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          Please try refreshing the page, or click the button below to return to
        </p>
      </div>
    </div>
  );
}
