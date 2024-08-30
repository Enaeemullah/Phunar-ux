import styled from 'styled-components';
import { Input } from 'antd';

const StyledInput = styled(Input)`
  margin-bottom: 16px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.borderColor || '#d9d9d9'};
  font-family: 'Avenir Book', sans-serif;

  &:focus {
    border-color: ${({ theme }) => theme.primaryColor || '#532a6e'};
    box-shadow: 0 0 0 2px rgba(83, 42, 110, 0.2);
  }
`;

export default StyledInput;
