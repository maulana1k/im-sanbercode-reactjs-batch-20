import React ,{ useContext} from 'react';
import {Link} from "react-router-dom";
import {ThemeContext, ThemeProvider} from './ThemeContext'
import  "./Toggler.css";

export const ThemeToggler = () => {
	const [theme, setTheme,mode, setMode] = useContext(ThemeContext)
	// console.log(theme)
	const toggleTheme = () => {
		// let a = document.getElementById('root')
		if(theme === '-dark' && mode === 'On'){
			setTheme('-light');setMode('Off')
		}else{ 
			setTheme('-dark');setMode('On')
		}
	}
	return(
		<ThemeProvider>
			<div className={`toggle${theme}`}onClick={toggleTheme}>
								{mode}
						</div>
		</ThemeProvider>
		)
}
export const Navbar = () => {
	const [theme] = useContext(ThemeContext)
	console.log(theme)
	return (
		
		<div className={`navbar${theme}`}>
			<div className={`nav${theme}`}>
				<Link to='/'>Home</Link>
				<Link to='/table'>Table</Link>
				<Link to='/clock'>Clock</Link>
				<Link to='/lists'>Lists</Link>
				<Link to='/axios'>Axios</Link>
				<Link to='/context'>Context</Link>
			</div>
			<div className="theme">
				<b>Dark Mode</b>
			</div>
			<div style={{display: 'flex', justifyContent:'center',width:'50px',height:'30px',alignItems:'center'}}>
				<ThemeToggler/>
			</div>
		</div>
		
		)
}
