import { useState } from 'react'

import { Modal, Radio, Form, Input, Space, Button, Checkbox  } from 'antd';

function SignInForm() {
  return (
    <Form.Item
      label="用户名"
      name="username"
      rules={[{ required: true, message: '请输入用户名!' }]}
    >
      <Input placeholder="用户名" />
    </Form.Item>
  )
}

function LoginForm() {

  const [passwordVisible, setPasswordVisible] = useState(false);
    const rememberMe = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <>
      <Form.Item label="用户名">
        <Input placeholder="用户名" />
      </Form.Item>
      <Form.Item label="登录密码">
        <Input.Password 
          placeholder="密码"
          visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
        />
      </Form.Item>
      <Form.Item label="验证码">
        <Space direction="horizontal">
          <Input />
          <div>验证码</div>
        </Space>
      </Form.Item>
      <Form.Item>
        <Checkbox onChange={rememberMe}>记住我</Checkbox>
      </Form.Item>
      <Form.Item>
        <div className="flex flex-row gap-4 justify-between">
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
          <Button type="primary" htmlType="submit" block>
            重置
          </Button>
        </div>
      </Form.Item>
    </>
  )
}

function LoginModal(props) {

  const [formType, setFormType] = useState('login');

  return (
    <Modal
      centered
      destroyOnClose
      closable={false}
      title="登录/注册"
      open={props.isOpen}
      footer={null}
      >
        <Radio.Group 
          className="select-none"
          block
          options={[
            {label: "登录", value: "login"},
            {label: "注册", value: "signin"}]}
          defaultValue={formType}
          optionType="button"
          buttonStyle="solid"
          onChange={(e) => setFormType(e.target.value)}
        />
        <Form 
          className="mt-6" 
          name="login"
          labelAlign="left"
          labelCol={{ span: 4 }}
        >
          {formType === 'signin' && <SignInForm />}
          {formType === 'login' && <LoginForm />}
        </Form>
    </Modal>
  )
}

export default LoginModal

