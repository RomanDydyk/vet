import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import RewardsPage from './pages/RewardsPage/RewardsPage';
import OwnerPage from './pages/OwnerPage/OwnerPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'rewards',
        element: <RewardsPage />,
      },
      {
        path: 'owner/:id',
        element: <OwnerPage />,
      },
    ],
  },
]);

export default router;
