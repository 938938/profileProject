import { useNavigate } from 'react-router-dom';

const One = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>간략한 자기 소개 및 프로필로 넘어가는 버튼</p>
      <button onClick={() => navigate('/profile')}>프로필 보기</button>
    </div>
  );
};

export default One;
