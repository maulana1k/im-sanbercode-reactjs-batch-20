import React, { useState, useContext } from 'react';
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {UserContext} from '../../component/UserContext'
import {
  Form,  Input,  Button,  Radio,  Select,  Cascader,  DatePicker,
  InputNumber,  TreeSelect,  Switch,  Layout,  Checkbox,Col,Row,PageHeader
} from 'antd';

const {Content} = Layout

export default function CreateGame  ()  {
	const [user] = useContext(UserContext)
	const history = useHistory()
 	const handleSubmit = (val) => {
 		let release = val['release'].format('YYYY')
		let values = {...val,release}
 		console.log(values)
 		axios.post(' https://backendexample.sanbersy.com/api/data-game',values,
 			{headers: {"Authorization" : "Bearer "+ user.token}})
 		.then(() => {
 			history.push('/games')
 		}).catch(err => {
 			alert(JSON.stringify(err.response.data))
 		})
 	}

  	return (
    <>
    <div style={{display:'flex',justifyContent:'center'}} >
			<Col xs={24} sm={24} md={20} >
    <Content className="site-layout-background"
	          style={{
	            padding: 0,
	            margin: '5% 0',
	            minHeight: 280,
	            background:'#e9ecef',
	            
	          }}
	        >
	        <PageHeader
		      ghost={false}
		      onBack={() => window.history.back()}
		      title="Upload Game"
		      ></PageHeader>
	    <div style={{display:'flex'}} >
	    <Col sm={0} md={10} >
		    <img  src="https://cdn2.unrealengine.com/Unreal+Engine%2Fblog%2Fmake-games-for-a-chance-to-win-awesome-prizes-during-2020-s-unreal-spring-jam%2FNEWS_UNREALSPRINGJAM_FEED_THUMB-1400x788-ed6c4335da6be506152fd49e20c8a840755cfad8.jpg" 
		    alt="" style={{minHeight:'100%',maxWidth:'100%', objectFit:'cover'}} />
	    </Col>
	    
		    <div style={{width:'100%', padding:20,margin:20,background:'white'}} >
		       
		      <Form
		        labelCol={{
		          span: 6,
		        }}
		        wrapperCol={{
		          span: 14,
		        }}
		        layout="horizontal" onFinish={handleSubmit} >
		        <Form.Item label="Name" name="name" >
		          <Input />
		        </Form.Item>
		        <Form.Item label="Genre" name="genre">
		          <Select placeholder="select genre" >
		            <Select.Option value="Action">Action</Select.Option>
		            <Select.Option value="Adventure">Adventure</Select.Option>
		            <Select.Option value="Battle Rolaye">Battle Rolaye</Select.Option>
		            <Select.Option value="Sport">Sport</Select.Option>
		            <Select.Option value="Third-Person-Shooter">Third-Person-Shooter</Select.Option>
		         </Select>
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
		          <DatePicker picker="year"/>
		        </Form.Item>
		        <Form.Item>
			        <Button type="primary" htmlType="submit" style={{float:'right'}} >Upload</Button>
		        </Form.Item>
		      </Form>
		    </div>
	    </div>
    </Content>
    </Col>
    </div>
    </>
  );
};