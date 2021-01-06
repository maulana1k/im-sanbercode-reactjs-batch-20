import React, {useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../component/UserContext'
import { Layout, Menu,Anchor,Col,Avatar} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined,InboxOutlined,CloudUploadOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export default function Sider  () {
	const [user] = useContext(UserContext)
	const { Header, Content, Sider, Footer } = Layout;
	const [collapsed, setCollapsed] = useState(true)

	const onCollapse = () => {
		if(collapsed === false){	setCollapsed(true) }
		else{setCollapsed(false)}
  	};
	return(
		
		 <Sider md={3} sm={0}  className="site-layout-background"
		 collapsible collapsed={collapsed} onCollapse={onCollapse}
		  >
	        <Menu
	          mode="inline"
	          style={{ height: '100%', borderRight: 0 }}
	        >
	          <SubMenu key="sub1" icon={<UserOutlined />} title="User" style={{marginTop:'30px'}} >
	            <Menu.Item key="1"><Link to='/resetpassword'>Change Password</Link></Menu.Item>
	          </SubMenu>
	          <SubMenu key="sub2" icon={<InboxOutlined />} title="Content Editor">
	            <Menu.Item key="5"><Link to='/lists/movies'>Movie</Link></Menu.Item>
	            <Menu.Item key="6"><Link to='/lists/games'>Game</Link></Menu.Item>
	           
	          </SubMenu>
	          <SubMenu key="sub3" icon={<CloudUploadOutlined />} title="Upload">
	            <Menu.Item key="9"><Link to='/create/movie'>Upload Movie</Link></Menu.Item>
	            <Menu.Item key="10"><Link to='/create/game'>Upload Game</Link></Menu.Item>
	
	          </SubMenu>
	        </Menu>
		 
		 
	      </Sider>
		
		)
}