import css from './Layout.module.css';
import { Suspense } from 'react';
import { LuLoader } from 'react-icons/lu';
import AppBar from '../AppBar/AppBar';

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <AppBar />
      <Suspense fallback={<LuLoader />}>{children}</Suspense>
    </div>
  );
};

export default Layout;
