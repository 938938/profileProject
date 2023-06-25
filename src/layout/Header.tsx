import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/')}>Main</button>
      <button onClick={() => navigate('/profile')}>Profile</button>
      <button onClick={() => navigate('/project')}>Project</button>
    </div>
  );
};

export default Header;
