import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Profile</p>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
};

export default Profile;
