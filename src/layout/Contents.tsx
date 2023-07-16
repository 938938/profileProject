import { Outlet } from 'react-router-dom';
import * as S from './Contents.style';
import Header from './Header';

const Contents = () => {
  return (
    <S.Contents>
      <Header />
      <Outlet />
    </S.Contents>
  );
};

export default Contents;
