import React, { useContext, useState, useEffect } from "react";
import axios from 'axios'
import {FruitsContext} from "./FruitsContext";

const FruitsTable = () => {
	const [fruits, setFruits, currentID, setCurrentID,input , setInput] = useContext(FruitsContext)
	// console.log(input)
	console.log(fruits)
	const url = 'http://backendexample.sanbercloud.com/api/fruits'
	const [refresh , setRefresh] = useState(false)
	console.log(refresh)
	useEffect(() => {	
			axios.get(url).then(res => {
				let data = res.data
				setRefresh(false)
				setFruits(data.map(el=>{
					return {id:el.id,name:el.name,price:parseInt(el.price),weight:el.weight}
				}))
			})		
	}, [refresh])
	const handleEdit=(e)=>{ //menampilkan data yg akan diedit di form
		let id = parseInt(e.target.value)
		let data = fruits.find(el => el.id === id)
		setInput({
				name:data.name,
				price:data.price,
				weight:data.weight
			})
		
		setCurrentID(id)
		setRefresh(true)
	}
	const handleDelete=(e)=>{//delete data
		let id = parseInt(e.target.value)
		axios.delete(`${url}/${id}`)
		setRefresh(true)
	}

	return(
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
				        	<td style={{ padding: "5% 0 5% 0",textAlign: 'center'}} colSpan="5">
				        	Loading...</td>
				        </tr>
				    </tbody>
			        </>) : ( <>
	          		<thead>
			            <tr>
			            	<th>No.</th>
				            <th>Nama Buah</th>
				            <th>Harga</th>
				            <th>Berat (kg)</th>
				            <th>Edit/Delete </th>
			            </tr>
			        	</thead>
			        	<tbody>
			        	{fruits.map((item, index)=>{
			        		return(
		  					<tr key={item.id}>
		  						<td>{index+1}  </td>
				  	            <td>{item.name}</td>
				  	            <td>Rp.{item.price.toLocaleString()}</td>
				  	            <td className="item-weight"> {item.weight/1000}</td>
				  	            <td><button className="btn edit" onClick={handleEdit} value={item.id}>edit</button>
				  	            	<button className="btn delete" onClick={handleDelete} value={item.id}>delete</button></td>
				  	        </tr>
			        		)}
			           	)}
			        	</tbody>
	          		</> )
			    }
			      </table>
		        </div>
		    </div>
		    )
}

export default FruitsTable