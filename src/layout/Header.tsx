import { useNavigate } from 'react-router-dom';
import * as S from './Header.style';

const Header = () => {
  const navigate = useNavigate();

  return (
    <S.Header>
      <button onClick={() => navigate('/')}>Main</button>
      <button onClick={() => navigate('/profile')}>Profile</button>
      <button onClick={() => navigate('/project')}>Project</button>
    </S.Header>
  );
};

export default Header;
