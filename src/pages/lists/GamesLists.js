import React, {useState, useEffect, useContext,useForm} from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'
import {UserContext} from '../../component/UserContext'
import { Table,Layout,Button,Cascader,DatePicker,Col,Space,Card,Input,Select,Form ,Modal,PageHeader} from 'antd';
import {EditOutlined,ClearOutlined, DeleteOutlined, FilterOutlined,ExclamationCircleOutlined,PlusOutlined} from '@ant-design/icons'

const {Content} = Layout
const {Search} = Input
const {confirm} = Modal

export default function GamesLists(){
	const [user] = useContext(UserContext)
	const [games, setGames] = useState([])
	const [refresh, setRefresh] = useState(false)
	const [form] = Form.useForm()
	const DeleteWarning = (e,item) =>  {
			let name = item
			let id = e
			confirm({
		    title: 'Delete warning',
		    icon: <ExclamationCircleOutlined />,
		    content: `Are you sure to delete ${name}?`  ,
		    onOk() { 
		    	axios.delete(`https://backendexample.sanbersy.com/api/data-game/${id}`,
		    		{headers: {"Authorization" : "Bearer "+ user.token}})
		    	.then(()=>{
		    		setRefresh(true)
		    	}).catch( err => { console.log(err.response) })
		    },
		    onCancel() {  console.log('Cancel'); },
		  	});
		}
	console.log(games)
	useEffect(() => {
		axios.get('https://backendexample.sanbersy.com/api/data-game')
		.then( res => {
			setGames(res.data.map((el,index) => {
				return{
					key:index+1,
				    no:index+1,
				    name: el.name,
				    genre:el.genre,
				    sp:(el.singlePlayer == 1 ? 'yes' : 'no'),
				    mp:(el.multiplayer == 1 ? 'yes' : 'no'),
				    platform:el.platform,
				    release:el.release,
				    img:(<Card style={{height:50}} 
						cover={<img src={el.image_url} alt="f" style={{overflow:'hidden',objectFir:'cover'}} />} ></Card>),
				    action: (<span><Button type="primary"  style={{marginRight:'10px'}}>
				    		<Link to={`/lists/games/edit/${el.id}`} ><EditOutlined /></Link></Button>
							<Button danger onClick={() => DeleteWarning(el.id,el.name)}  ><DeleteOutlined /></Button></span>)
				}
			}))
		}).catch( err => { console.log(err.response) })
		
	},[refresh])
	const columns = [
		  { title:'No.', dataIndex:'no', sorter: {
		      compare: (a, b) => a.no - b.no,
		      multiple: 3,
		    },width:50},
	      { title: 'Cover', dataIndex: 'img',ellipsis:true },
		  { title: 'Name', dataIndex: 'name', },
		  {	title:'Genre', dataIndex:'genre', sorter: {
		      compare: (a, b) => a.genre.length - b.genre.length,
		      multiple: 3,
		    },filters:[{text: 'Adventure',value: 'adventure',},
				      {text: 'Action',value: 'action',},
				      {text: 'Sport',value: 'sport',},
				      {text: 'Battle Royale',value: 'battle rolaye',},
				      {text: 'Horor',value: 'horor',},
				    ],
				    onFilter: (value, record) => record.genre.toLowerCase().indexOf(value) >= 0 },
		  { title: 'Singleplayer', dataIndex: 'sp',width:100 },
		  { title: 'Multiplayer', dataIndex: 'mp',width:100},
		  {	title:'Platform', dataIndex:'platform', },
		  {	title:'Release', dataIndex:'release', sorter: {
		      compare: (a, b) => a.release - b.release,
		      multiple: 3,
		    },width:80},
		  { title:'Edit/Delete', dataIndex:'action',width:120}
	];
	

	const handleFilter = (val) => {
		// let release = val['release'].format('YYYY')
		// let platform = val['platform'].toLowerCase()
		if(val['platform'] && val['release']){
			let filter = games.filter( el => {
				return el.platform.toLowerCase()
					.indexOf(val['platform'].toLowerCase()) !== -1 
					&& el.release == val['release'].format('YYYY')
			})
			setGames([...filter])
		}else{ 
		let filPlat = (val['platform'] ? games.filter( el => {
					return el.platform.toLowerCase()
					.indexOf(val['platform'].toLowerCase()) !== -1 }) : [])
		let filRel = (val['release'] ? games.filter( el => {
					return  el.release == val['release'].format('YYYY') }) : [])
		setGames([...filPlat,...filRel])}

	}
	const clear = () => { 
		setRefresh(!refresh);
		form.resetFields(); }

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
	return(
		<div style={{display:'flex',justifyContent:'center'}} >
			<Col xs={24} sm={24} md={20} >
		<Content className="site-layout-background"
	          style={{
	            padding: 0,
	            margin: '5% 0',
	            minHeight: 280,
	            background:"#fff",
	            
	          }}
	        >
	        <PageHeader
		      ghost={false}
		      onBack={() => window.history.back()}
		      title="Game Lists"
		      
		      ></PageHeader>
        <div style={{padding:'0 3%'}} >
	        
	        <div style={{display:'flex',justifyContent:'center',margin:'0 2% 2%'}} >
	         <Search
			      placeholder="Search games..."
			      allowClear
			      onSearch={handleSearch}
			      size="medium"
			      style={{width:'300px'}}
			    />
	        </div>
	        <div style={{float:'right'}} >
	        <Form onFinish={handleFilter} form={form} >
		        <Space size={[8]}  >
		        <Form.Item name="platform">
			        <Input placeholder="Select platform" name="platform" allowClear/>
		        </Form.Item>
		        <Form.Item name="release">
			        <DatePicker picker="year" name="release"/>
		        </Form.Item>
		        <Form.Item>
			        <Button type="primary" htmlType="submit" ><FilterOutlined/></Button>
			    </Form.Item>
			    <Form.Item>
			        <Button onClick={clear} ><ClearOutlined /></Button>
			    </Form.Item>
		        </Space>
	        </Form>
	        </div>
	        <Link to="/create/game" ><Button type="primary" ><PlusOutlined /> add</Button></Link>
			<Table  size="small" columns={columns} dataSource={games} pagination={{ pageSize:10}} scroll={{x:900}} style={{marginTop:'20px'}}/>
        </div>
		</Content>
		</Col>
		</div>
		);
}