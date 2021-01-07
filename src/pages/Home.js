import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Layout,Card,Divider,BackTop,Rate,Col,Skeleton} from 'antd'
import Jumbotron from '../component/content/Jumbotron'




const {Content} = Layout
const {Meta} = Card

function Home(){
	const [movies, setMovies] = useState([])
	const [games, setGames] = useState([])

	useEffect(() => {
		axios.get('https://backendexample.sanbersy.com/api/data-movie')
		.then(res => {
			setMovies(res.data.filter( el => {
				return el.rating >= 9
			}).slice(0,4))
		})
		axios.get('https://backendexample.sanbersy.com/api/data-game')
		.then( res => {
			setGames(res.data.slice(0,4))
		})
	},[])
	console.log(movies)
	console.log(games)
	return(<>
		
         
	        <Content className="site-layout-background"
	          style={{
	            padding: 0,
	            margin: '8% 5%',
	            minHeight: 280,
	            background:'#e9ecef',
	            
	          }}
	        >
	        <div style={{width:'100%'}} >
	          <Jumbotron/>
	        </div>
	          <Divider />
	          <div style={{padding:'3%',display:'flex',flexWrap:'wrap'}} >
	          <h2 style={{width:'100%'}}>Trending Movies</h2>
		            { movies.map( el => {
		            	return(
		            		<Col  xs={24} sm={12} md={6}>
			            		<Link to={`/movies/details/${el.id}`} style={{textDecoration:'none'}} >
			            		<Card
								    hoverable
								    style={{borderRadius:10,overflow:'hidden',margin:'1vw' }}
								    cover={<img alt="example" src={el.image_url} style={{height:'20vw',overflow:'hidden',objectFit:'cover'}} />}
								  >
								    <Meta title={el.title.toUpperCase()} /><br/>
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
		          <Divider/>
		          <div style={{padding:'3%',display:'flex',flexWrap:'wrap'}} >
		          <h2 style={{width:'100%'}} >Top Games</h2>
		          
		            
		            { games.map( el => {
		            	return(
		            		<Col  sm={12} md={6}>
			            		<Link to={`/games/details/${el.id}`} style={{textDecoration:'none'}}>
					            <Card
								    hoverable
								    style={{ borderRadius:10,overflow:'hidden',margin:'1vw' }}
								    cover={<img alt="example" src={el.image_url} style={{height:'20vw',overflow:'hidden',objectFit:'cover'}} />}
								  >
								    <Meta title={el.name.toUpperCase()} description={el.genre} />
								    <Meta  /><br/>
								    
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
		            
	          	<Divider/>
	          </div>
	          <BackTop/>
	   	 	</Content>
	   	 	</>
		)
}
export default Home