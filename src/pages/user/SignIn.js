import React, { useState, useContext} from 'react'
import axios from 'axios'

import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../../component/UserContext.js'

import { Form, Col , Input, Button, Checkbox, Layout ,Alert,message} from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

export default function SignIn()  {
  const [,setUser] = useContext(UserContext)
  const [status, setStatus] = useState('succes')
  const [help, setHelp] = useState(null)
  const history = useHistory()
  const {Content} = Layout

  const SignMessage = (name) => {
    message.success(`Welcome, ${name} let's discover our movies and games`, 5)
  }
  const onFinish = (values) => {
      
      axios.post('https://backendexample.sanbersy.com/api/user-login',values)
      .then( res => {
        let user = res.data.user
        console.log(user)
        let token = res.data.token
        let currentUser = {name:user.name,password:values.password,token}
        setUser(currentUser)
        localStorage.setItem('user', JSON.stringify(currentUser))
        history.push('/')
        SignMessage(user.name)
      }).catch( err => {
        setStatus('error');setHelp('Oops! Wrong password')
        // alert(JSON.stringify(err.response.data))
      })
      console.log('Received values of form: ', values);
  };

  return (

    <div style={{display:'flex',justifyContent:'center',}} >
      
    <Col xs={64} sm={18} md={12} >
      
    <Content className="site-layout-background"
            style={{
              padding:' 10% 20%',
              marginTop:'10vw',
              marginBottom:'10vw',
              minHeight: 280,
              background:"#fff",
             borderRadius:'5px'
            }}
          >
    <h2 style={{textAlign:'center'}}>Sign in</h2>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        validateStatus={status}
        help={help}
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item  valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Sign In
        </Button>
      </Form.Item>
        <Link to='/signup'>Don't have an account? Register Now</Link>
    </Form>

      </Content>
    </Col>
    </div>
  );
};