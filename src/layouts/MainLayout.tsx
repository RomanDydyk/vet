import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.content}>
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
