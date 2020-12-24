import React, {useState, useEffect} from 'react'
import '../Tugas-12/Lists.css'
import axios from 'axios'

function ListsAxios() {
	const [buah, setBuah] = useState(null)
				console.log(buah)
	const [fruits, setFruits] = useState([
			  {id:1,nama: "Semangka", harga: 10000, berat: 1000},
			  {id:2,nama: "Anggur", harga: 40000, berat: 500},
			  {id:3,nama: "Strawberry", harga: 30000, berat: 400},
			  {id:4,nama: "Jeruk", harga: 15000, berat: 1000},
			  {id:5,nama: "Salak", harga: 10000, berat: 1000}
			])
	const [nama , setNama] = useState('')
	const [harga, setHarga] = useState('')
	const [berat, setBerat] = useState('')
	const [currentId, setCurrentId] = useState(null)
	console.log(nama, harga, berat)
	const url = 'http://backendexample.sanbercloud.com/api/fruits'
	const link = url + '/inilink'
	console.log(link)
	useEffect(()=>{
		if(buah === null ){

		axios.get(url)
			.then(response => {
				let {data} = response
				setBuah(data.map(el =>{
					return {
						id:el.id, name:el.name, price:el.price, weight:el.weight
					}
				}))
			})
		}

	})
	const handleSubmit=(e)=>{
		e.preventDefault()
		let inputFruits = {	name:nama, price:harga,weight:berat}
		console.log(inputFruits)
		//jika tambah
		if(currentId === null){
			axios.post(url, {
				name:nama, price:harga,weight:berat
			})
			.then(res=>{
				let data = res.data
				setBuah([...buah,{
					id:data.id,
					name:data.name,
					price:data.price,
					weight:data.weight
				}])
			})
			
			setNama('')
			setBerat('')
			setHarga('')			
		}else{ //jika edit
			axios.put(url + `/${currentId}`,{
				name:nama, price:harga,weight:berat })
			.then(res=>{
				let data = res.data
				let satuBuah = buah.find(el=>el.id === currentId)
				satuBuah.name = nama
				satuBuah.price = harga
				satuBuah.weight = berat
				setBuah([...buah])
			})
			setNama('')
			setHarga('')
			setBerat('')
			setCurrentId(null)
		}
	}
	const handleChange=(e)=>{
		const name = e.target.name
		const value = e.target.value
			if(name === 'nama'){
				setNama(value)
			} if(name === 'harga'){
				setHarga(value)
			} if(name === 'berat'){
				setBerat(value)
			}
		}
	const handleEdit=(e)=>{
		let id = parseInt(e.target.value)
		axios.get(url + `/${id}`).then(res =>{
			let data = res.data
			setNama(data.name)
			setHarga(data.price)
			setBerat(data.weight)
			setCurrentId(data.id)
		})
		console.log(id)
	}
	const handleDelete=(e)=>{
		let id = parseInt(e.target.value)
		axios.delete(url + `/${id}`).then(()=>{
			let hasil = buah.filter(el=>{return el.id !== id})
			setBuah([...hasil])
		})		
	}
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
			      </table>
		        </div>
		      </div>
		     	<div className="card-blue">
		        	<h2>Form Daftar Buah</h2>

		          <div className="form">
		            <form onSubmit={handleSubmit}>
		              <label htmlFor="nama">Nama Buah</label><br/>             
		              <input required type="text" name="nama" 
			              onChange={handleChange} 
			              value={nama}/><br/>
		              <label htmlFor="harga">Harga</label><br/>
		              <input type="number" name="harga" style={{width: "100px"}} 
			              onChange={handleChange} 
			              value={harga}/><br/>
		              <label htmlFor="berat">Berat (gram)</label><br/>
		              <input type="number" name="berat" style={{width: "100px"}} 
			              onChange={handleChange} 
			              value={berat}/> <br/>
		              <input type="submit" className="submit" value="Submit"/>
		              
		            </form>
		          </div>
		        
		     	</div>
				</div>)
		}
					
		</div>
		)
	}	
		
export default ListsAxios
