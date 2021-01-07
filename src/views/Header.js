import React, {useContext} from 'react'
import {Link,useHistory,Redirect} from 'react-router-dom'
import {Layout, Menu, Modal} from 'antd'
import {LoginOutlined,LogoutOutlined,ExclamationCircleOutlined,
 HomeOutlined, PlaySquareOutlined,AppstoreOutlined,FireOutlined} from '@ant-design/icons'
import {UserContext} from '../component/UserContext'

const { SubMenu } = Menu;
const {confirm} = Modal
export default function Header ()  {
	const [user,setUser] = useContext(UserContext)
	const { Header} = Layout;
	let history = useHistory()
	const SignOutWarning = () => {
		confirm({
	    title: 'SignOut Warning',
	    icon: <ExclamationCircleOutlined />,
	    content: 'Do you want to signout?',
	    onOk() { 
	    	setUser(null)
	    	localStorage.clear();
	    	history.push('/')
	    	console.log('OK'); },
	    onCancel() {  console.log('Cancel'); },
	  	});
	}
	
	return(
		<Header className="header" height={100} width={100}  >
	      <div  style={{float:'left',height:'100%',display:'flex',alignItems:'center'}} >
	      		<h1 style={{color:'white',fontFamily:'Operator Mono',fontWeight:'bold',fontSize:'5vh',margin:0}} >NET<span style={{color:'orangered'}} >PLAY</span></h1>
	      	</div>
	      <Menu height={100} theme="dark" mode="horizontal" style={{float:'right'}} defaultSelectedKey={['1']} >
	        <Menu.Item key="1" >
	        	<Link exact to='/'><HomeOutlined/></Link>
	        </Menu.Item>
	        <Menu.Item key="2" >
	        	<Link exact to='/movies'><PlaySquareOutlined /></Link>
	        </Menu.Item>
	        <Menu.Item key="3" >
	        	<Link exact to='/games'><FireOutlined /></Link>
	        </Menu.Item>
	        <Menu.Item key="4" >
	        	{ user ?<Link  onClick={SignOutWarning} ><LogoutOutlined /></Link>
	        	: <Link exact to='/signin' ><LoginOutlined /></Link> }
	        </Menu.Item>
	      </Menu>
	    </Header>
	    )
}