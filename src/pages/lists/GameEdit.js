import React, { useState, useContext,useEffect,useForm } from 'react';
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {UserContext} from '../../component/UserContext'
import {
  Form,  Input,  Button,  Radio,  Select,  Cascader, DatePicker,
  InputNumber,  TreeSelect,  Switch,  Layout,  Checkbox,Col,Row,PageHeader
} from 'antd';

const {Content} = Layout

export default function GameEdit  (props)  {
	const [user] = useContext(UserContext)
	const [image, setImage] = useState(null)
	const [form] = Form.useForm()
	const history = useHistory()

	useEffect(() => {
		axios.get(`https://backendexample.sanbersy.com/api/data-game/${props.id}`)
		.then( res => {
			let el = res.data
			form.setFieldsValue({
				name:el.name,
				genre:el.genre,
				singlePlayer:el.singlePlayer,
				multiplayer:el.multiplayer,
				platform:el.platform,
				image_url:el.image_url,
				release:el.release
			})
			setImage(el.image_url)
		})
	},[])

 	const handleSubmit = (val) => {
		let values = {...val}
 		console.log(values)
 		axios.put(`https://backendexample.sanbersy.com/api/data-game/${props.id}`,values,
 			{headers: {"Authorization" : "Bearer "+ user.token}})
 		.then(() => {
 			history.push('/lists/games')
 		}).catch(err => {
 			alert(JSON.stringify(err.response.data))
 		})
 	}

  	return (
    <>
    <Content className="site-layout-background"
	          style={{
	            padding: 0,
	            margin: '5% 10%',
	            minHeight: 280,
	            background:"#fff",
	            borderRadius:'5px'
	          }}
	        >
	        <PageHeader
		      ghost={false}
		      onBack={() => window.history.back()}
		      title="Edit game"
		      ></PageHeader>
	    <div style={{display:'flex'}} >
	    <Col  xs={0} sm={0} md={10} >
		    <img  src={image}
		    alt="" style={{minHeight:'100%',maxWidth:'100%', objectFit:'cover'}} />
	    </Col>
	    
		    <div style={{padding:'3vw',width:'100%'}} >
		        
		      <Form
		        labelCol={{
		          span: 6,
		        }}
		        wrapperCol={{
		          span: 14,
		        }}
		        layout="horizontal" onFinish={handleSubmit} form={form} >
		        <Form.Item label="Name" name="name" >
		          <Input  />
		        </Form.Item>
		        <Form.Item label="Genre" name="genre">
		          <Input/>
		        </Form.Item>
		        <Form.Item label="Singleplayer" name="singlePlayer">
		        	<Radio.Group>
				      <Radio value={1}>yes</Radio>
				      <Radio value={0}>no</Radio>
				    </Radio.Group>
		        </Form.Item>
		        <Form.Item label="Multiplayer" name="multiplayer">
		          	<Radio.Group>
				      <Radio value={1}>yes</Radio>
				      <Radio value={0}>no</Radio>
				    </Radio.Group>
		        </Form.Item>
		        <Form.Item label="Platform" name="platform">
		          <Input  />
		        </Form.Item>
		        <Form.Item label="Cover" name="image_url">
		        	<Input.TextArea placeholder="Include image url" />
			    </Form.Item>
		        <Form.Item label="Release" name="release">
		          <InputNumber/>
		        </Form.Item>
		        <Form.Item>
			        <Button type="primary" htmlType="submit" style={{float:'right'}} >Upload</Button>
		        </Form.Item>
		      </Form>
		    </div>
	    </div>
    </Content>
    </>
  );
};