import React, { useState,useContext } from 'react';
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {UserContext} from '../../component/UserContext'
import {
  Form,  Input,  Button,  Radio,  Select,  Cascader,  DatePicker,
  InputNumber,  TreeSelect,  Switch,  Layout,  Rate,Col,PageHeader
} from 'antd';

const {Content} = Layout

export default function CreateMovie  ()  {
 	const [user] = useContext(UserContext)
	const history = useHistory()
 	const handleSubmit = (val) => {
 		let year = parseInt(val['year'].format('YYYY'))
 		let rating = val['rating']*2
		let values = {...val,year,rating}
		axios.post(' https://backendexample.sanbersy.com/api/data-movie',values,
		{headers: {"Authorization" : "Bearer "+ user.token}})
 		.then(() => {
 			history.push('/movies')
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
	            borderRadius:'5px'
	          }}
	        >
	        <PageHeader
		      ghost={false}
		      onBack={() => window.history.back()}
		      title="Upload Movie"
		      ></PageHeader>
        <div style={{display:'flex',flexWrap:'wrap'}} >
	        <Col xs={0} sm={0} md={10} >
			    <img  src="https://thatrogersguy.files.wordpress.com/2011/01/maisey-poster-final-copy.jpg?w=500" 
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
		        layout="horizontal" onFinish={handleSubmit}  >
		        <Form.Item label="Title" name="title">
		          <Input />
		        </Form.Item>
		        <Form.Item label="Genre" name="genre">
		          <Select>
		            <Select.Option value="anime">Anime</Select.Option>
		            <Select.Option value="adventure">Adventure</Select.Option>
		            <Select.Option value="action">Action</Select.Option>
		            <Select.Option value="romance">Romance</Select.Option>
		            <Select.Option value="other">Other</Select.Option>
		          </Select>
		        </Form.Item>
		        <Form.Item label="Review" name="review">
		          <Input  />
		        </Form.Item>
		        <Form.Item label="Description" name="description">
		          <Input.TextArea/>
		        </Form.Item>
		        <Form.Item label="Duration" name="duration">
		          <InputNumber type="number" placeholder="Mins" min={5} />
		        </Form.Item>
		        <Form.Item label="Rating" name="rating">
		          <Rate/>
		        </Form.Item>
		        <Form.Item label="Cover" name="image_url">
		        	<Input.TextArea />
			    </Form.Item>
		        <Form.Item label="Release" name="year">
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