import { Outlet } from 'react-router-dom';
import Header from './Header';

const Contents = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Contents;
