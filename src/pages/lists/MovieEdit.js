import React, { useState,useContext,useEffect,useForm } from 'react';
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {UserContext} from '../../component/UserContext'
import {
  Form,  Input,  Button,  Radio,  Select,  Cascader,  DatePicker,
  InputNumber,  TreeSelect,  Switch,  Layout,  Rate,Col,PageHeader
} from 'antd';

const {Content} = Layout

export default function MovieEdit  (props)  {
 	const [user] = useContext(UserContext)
 	const [image, setImage] = useState('')
 	const [form] = Form.useForm()
	const history = useHistory()
	
	useEffect(() => {
		axios.get(`https://backendexample.sanbersy.com/api/data-movie/${props.id}`)
		.then( res => {
			let el = res.data
			form.setFieldsValue({
				title:el.title,
				genre:el.genre,
				review:el.review,
				description:el.description,
				duration:el.duration,
				rating:(el.rating/2),
				image_url:el.image_url,
				year:el.year
			})
			setImage(el.image_url)
		})
	},[])
 	const handleSubmit = (val) => {
 		
 		let rating = val['rating']*2
		let values = {...val,rating}
		axios.put(`https://backendexample.sanbersy.com/api/data-movie/${props.id}`,values,
		{headers: {"Authorization" : "Bearer "+ user.token}})
 		.then(() => {
 			history.push('/lists/movies')
 		}).catch(err => {
 			alert(JSON.stringify(err))
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
		      title="Edit movie"
		      ></PageHeader>
        <div style={{display:'flex'}} >
	        <Col xs={0} sm={0} md={10} >
			    <img  src={image}
			    alt="" style={{minHeight:'100%',maxWidth:'100%', objectFit:'cover'}} />
		    </Col>
		    <div style={{width:'100%', padding:'3vw'}} >
		    
		      <Form
		        labelCol={{
		          span: 6,
		        }}
		        wrapperCol={{
		          span: 14,
		        }}
		        layout="horizontal" onFinish={handleSubmit} form={form} >
		        <Form.Item label="Title" name="title">
		          <Input  />
		        </Form.Item>
		        <Form.Item label="Genre" name="genre">
		          <Input  />
		        </Form.Item>
		        <Form.Item label="Review" name="review">
		          <Input  />
		        </Form.Item>
		        <Form.Item label="Description" name="description">
		          <Input.TextArea  />
		        </Form.Item>
		        <Form.Item label="Duration" name="duration">
		          <InputNumber type="number" placeholder="Mins" min={5} />
		        </Form.Item>
		        <Form.Item label="Rating" name="rating">
		          <Rate allowHalf  />
		        </Form.Item>
		        <Form.Item label="Cover" name="image_url">
		        	<Input.TextArea value='fabfibawif' />
			    </Form.Item>
		        <Form.Item label="Release" name="year">
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