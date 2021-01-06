import React, {useContext} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {HeartFilled,InstagramOutlined,TwitterOutlined,GithubOutlined,MailOutlined,WhatsAppOutlined} from '@ant-design/icons'
import { Layout } from 'antd';
import Header from './Header'
import Sider from './Sider'
import Content from './Content'
import {UserContext} from '../component/UserContext'


const {  Footer } = Layout;

function Main(){
	const [user] = useContext(UserContext)

	return(
		<Router>
		<div className="App">
		  <Layout>
		   <Header/>
		    <Layout>
		    { (user!==null) && <Sider/>}
		      <Layout style={{ padding: '0 24px 24px' }}>
		       <Content/>
		        <Footer style={{ textAlign: 'center',margin:0,fontWeight:'bolder',color:'grey' }}>
		        	<p>NetPlay ©2021 Created with <HeartFilled/> by Maulana Imamul Khaq</p>
		        	
		        	<p><InstagramOutlined /> @maulanna.i</p> 
		        	<p><TwitterOutlined /> @mlnhaq_</p>
		        	<p><GithubOutlined /> @maulanna1k</p>
		        	<p><WhatsAppOutlined /> Contact me at +6289-7680-9782</p>
		        	<p><MailOutlined /> mm930199@gmail.com</p>
		        	
		        	</Footer>
		      </Layout>
		    </Layout>
		  </Layout>
		</div>
	  </Router>
	);
}
export default Main