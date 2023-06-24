import { useNavigate } from 'react-router-dom';

const Project = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Project</p>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
};

export default Project;
