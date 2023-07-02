import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './Header.style';

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <S.Header>
      <S.GnbBtn
        className={`${pathname === '/' && 'select'}`}
        onClick={() => navigate('/')}
      >
        Main
      </S.GnbBtn>
      <S.GnbBtn
        className={`${pathname === '/profile' && 'select'}`}
        onClick={() => navigate('/profile')}
      >
        Profile
      </S.GnbBtn>
      <S.GnbBtn
        className={`${pathname === '/project' && 'select'}`}
        onClick={() => navigate('/project')}
      >
        Project
      </S.GnbBtn>
    </S.Header>
  );
};

export default Header;
