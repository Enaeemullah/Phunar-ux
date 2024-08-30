import styled from 'styled-components';
import { Button } from 'antd';

const StyledButton = styled(Button)`
  width: 100%;
  background-color: ${({ theme }) => theme.primaryColor || '#532a6e'};
  border: none;
  color: #fff;
  font-family: 'Avenir Heavy', sans-serif;

  &:hover {
    background-color: ${({ theme }) => theme.primaryColor || '#532a6e'};
    opacity: 0.9;
  }
`;

export default StyledButton;
