import React,{ useState, useContext} from 'react'
import axios from 'axios'
import {UserContext} from '../../component/UserContext.js'

import {Link,useHistory} from 'react-router-dom'
import { Form, Input, Col,Button, Checkbox, Layout,Alert,message } from 'antd';
import { UserOutlined, LockOutlined,MailOutlined } from '@ant-design/icons';

export default function SignUp()  {
  const [,setUser] = useContext(UserContext)
  const [status , setStatus] = useState('succes')
  const [help , setHelp] = useState(null)
  const {Content} = Layout
  let history = useHistory()

  const SignMessage = (name) => {
    message.success(`Welcome, ${name} let's discover our movies and games`, 5)
  }
  const handleRegister = (values) => {
    if(values.confirm_password != values.password){
      setStatus('error');setHelp('Password doesnt match!')
    }else{
        axios.post('https://backendexample.sanbersy.com/api/register',values)
        .then(res => {
          let user = res.data.user
          let token = res.data.token
          let currentUser = {name:user.name,password:user.password,token}
          setUser(currentUser)
          localStorage.setItem('user', JSON.stringify(currentUser))
          history.push('/')
          SignMessage(user.name)
        }).catch(err => {
           alert(err.response.data)
        })
    }
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
    <h2 style={{textAlign:'center'}}>Sign up</h2>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={handleRegister}
    >
      <Form.Item
        name="name"
        rules={[ {required: true,message: 'Please input your Username!', }, ]} >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
            <Form.Item
        name="email"
        rules={[{required: true,message: 'Please input your Email!',},]}
        >
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[ {required: true, message: 'Please input your Password!',},]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name='confirm_password'
        validateStatus={status}
        help={help}
        rules={[{required: true,message: 'Please input your password!',},]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Re-enter password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item valuePropName="checked" noStyle>
          <Checkbox>I have read the</Checkbox>
        </Form.Item>
        <Link className="login-form-forgot" >
          agreement
        </Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Sign Up
        </Button>
      </Form.Item>
        <Link to='/signin'>Already have an account? Login now.</Link>
    </Form>
      </Content>
      </Col>
      </div>
  );
};