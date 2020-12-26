import React, { useState, useEffect } from 'react'
import '../Tugas-12/Lists.css'
import axios from 'axios'

function ListsAxios() {
	const [fruits, setFruits] = useState(null)
	const [name , setName] = useState('')
	const [price, setPrice] = useState('')
	const [weight, setWeight] = useState('')
	const [currentId, setCurrentId] = useState(null)
	const [refresh , setRefresh] = useState(false)
	const resetInput = () => {
		 setName('');setWeight('');setPrice('');
		setCurrentId(null);setRefresh(true)
	}
	const url = 'http://backendexample.sanbercloud.com/api/fruits'
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
	const handleSubmit=(e)=>{
		e.preventDefault()
		let fruitInput = { name:name, price:price,weight:weight }
		if(currentId === null){ //jika tambah
			axios.post(url,  fruitInput )
			.then(()=>{	resetInput() })
		}else{ //jika edit
			axios.put(`${url}/${currentId}`,fruitInput)
			.then(()=>{ resetInput() }) 
		}
	}
	const handleChange=(e)=>{ //handle saat isi form
		let name = e.target.name
		let value = e.target.value
		if(name === 'name'){setName(value)}
		if(name === 'price'){setPrice(value)}
		if(name === 'weight'){setWeight(value)}
	}
	const handleEdit=(e)=>{ //menampilkan data yg akan diedit di form
		let id = parseInt(e.target.value)
		axios.get(`${url}/${id}`).then(res => {
			let data = res.data
			setName(data.name)
			setPrice(data.price)
			setWeight(data.weight)
			setCurrentId(data.id)
		})
	}
	const handleDelete=(e)=>{//delete data
		let id = parseInt(e.target.value)
		axios.delete(`${url}/${id}`).then(()=>{
			setRefresh(true)
		})
	}
<<<<<<< HEAD
	return(
		<div className="app">
			<div className="card-blue">
			      <h2>Tabel Harga Buah</h2>
			        <div>
						<table>
			    { fruits===null ? ( <> 
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
				        	<td style={{textAlign: "center", padding: "10% 0 10% 0"}} colSpan="5">
				        	Loading ...</td>
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
=======
	return( <div>
		{buah !== null && 
			(<div className="app">
		<div className="card-blue">
	       <h2>Tabel Harga Buah</h2>
	        <div>	          
				<table>
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
	          
	            {buah.map((item, index)=>
	            
	  					<tr key={index+1}>
	  						<td>{index+1}  </td>
			  	            <td>{item.name}</td>
			  	            <td>Rp.{item.price.toLocaleString()}</td>
			  	            <td>{item.weight}</td>
			  	            <td><button className="btn edit" onClick={handleEdit} value={item.id}>edit</button>
			  	            	<button className="btn delete" onClick={handleDelete} value={item.id}>delete</button></td>
			  	        </tr>	           					           	
			           )}
			        </tbody> 
>>>>>>> origin/main
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
			              value={name}/><br/>
		              <label htmlFor="harga">Harga</label><br/>
		              <input type="number" name="price" style={{width: "100px"}}
			              onChange={handleChange}
			              value={price}/><br/>
		              <label htmlFor="berat">Berat (gram)</label><br/>
		              <input type="number" name="weight" style={{width: "100px"}}
			              onChange={handleChange}
			              value={weight}/> <br/>
		              <input type="submit" className="submit" value="Submit"/>

		            </form>
		          	</div>

		    </div>
		</div>

		)
<<<<<<< HEAD
	}

=======
	}	
		
>>>>>>> origin/main
export default ListsAxios
