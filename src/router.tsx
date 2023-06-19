import { Router as RemixRouter } from '@remix-run/router/dist/router';
import Main from './pages/Main';
import { createBrowserRouter } from 'react-router-dom';
import Profile from './pages/Profile';
import Project from './pages/Project';

export const routers: RemixRouter = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: '/project',
        element: <Project />,
      },
    ],
  },
]);
