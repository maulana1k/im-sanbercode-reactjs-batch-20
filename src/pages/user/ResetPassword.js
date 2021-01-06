import React,{ useState, useContext} from 'react'
import axios from 'axios'
import {Link,Redirect,useHistory} from 'react-router-dom'
import { Form, Input, Button, Checkbox, Layout } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {UserContext} from '../../component/UserContext'

const {Content} = Layout

export default function ResetPassword()  {
  const [user,setUser] = useContext(UserContext)
  let histoy = useHistory()
  const [status , setStatus] = useState('succes')
  const [help, setHelp ] =useState(null)
  const [match , setMatch] = useState('succes')
  const [help2 , setHelp2] = useState(null)

  console.log(status)
  const handleSubmit = (values) => {
    if(values.current_password != user.password){
      setStatus('error');setHelp('Current password wrong!')
      }else{setStatus('succes');setHelp(null)}
    if(values.new_password != values.new_confirm_password){
      setMatch('error');setHelp2('Password doesnt match!')
    }else{setMatch('succes');setHelp2(null)}

    axios.post('https://backendexample.sanbersy.com/api/change-password',values,
      {headers: {"Authorization" : "Bearer "+ user.token}})
    .then(() => {
      localStorage.clear()
      setUser(null)
      histoy.push('/signin')
    }).catch(err => {
      alert('eror')
    })
    console.log('Received values of form: ', values);
  };

  
  return (
    <Content className="site-layout-background"
            style={{
              padding:'5%',
              margin: '8% 25%',
              minHeight: 280,
              background:"#fff",
             borderRadius:'5px'
            }}
          >
    <h2 style={{textAlign:'center'}}>Change Password</h2>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}
    >
      <Form.Item
        name="current_password"
        
        validateStatus={status}
        help={help}
      >
        <Input.Password
         prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Old password" />
      </Form.Item>
      <Form.Item
        name="new_password"

        rules={[
          {
            required: true,
            message: 'Please input your new password!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="New Password"
        />
      </Form.Item>
       <Form.Item
        name="new_confirm_password"
        
        validateStatus={match}
        help={help2}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="New Password"
        />
      </Form.Item>
      
        <Button type="primary" htmlType="submit" className="login-form-button">
          Reset Password
        </Button>
     
      
    </Form>
      </Content>
  );
};