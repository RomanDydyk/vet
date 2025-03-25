import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import RewardsPage from './pages/RewardsPage/RewardsPage';

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
    ],
  },
]);

export default router;
