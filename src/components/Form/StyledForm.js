import styled from 'styled-components';
import { Form } from 'antd';

const StyledForm = styled(Form)`
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 20px;
  border: 1px solid ${({ theme }) => theme.borderColor || '#d9d9d9'};
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h2 {
    font-family: 'Avenir Heavy', sans-serif;
    color: ${({ theme }) => theme.primaryColor || '#532a6e'};
    text-align: center;
    margin-bottom: 24px;
  }
`;

export default StyledForm;
