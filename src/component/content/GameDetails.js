import React, {Component} from 'react'
import axios from 'axios'
import {Layout,Typography,Divider,Card,PageHeader,Button,Col} from 'antd'

const {Content} = Layout
const {Title,Paragraph} = Typography
export default class GameDetails extends Component  {
	constructor(props) {
		super(props)
		this.state= {
			gameData :{},
			id: '',
		}
	}
	componentDidMount(){
		axios.get(`https://backendexample.sanbersy.com/api/data-game/${this.props.id}`)
		.then( res => {
			this.setState({
				gameData:res.data
			})
		}).catch(err=>{console.log(err.response.data)})
	}
	render(){
		const {name,image_url,platform,genre,multiplayer,singlePlayer,release} = this.state.gameData
		return(
			<div style={{display:'flex',justifyContent:'center'}} >
				<Col xs={24} sm={24} md={20} >
					
			<Content className="site-layout-background"
	          style={{
	            padding: 0,
	            margin: '8% 0',
	            minHeight: 280,
	            background:"#fff",
	            borderRadius:'5px'
	          }}
	        >
	        <PageHeader
		      ghost={false}
		      onBack={() => window.history.back()}
		      title="Details"
		      ></PageHeader>
	        <div style={{display:'flex'}} >
	        	<div style={{width:'100%' ,display:'flex',flexWrap:'wrap',alignItems:'flex-end' ,backgroundImage:`linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1.0)),url(${image_url})`}} >
		        	<div
					    style={{overflow:'hidden' }}
					  >
					  <Col xs={24} sm={24} md={12} >
					    <img alt="example" src={image_url} style={{height:300,objectFit:'cover'}} />
					  </Col>
					  </div>
					  <Col xs={24} sm={24} md={12} >
		        	<div style={{padding:'3vw',color:'white'}} >
			        	<p style={{fontSize:40}} ><b>{name}</b></p>
			        	
			        	<p style={{fontSize:20}}><b>{release}</b></p>
		        		<p style={{fontSize:16}}><b>{genre}</b></p>
		        		<p style={{fontSize:16}}><b>{platform}</b></p>
		        		{multiplayer == 1 && <p style={{border:'3px solid white',padding:5,float:'left',margin:5}} ><b>Multiplayer</b></p>}
		        		{singlePlayer == 1 && <p style={{border:'3px solid white',padding:5, float:'left',margin:5}} ><b>Singleplayer</b></p>}
		        		<Divider/>
		        	</div>
		        	</Col>
	        	</div>
	        </div>

	        </Content>
				</Col>
			</div>
			)
	}
	
}