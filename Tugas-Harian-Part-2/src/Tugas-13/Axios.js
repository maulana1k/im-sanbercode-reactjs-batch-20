import React, { useState, useEffect } from 'react'
import '../Tugas-12/Lists.css'
import axios from 'axios'

function ListsAxios() {
	const [fruits, setFruits] = useState([])
	const [fruitInput, setFruitInput] = useState({name:'',weight:'',price:'',id:null})
	const [refresh , setRefresh] = useState(false)
	const [loading, setLoading] = useState('')
	const resetInput = () => {
		 setFruitInput({name:'',weight:'',price:'',id:''})
		 setRefresh(true)
	}
	const url = 'http://backendexample.sanbercloud.com/api/fruits'
	// console.log(fruits)
	const getFruits = async () => {
		try {
			let response = await axios.get(url)
			setFruits(response.data)
		 } catch (e) {
			console.log(e.message)
		}
		setRefresh(false)
	} 
	useEffect(()=>{
		getFruits();
	}, [ refresh ])
	useEffect(() => {
		const interval= setInterval(() =>{
			setLoading('=' + loading)
			if(loading === '=====================')
				setLoading('')
		}, 20)
		return () => clearInterval(interval)
	}, [loading])
	const handleSubmit=(e)=>{
		e.preventDefault()
		if(fruitInput.id === null){ //jika tambah
			axios.post(url,  fruitInput )
			.then(()=>{	resetInput() })
		}else{ //jika edit
			axios.put(`${url}/${fruitInput.id}`,fruitInput)
			.then(()=>{ resetInput() }) 
		}
	}
	const handleChange=(e)=>{ //handle saat isi form
		let name = e.target.name
		let value = e.target.value
		switch(name){
			case 'name': {
				setFruitInput({...fruitInput,name:value});
				break
			}
			case 'price':{
				setFruitInput({...fruitInput,price:value});
				break
			} 
			case 'weight': {
				setFruitInput({...fruitInput,weight:value});
				break
			}
			default:{break;}
		}
		
	}
	const handleEdit=(e)=>{ //menampilkan data yg akan diedit di form
		let id = parseInt(e.target.value)
		axios.get(`${url}/${id}`).then(res => {
			let data = res.data
			setFruitInput({
				name:data.name,
				price:data.price,
				weight:data.weight,
				id:data.id
			})
	
		})
	}
	const handleDelete=(e)=>{//delete data
		let id = parseInt(e.target.value)
		axios.delete(`${url}/${id}`).then(()=>{
			setRefresh(true)
		})
	}
	return(
		<div className="app">
			<div className="card-blue">
			      <h2>Tabel Harga Buah</h2>
			        <div>
						<table>
			    { fruits.length === 0  ? ( <> 
			        <thead>
			            <tr>
			            	<th>No.</th>
				            <th>Nama Buah</th>
				            <th>Harga</th>
				            <th>Berat(gr)</th>
				            <th>Edit/Delete </th>
			            </tr>
			        </thead>
				    <tbody>
				        <tr>
				        	<td style={{ padding: "5% 0 5% 0"}} colSpan="5">
				        	<span style={{marginLeft:"30%"}}>[ {loading}</span><span style={{float:"right",marginRight:"30%"}}>]</span></td>
				        </tr>
				    </tbody>
			        </>) : ( <>
	          		<thead>
			            <tr>
			            	<th>No.</th>
				            <th>Nama Buah</th>
				            <th>Harga</th>
				            <th>Berat (gr)</th>
				            <th>Edit/Delete </th>
			            </tr>
			        	</thead>
			        	<tbody>
	            		{fruits.map((item, index)=>
		  					<tr key={item.id}>
		  						<td>{index+1}  </td>
				  	            <td>{item.name}</td>
				  	            <td>Rp.{item.price}</td>
				  	            <td className="item-weight"> {item.weight}</td>
				  	            <td><button className="btn edit" onClick={handleEdit} value={item.id}>edit</button>
				  	            	<button className="btn delete" onClick={handleDelete} value={item.id}>delete</button></td>
				  	        </tr>
			           	)}
			        	</tbody>
	          		</> )
			    }
			      </table>
		        </div>
		    </div>
		    <div className="card-blue">
		        <h2>Form Daftar Buah</h2>

		          	<div className="form">
		            <form onSubmit={handleSubmit}>
		              <label htmlFor="name">Nama Buah</label><br/>
		              <input required type="text" name="name"
			              onChange={handleChange}
			              value={fruitInput.name}/><br/>
		              <label htmlFor="harga">Harga</label><br/>
		              <input type="number" name="price" style={{width: "100px"}}
			              onChange={handleChange}
			              value={fruitInput.price}/><br/>
		              <label htmlFor="berat">Berat (gram)</label><br/>
		              <input type="number" name="weight" style={{width: "100px"}}
			              onChange={handleChange}
			              value={fruitInput.weight}/> <br/>
		              <input type="submit" className="submit" value="Submit"/>

		            </form>
		          	</div>

		    </div>
		</div>

		)
	}

export default ListsAxios
