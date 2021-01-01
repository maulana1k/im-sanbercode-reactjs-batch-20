import React, {useState, useContext, useEffect} from "react";
import {BrowserRouter as Router, Switch, Link,Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Login from './component/Login'
import BooksEditor from './component/BooksEditor'

import logo from './logo.png'
import './pattern.png'
import './index.css'

function Index() {
	const [username, setUsername] = useState(localStorage.getItem('username'))
	const [password, setPassword] = useState(localStorage.getItem('password'))
	
	console.log(username,password)
	
	return(<>
		<Router>
			
		<div className='navbar'>
			<img src={logo} alt="" className="logo"/>
			<div className="nav">
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
			<Link  style={{display:(username == 'admin' && password == 'admin' ) ? '' : 'none' }}to='/book_editor'>Books Lists Editor</Link>
			<Link to='/login'>Login</Link>
			</div>
		</div>
		<div className="container">
		<Switch>
			<Route exact path='/'>
				<Home/>
			</Route>
			<Route path='/about'>
				<About/>
			</Route>
			<Route path='/book_editor'>
				<BooksEditor/>
			</Route>
			<Route path='/login'>
				<Login/>
			</Route>
		</Switch>
		</div>
		<footer>
			<h5>copyright &copy; 2019 by Sanbercode</h5>
		</footer>
		</Router>
		</>
		)
}
export default Index