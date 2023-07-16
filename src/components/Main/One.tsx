import { useNavigate } from 'react-router-dom';
import * as S from './One.style';

const One = () => {
  const navigate = useNavigate();

  return (
    <S.One>
      <div>
        <p>안녕하세요.</p>
        <p>프론트엔드 개발자</p>
        <p>곽지현입니다.</p>
      </div>
      <S.Btn onClick={() => navigate('/profile')}>프로필 보기</S.Btn>
    </S.One>
  );
};

export default One;
