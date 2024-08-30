import React from 'react';
import { StyledForm, StyledInput, StyledButton } from 'components';
import { Form } from 'antd';

const SignUp = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <StyledForm
      name='signup'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <h2>Sign Up</h2>
      <Form.Item
        name='username'
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <StyledInput placeholder='Username' />
      </Form.Item>

      <Form.Item
        name='email'
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <StyledInput placeholder='Email' />
      </Form.Item>

      <Form.Item
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}
      ></Form.Item>

      <Form.Item>
        <StyledButton type='primary' htmlType='submit'>
          Sign Up
        </StyledButton>
      </Form.Item>
    </StyledForm>
  );
};

export default SignUp;
