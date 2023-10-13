import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios, { HttpStatusCode } from 'axios'

const onFinish = async (values) => {
  const { username, password, remember } = values

  const body = {
    username, 
    password
  }

  try {
    const result = await axios.post('/api/login', body)
    console.log("Login api result :: ", result)

    // HTTP 통신 확인
    if (result.status !== HttpStatusCode.Ok) {
      alert("Failed request :: ", result)
      return 
    }
    // 로그인 여부 확인
    if (!result.data.loginSuccess) {
      alert(result.data.message)
      return 
    }
    alert(result.data.message)
  }
  catch (err) {
    console.log("Exceptional Error :: ", err)
  }
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Login = () => (
  <Form
    name="basic"
    labelCol={{span: 8,}}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default Login;