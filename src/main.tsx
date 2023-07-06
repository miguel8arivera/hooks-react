import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AboutPage, ContactPage, LoginPage, MainApp } from './09-context';
// import { HooksApps } from './HooksApp';
// import './08-useReducer/intro-reducer';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { ErrorPage } from './09-context/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainApp />,
    errorElement: <Navigate to="/404" />,
    children: [
      {
        path: 'about',
        element: <AboutPage />,
      },

      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
  {
    path: '/404',
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
