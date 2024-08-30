import React from 'react';
import styled from 'styled-components';
import { Form } from 'antd';
import { StyledButton, StyledInput } from 'components';
import { Link } from 'react-router-dom';

// Wrapper for the Sign-In page
const SignInWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.secondaryColor || '#f0f2f5'};
`;

// Container for the form
const FormContainer = styled.div`
  width: 400px;
  padding: 40px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Styled heading
const Heading = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.primaryColor || '#532a6e'};
`;

// Styled signup link
const SignupLink = styled.div`
  margin-top: 16px;
  text-align: center;

  a {
    color: ${({ theme }) => theme.primaryColor || '#532a6e'};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SignIn = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <SignInWrapper>
      <FormContainer>
        <Heading>Sign In</Heading>
        <Form
          name='signIn'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name='email'
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <StyledInput placeholder='Email' />
          </Form.Item>

          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <StyledInput type='password' placeholder='Password' />
          </Form.Item>

          <Form.Item>
            <StyledButton type='primary' htmlType='submit'>
              Sign In
            </StyledButton>
          </Form.Item>
        </Form>
        <SignupLink>
          <p>
            Don't have an account? <Link to='/signup'>Sign Up</Link>
          </p>
        </SignupLink>
      </FormContainer>
    </SignInWrapper>
  );
};

export default SignIn;
