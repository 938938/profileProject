import { useNavigate } from 'react-router-dom';

const Two = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>간략한 프로젝트 소개 및 프로젝트 상세 리스트로 넘어가는 버튼</p>
      <button onClick={() => navigate('/project')}>프로젝트 보기</button>
    </div>
  );
};

export default Two;
