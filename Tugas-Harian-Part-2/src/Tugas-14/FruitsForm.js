import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {FruitsContext} from "./FruitsContext";

const FruitsForm = () => {
	const [fruits, setFruits, currentID, setCurrentID,input , setInput] = useContext(FruitsContext)
	// const [input, setInput] = useState({name:'',price:'',weight:''})
	const url = 'http://backendexample.sanbercloud.com/api/fruits'
	const [refresh , setRefresh] = useState(false)
	const resetInput = () => {
		 setInput({name:'',weight:'',price:''})
		 setRefresh(true)
		 setCurrentID(null)
	}
	// console.log(fruits)
	console.log(input)	
	useEffect(() => {
		// if(refresh === true){
			axios.get(url).then(res => {
					let data = res.data
					setRefresh(false)
					setFruits(data.map(el=>{
						return {id:el.id,name:el.name,price:parseInt(el.price),weight:el.weight}
					}))
				})
		// }
	}, [refresh, currentID])
	const handleSubmit=(e)=>{
		e.preventDefault()
		if(currentID=== null){ //jika tambah
			axios.post(url,  input )
			.then(()=>{ resetInput()		 })
		}else{ //jika edit
			axios.put(`${url}/${currentID}`,input)
			.then(()=>{ resetInput() }) 
		}
	}
	const handleChange=(e)=>{ //handle saat isi form
		let name = e.target.name
		let value = e.target.value
		switch(name){
			case 'name': {
				setInput({...input,name:value});
				break
			}
			case 'price':{
				setInput({...input,price:value});
				break
			} 
			case 'weight': {
				setInput({...input,weight:value});
				break
			}
			default:{break;}
		}
		
	}
	return (
			<div className="card-blue">
		        <h2>Form Daftar Buah</h2>

		          	<div className="form">
		            <form onSubmit={handleSubmit}>
		              <label htmlFor="name">Nama Buah</label><br/>
		              <input required type="text" name="name"
			              onChange={handleChange}
			              value={input.name}/><br/>
		              <label htmlFor="harga">Harga</label><br/>
		              <input type="number" name="price" style={{width: "100px"}}
			              onChange={handleChange}
			              value={input.price}/><br/>
		              <label htmlFor="berat">Berat (gram)</label><br/>
		              <input type="number" name="weight" style={{width: "100px"}}
			              onChange={handleChange}
			              value={input.weight}/> <br/>
		              <input type="submit" className="submit" value="Submit"/>

		            </form>
		          	</div>

		    </div>
		)
}
export default FruitsForm