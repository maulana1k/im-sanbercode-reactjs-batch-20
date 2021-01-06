import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import {Layout,Card,Space,Divider,Button,Rate,Col,PageHeader,Skeleton} from 'antd'
import { Input } from 'antd';

const { Search } = Input;
const {Content} = Layout
const {Meta} = Card



export default function Movies(){
	const [movies, setMovies] = useState([])
	const [refresh, setRefresh] = useState(false)
	
	useEffect(() => {
		axios.get('https://backendexample.sanbersy.com/api/data-movie')
		.then( res => {
			setMovies(res.data)
		})
		
	},[refresh])

	const handleSearch = (values) => {
		let param = values.toLowerCase()
		console.log(values)
		if(values.length < 1 ){
			setRefresh(!refresh)
		}
		let filter = movies.filter( el => {
			return el.title.toLowerCase().indexOf(param) !== -1
		})
		setMovies([...filter])
	}
	
	return(<>
		
	    <div style={{display:'flex',justifyContent:'center',margin:'20px'}} >
		    <Search
			      placeholder="Search movies..."
			      allowClear
			      size="large"
			      style={{width:'40vw'}}
			      onSearch={handleSearch}
			    />
	    </div>
	    <Content className="site-layout-background"
	          style={{
	            padding: 0,
	            margin: '0 5% 8%',
	            minHeight: 280,
	            background:"#fff",
	            borderRadius:'5px'
	          }}
	        >
	        <PageHeader
		      ghost={false}
		      onBack={() => window.history.back()}
		      title="All Movies"
		     
		      ></PageHeader>
        <div style={{padding:'0 3%',display:'flex',flexWrap:'wrap'}} >
	          
	          <Divider/>
	       
		            { movies.map( el => {
		            	return(
		            		<Col sm={12} md={6} >
			            		<Link to={`/movies/details/${el.id}`} style={{textDecoration:'none'}} >
			            		<Card
								    hoverable
								    style={{ borderRadius:10,overflow:'hidden',margin:'1vw' }}
								    cover={<img alt="example" src={el.image_url} style={{height:'20vw',overflow:'hidden',objectFit:'cover'}} />}
								  >
								    <Meta title={el.title} description={el.review ? el.review.slice(0,25)+(el.review.length>25?'...':'') : '' } /><br/>
								    <Rate allowHalf  disabled defaultValue={el.rating/2} />
								</Card>
								</Link>
							</Col>
		            		)
		            })}
				{ movies.length == 0 && (<>
	            <Col xs={24} sm={12} md={6} >
	          	<Card style={{borderRadius:10,overflow:'hidden',margin:'1vw' }}>
	          		<Skeleton  active/>
	          		<Skeleton  active/>
	          	</Card>
	            </Col>
	            <Col sm={12} md={6} >
	          	<Card style={{borderRadius:10,overflow:'hidden',margin:'1vw' }}>
	          		<Skeleton  active/>
	          		<Skeleton  active/>
	          	</Card>
	            </Col>
	            <Col sm={12} md={6} >
	          	<Card style={{borderRadius:10,overflow:'hidden',margin:'1vw' }}>
	          		<Skeleton  active/>
	          		<Skeleton  active/>
	          	</Card>
	            </Col>
	            <Col sm={12} md={6} >
	          	<Card style={{borderRadius:10,overflow:'hidden',margin:'1vw' }}>
	          		<Skeleton  active/>
	          		<Skeleton  active/>
	          	</Card>
	            </Col>
		        	</>) }
	          	
	          </div>
	    </Content>
	    </>
		)
}