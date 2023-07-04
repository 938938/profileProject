import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { CustomNavy, CustomGray } from '../Style/Color';

const NotPage = () => {
  const navigate = useNavigate();

  return (
    <Caution>
      <p>잘못된 경로입니다!</p>
      <p>다른 페이지로 이동하거나, 뒤로 가기 버튼을 눌러주세요!</p>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </Caution>
  );
};

export default NotPage;

const Caution = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  * {
    margin: 10px;
  }
`;
