import React, {useState, useEffect, useContext,useForm} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {UserContext} from '../../component/UserContext'
import { Table,Layout,Button,Cascader,DatePicker,Space,Rate,Input,Select,Modal,Form,PageHeader,Card } from 'antd';
import {EditOutlined, ClearOutlined,DeleteOutlined, FilterOutlined,ExclamationCircleOutlined,PlusOutlined} from '@ant-design/icons'

const {Content} = Layout
const {Search} = Input
const {confirm} = Modal
export default function MovieLists(){
	const [user] = useContext(UserContext)
	const [movies, setMovies] = useState([])
	const [refresh ,setRefresh] = useState(false)
	const [form] = Form.useForm()
	const DeleteWarning = (e,item) =>  {
			let name = item
			let id = e
			confirm({
		    title: 'Delete warning',
		    icon: <ExclamationCircleOutlined />,
		    content: `Are you sure to delete ${name}?`  ,
		    onOk() { 
		    	axios.delete(`https://backendexample.sanbersy.com/api/data-movie/${id}`,
		    		{headers: {"Authorization" : "Bearer "+ user.token}})
		    	.then(()=>{
		    		setRefresh(true)
		    	})
		    	console.log(id); },
		    onCancel() {  console.log('Cancel'); },
		  	});
		}

	useEffect(() => {
		axios.get('https://backendexample.sanbersy.com/api/data-movie')
		.then( res => {
			setMovies(res.data.map((el,index) => {
				return{
					key:index+1,
					no:index+1,
					title:el.title,
					genre:el.genre,
					review:el.review,
					duration:el.duration,
					year:el.year,
					rating:el.rating,
					description:el.description,
					image:(<Card style={{height:'5vw'}} 
						cover={<img src={el.image_url} alt="f" style={{overflow:'hidden',objectFir:'cover'}} />} ></Card>),
					action: (<span><Button type="primary"  style={{marginRight:'10px'}}>
				    		<Link to={`/lists/movies/edit/${el.id}`} ><EditOutlined /></Link></Button>
							<Button danger onClick={() => DeleteWarning(el.id,el.title)} ><DeleteOutlined /></Button></span>)
				}
			}))
		})
	},[refresh])
	const columns = [
		  { title:'No.', dataIndex:'no', sorter: {
		      compare: (a, b) => a.no - b.no,
		      multiple: 3,
		    }, width:50},
		  {	title:'Cover', dataIndex:'image',ellipsis:true},
		  { title: 'Title', dataIndex: 'title' },
		  {	title:'Genre', dataIndex:'genre',
			filters: [{text: 'Anime',value: 'anime',},
			      {text: 'Action',value: 'action',},
			      {text: 'Romance',value: 'romance romantis',},
			      {text: 'Drama',value: 'drama',},
			      {text: 'Animation',value: 'animation',},
			      {text: 'Horor',value: 'horor',}
			    ],
			    onFilter: (value, record) => record.genre.toLowerCase().indexOf(value) >= 0},
		  { title:'Review', dataIndex:'review',ellipsis:true},
		  { title:'Duration', dataIndex:'duration',width:80, sorter: {
		      compare: (a, b) => a.duration - b.duration,
		      multiple: 3,
		    }},
		  {	title:'Year', dataIndex:'year', sorter: {
		      compare: (a, b) => a.year - b.year,
		      multiple: 3,
		    }, width:80},
		  {	title:'Rating', dataIndex:'rating',width:80,
			filters: [{text: '1',value: 1,},
				      {text: '2',value: 2,},
				      {text: '3',value: 3,},
				      {text: '4',value: 4,},
				      {text: '5',value: 5,},
				      {text: '6',value: 6,},
				      {text: '7',value: 7,},
				      {text: '8',value: 8,},
				      {text: '9',value: 9,},
				      {text: '10',value: 10,},
				    ],
				    onFilter: (value, record) => record.rating === value},
		  { title:'Description', dataIndex:'description',ellipsis:true},
		  { title:'Edit/Delete', dataIndex:'action',width:120,fixed:'right'}
	];

	const [data, setData] = useState([])

	const handleFilter = (val) => {
		let year = parseInt(val['year'].format('YYYY'))
		let filter = movies.filter( el => {
			return  el.year == year 
		})
		setMovies([...filter])
		console.log(filter)
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
		let filter = movies.filter( el => {
			return el.title.toLowerCase().indexOf(param) !== -1
		})
		setMovies([...filter])
	}

	return(
		<Content className="site-layout-background"
	          style={{
	            padding: 0,
	            margin: '3%',
	            minHeight: 280,
	            background:"#fff",
	            borderRadius:'10px'
	          }}
	        >
	        <PageHeader
		      ghost={false}
		      onBack={() => window.history.back()}
		      title="Movie Lists"
		      style={{borderRadius:5}}
		      ></PageHeader>
	    <div style={{display:'flex'}} ></div>
        <div style={{padding:' 0 3vw'}} >
	        <div style={{display:'flex',justifyContent:'center',margin:'0 2% 2%'}} >
	         <Search
			      placeholder="Search movies..."
			      allowClear
			      onSearch={handleSearch}
			      size="medium"
			      style={{width:'300px'}}
			    />
	        </div>
	        <div style={{float:'right'}}  >
	        <Form onFinish={handleFilter} form={form} >
		        <Space size={[8]}  >
		        <Form.Item name="year">
			        <DatePicker picker="year" format="YYYY"/>
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
	        <Link to="/create/movie" ><Button type="primary" ><PlusOutlined />add movies</Button></Link>
			<Table size="small" columns={columns} dataSource={movies}  pagination={{ pageSize: 10 }} scroll={{ x: 1300 }}  style={{marginTop:'20px'}}/>
        </div>
		</Content>
		);
}