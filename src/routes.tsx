import { useRoutes } from 'react-router';

import MainLayout from 'layouts/MainLayout';
import Home from 'pages/Home';
import Basket from 'pages/Basket';
import Delivery from 'pages/Delivery';

export default () =>
  useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '', element: <Home /> },
        { path: '/basket', element: <Basket /> },
        { path: '/delivery', element: <Delivery /> },
      ],
    },
  ]);
