import React, {Component} from 'react'
import axios from 'axios'
import {Layout,Typography,Divider,Rate,Card,PageHeader,Col} from 'antd'
import {ClockCircleOutlined,ReadOutlined} from '@ant-design/icons'

const {Content} = Layout
const {Title,Paragraph} = Typography
export default class MovieDetails extends Component  {
	constructor(props) {
		super(props)
		this.state= {
			movieData :{},
			id: '',
		}
	}
	componentDidMount(){
		axios.get(`https://backendexample.sanbersy.com/api/data-movie/${this.props.id}`)
		.then( res => {
			this.setState({
				movieData:res.data
			})
		}).catch(err=>{console.log(err.response.data)})
	}
	render(){
		const {image_url,title,duration,rating,review,genre,year,description} = this.state.movieData
		return(
			<div style={{display:'flex',justifyContent:'center'}} >
				<Col xs={24} sm={24} md={20} >
			<Content className="site-layout-background"
	          style={{
	            padding: 0,
	            margin: '8% 0',
	            minHeight: 280,
	            background:'#e9ecef',
	            borderRadius:'5px'
	          }}
	        >
	       	<PageHeader
		      ghost={false}
		      onBack={() => window.history.back()}
		      title="Details"
		      ></PageHeader>
	        <div style={{display:'flex'}} >
	        	<div style={{width:'100%' ,display:'flex',flexWrap:'wrap',alignItems:'flex-end' ,backgroundImage:`linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)),url(${this.state.movieData.image_url})`}} >
		        	<div
					    style={{ overflow:'hidden' }}
					  >
					  <Col xs={24} sm={24} md={12} >
					    <img alt="example" src={image_url} style={{height:300,objectFit:'cover'}} />
					  </Col>
					  </div>
				  <Col xs={24} sm={24} md={12} >
		        	<div style={{padding:20,color:'white'}} >
			        	<p style={{fontSize:40}} ><b>{title}</b></p>
			        	
			        	<p style={{fontSize:24}}><b>{year}</b></p>
		        		<p style={{fontSize:24}}><b>{genre}</b></p>
		        		<p><b><ClockCircleOutlined/></b> {duration} mins</p>
		        		<p><b><ReadOutlined /></b> {review}</p>
		        		<Rate allowHalf  disabled value={(rating)/2} />
		        		<Divider/>
		        	</div>
				  </Col>
	        	</div>
	        </div>
	        	<div style={{margin:'2vw',padding:'2vw',background:'white'}} >
	        		<h4>Description : </h4>
	        		<Divider/>
	        		<Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }} >
	        		{description}</Paragraph>
	        	</div>
	        		<Divider/>

	        </Content>
	        </Col>
	        </div>
			)
	}
	
}