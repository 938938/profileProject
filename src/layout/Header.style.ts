import { styled } from 'styled-components';
import { CustomGray, CustomNavy, CustomRed } from '../Style/Color';

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  border-bottom: 1px solid ${CustomNavy};
  background-color: white;
  display: flex;
  .select {
    color: ${CustomRed};
    border-bottom: 1px solid white;
    background-color: transparent;
  }
  z-index: 60;
`;

export const GnbBtn = styled.button`
  position: relative;
  bottom: -20px;
  left: 100px;
  border: 1px solid ${CustomNavy};
  color: ${CustomNavy};
  width: 200px;
  height: 40px;
  margin: 0 2px;
  border-radius: 10px 10px 0 0;
  background-color: ${CustomGray};
  &:hover {
    color: ${CustomRed};
  }
  z-index: 99;
`;
