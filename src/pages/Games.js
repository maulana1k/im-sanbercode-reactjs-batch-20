import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Layout,Card,Space,Divider,Button,Col,PageHeader,Skeleton} from 'antd'
import { Input } from 'antd';

const { Search } = Input;

const {Content} = Layout
const {Meta} = Card

export default function Games(){
	const [games, setGames] = useState([])
	const [refresh ,setRefresh] = useState(false)
	console.log(games)
	useEffect(() => {
		axios.get('https://backendexample.sanbersy.com/api/data-game')
		.then( res => {
			setGames(res.data)
		})
	},[refresh])

	const handleSearch = (values) => {
		let param = values.toLowerCase()
		console.log(values)
		if(values.length < 1 ){
			setRefresh(!refresh)
		}
		let filter = games.filter( el => {
			return el.name.toLowerCase().indexOf(param) !== -1
		})
		setGames([...filter])
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
		      title="All Games"
		      ></PageHeader>
         <div style={{padding:' 0 3%',display:'flex',flexWrap:'wrap'}} >
          <Divider/>
	          
		            { games.map( el => {
		            	return(
		            		<Col sm={12} md={6}>
			            		<Link to={`/games/details/${el.id}`} style={{textDecoration:'none'}}>
					            <Card
								    hoverable
								    style={{borderRadius:10,overflow:'hidden',margin:'1vw' }}
								    cover={<img alt="example" src={el.image_url} style={{height:'20vw',overflow:'hidden',objectFit:'cover'}} />}
								  >
								    <Meta title={el.name.toUpperCase()} description={el.genre}  />
								    
								</Card>
								</Link>
		            		</Col>
		            		)
		            })}
		        { games.length == 0 && (<>
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