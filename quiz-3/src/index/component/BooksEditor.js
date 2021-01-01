import React, {useState, useEffect} from 'react'
import axios from 'axios'

function BooksEditor() {
	const [books , setBooks] = useState([])
	const [booksMirror, setBooksMirror] = useState([])
	const [input,  setInput] = useState({
		id:'',title:'',description:'',review:'',release_year:2020,totalPage:'',price:'',image_url:'',search:''
	})
	const resetInput = () => {
		 setInput({id:'',title:'',description:'',review:'',release_year:2020,totalPage:'',price:'',image_url:''})
		 setRefresh(true)
	}
	const [refresh ,setRefresh] = useState(false)
	const url = 'http://backendexample.sanbercloud.com/api/books'
	useEffect(()=>{
			axios.get(url).then(res => {
				let data = res.data
				setBooks(data.map(el => {
					return{ 
					id:el.id,
					title:el.title,
					description:el.description,
					review:el.review,
					release_year:el.release_year,
					totalPage:el.totalPage,
					price:el.price,
					image_url:el.image_url}
				}))
				setRefresh(false)
			})
			axios.get(url).then(res => {
				let data = res.data
				setBooksMirror(data.map(el => {
					return{ 
					id:el.id,
					title:el.title,
					description:el.description,
					review:el.review,
					release_year:el.release_year,
					totalPage:el.totalPage,
					price:el.price,
					image_url:el.image_url}
				}))
				setRefresh(false)
			})
	}, [refresh])
	console.log(booksMirror)
	const handleSubmit = (e) => {
		e.preventDefault()
		let posting = {
			title:input.title,
			description:input.description,
			review:input.review,
			release_year:input.release_year,
			totalPage:input.totalPage,price:input.price,image_url:input.image_url
		}
		if(input.id === null ){
			axios.post(url, posting).then(()=>{
				resetInput()
			})
		}else{
			axios.put(`${url}/${input.id}`, input).then(()=>{
				resetInput()
			})
		}
		console.log(posting)
	}
	const handleChange=(e)=>{ //handle saat isi form
		let name = e.target.name
		let value = e.target.value
		switch(name){
			case 'title':{
				setInput({...input,title:value})
				break
			}
			case 'description': {
				setInput({...input,description:value})
				break
			}
			case 'review': {
				setInput({...input,review:value})
				break
			}  
			case 'release_year': {
				setInput({...input,release_year:value})
				break
			} 
			case 'totalPage': {
				setInput({...input,totalPage:value})
				break
			} 
			case 'price': {
				setInput({...input,price:value})
				break
			}
			case 'image_url' : {
				setInput({...input,image_url:value})
				break
			}
			case 'search' : {
				setInput({...input,search:value.toLowerCase()})
				if(value.length === 0){
					setBooks([...booksMirror])
				}
				break
			}
			default:{break;}
		}
	}
	const handleEdit=(e)=>{ //menampilkan data yg akan diedit di form
		let id = parseInt(e.target.value)
		axios.get(`${url}/${id}`).then(res => {
			let data = res.data
			setInput({
			id:data.id,
			title:data.title,
			description:data.description,
			review:data.review,
			release_year:data.release_year,
			totalPage:data.totalPage,
			price:data.price,
			image_url:data.image_url	
			})	
		})
	}
	const handleDelete=(e)=>{//delete data
		let id = parseInt(e.target.value)
		axios.delete(`${url}/${id}`).then(()=>{
			setRefresh(true)
		})
	}
	const handleSearch = (e) => {
		e.preventDefault()
		let filter = booksMirror.filter(el => {
			return el.title.toLowerCase().indexOf(input.search) !== -1 
		})
		setBooks([...filter])
	}
	return(<>
		<div  className="table">
		<div style={{display:"flex",justifyContent:"center",padding:'10px'}}>
				      <form onSubmit={handleSearch}>
				      	<input type="search" onChange={handleChange} name="search" placeholder="Search..."/>
				      	<button type="submit">Search</button>
				      </form>
			      </div>
			<h1 style={{textAlign:'center'}}>Daftar Buku</h1>
			<table>
				{ books.length === 0 ? (<>
				<thead>
					<tr>
						<th>No.</th>
						<th>Title</th>
						<th>Description</th>
						<th>Review</th>
						<th>Release Year</th>
						<th>Total Page</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
				       <td style={{ padding: "5% 0 5% 0",textAlign: 'center'}} colSpan="5">
				       	Loading...</td>
				    </tr>
				</tbody>
				</>	
					) : (
					<>
				<thead>
					<tr>
						<th>No.</th>
						<th>Title</th>
						<th>Description</th>
						<th>Review</th>
						<th>Release Year</th>
						<th>Total Page</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
				{ books.map((el,index)=> {

					return(
						<tr key={el.id}>
							<td>{index+1}</td>
							<td>{el.title}</td>
							<td>{el.description}</td>
							<td>{el.review}</td>
							<td>{el.release_Year}</td>
							<td>{el.totalPage}</td>
							<td>{el.price}</td>
							<td>
								<button onClick={handleEdit} value={el.id}>edit</button>
								<button onClick={handleDelete} value={el.id}>delete</button>
							</td>
						</tr>
						
						)
				})}
				</tbody>	
				</>
					)}

			</table><hr/>
			<h2 style={{textAlign:'center'}}>Books Form</h2>
			<div className="form">
			<form onSubmit={handleSubmit}>
				<label htmlFor="title">Title</label><br/>
				<input type="text" name="title" 
					onChange={handleChange}
					value={input.title}/><br/>
				<label htmlFor="description">Description</label><br/>
				<textarea name="description" cols="50" rows="5" 
					onChange={handleChange}
					value={input.description}></textarea><br/>
				<label htmlFor="review">Review</label><br/>
				<textarea name="review" cols="50" rows="5" 
					onChange={handleChange}
					value={input.review}></textarea><br/>
				<label htmlFor="release_year">Release Year</label><br/>
				<input type="number" name="release_year"
					onChange={handleChange}
					value={input.release_year}
					min="1980"/><br/>
				<label htmlFor="totalPage">Total Page</label><br/>
				<input type="number" name="totalPage"
					onChange={handleChange}
					value={input.totalPage}/><br/>
				<label htmlFor="price">Price</label><br/>
				<input type="number" name="price"
					onChange={handleChange}
					value={input.price}/><br/>
				<label htmlFor="">Image Url</label><br/>
				<textarea name="image_url" cols="50" rows="5"
					onChange={handleChange}
					value={input.image_url}></textarea><br/>
				<button type="submit">Submit</button>
			</form>
			</div>

		</div>
		</>
		)
}

export default BooksEditor