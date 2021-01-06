import React, {Component} from 'react'
import axios from 'axios'
import {Layout,Typography,Divider,Card,PageHeader,Button} from 'antd'

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
			<Content className="site-layout-background"
	          style={{
	            padding: 0,
	            margin: '8%',
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
	        	<div style={{width:'100%' ,display:'flex',alignItems:'flex-end' ,backgroundImage:`linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1.0)),url(${image_url})`}} >
		        	<div
					    style={{ width: '40vw',height:'40vw',overflow:'hidden' }}
					  >
					    <img alt="example" src={image_url} style={{height:'40vw',objectFit:'cover'}} />
					  </div>
		        	<div style={{padding:'3vw',width:'70%',color:'white'}} >
			        	<p style={{fontSize:'5vw'}} ><b>{name}</b></p>
			        	
			        	<p style={{fontSize:'1.5vw'}}><b>{release}</b></p>
		        		<p style={{fontSize:'1.5vw'}}><b>{genre}</b></p>
		        		<p style={{fontSize:'1.5vw'}}><b>{platform}</b></p>
		        		{multiplayer == 1 && <p style={{border:'4px solid white',padding:5,float:'left',margin:5}} ><b>Multiplayer</b></p>}
		        		{singlePlayer == 1 && <p style={{border:'4px solid white',padding:5, float:'left',margin:5}} ><b>Singleplayer</b></p>}
		        		<Divider/>
		        	</div>
	        	</div>
	        </div>

	        </Content>
			)
	}
	
}