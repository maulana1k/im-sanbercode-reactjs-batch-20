import React, {Component} from 'react'

export default class Login extends Component {
	// static contextType = UserContext;
	constructor(props) {
		super(props)
		this.state ={
			username: '',
			password:'' 
		}
	}
	
	handleSubmit= (e)=>{
		e.preventDefault()
		localStorage.setItem('username',this.state.username)
		localStorage.setItem('password',this.state.password)
		this.setState({
			username: '',
			password:'' 
		})
	}
	handleChange=(e)=>{
		let name = e.target.name
		let value = e.target.value
		if(name === 'username'){
			this.setState({username:value})
		}
		if(name === 'password'){
			this.setState({password:value})
		}
	}
	render(){
		return(
			<div className="list" style={{backgroundColor:'white',width:'40%',marginBottom:'30%',padding:'20px'}}>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="username">Username:</label>
					<input type="text" name="username" style={{float:'right'}}
						onChange={this.handleChange}
						value={this.state.username}/><br/><br/>
					<label htmlFor="password">Password:</label>
					<input type="password" name="password" style={{float:'right'}}
						onChange={this.handleChange}
						value={this.state.password}/><br/><br/>
					<button type="submit" style={{float:'right'}}>Login</button>
				</form>
			</div>
			)
	}
	// methods
}