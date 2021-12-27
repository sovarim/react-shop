import { useRoutes } from 'react-router';

import MainLayout from 'layouts/MainLayout';
import Home from 'pages/Home';

export default () =>
  useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [{ path: '', element: <Home /> }],
    },
  ]);
