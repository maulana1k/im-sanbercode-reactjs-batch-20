import React, {Component} from 'react'
import './Lists.css'

class Lists extends Component {
	constructor(props){
		super(props)
		this.state = {
			dataHargaBuah: [
			  {nama: "Semangka", harga: 10000, berat: 1000},
			  {nama: "Anggur", harga: 40000, berat: 500},
			  {nama: "Strawberry", harga: 30000, berat: 400},
			  {nama: "Jeruk", harga: 15000, berat: 1000},
			  {nama: "Salak", harga: 10000, berat: 1000}
			],
			nama:'', harga:'', berat:'',
			currentIndex: -1
			
		}
		 
	}
	handleSubmit=(e)=>{
		e.preventDefault()
		let dataBuah = this.state.dataHargaBuah
		let index = this.state.currentIndex
		let inputData= {nama:this.state.nama,
										harga:this.state.harga,
										berat:this.state.berat}
		if(index === -1){
			this.setState({
				dataHargaBuah:[...dataBuah,inputData],
				nama: '',	harga:'',	berat: ''
			})	
		}else{
			dataBuah[index] = inputData
			this.setState({
				dataHargaBuah:[...dataBuah],
				nama: '',	harga:'',	berat: ''
			})
		}
	}
	handleChange=(e)=>{
		const name = e.target.name
		this.setState({			[name]: e.target.value		})
	}
	handleEdit=(e)=>{
		let i = e.target.value
		let namaBuah  = this.state.dataHargaBuah[i].nama
		let harga = this.state.dataHargaBuah[i].harga
		let berat = this.state.dataHargaBuah[i].berat
		this.setState({			nama:namaBuah, harga:harga, berat:berat, currentIndex:i		})
	}
	handleDelete=(e)=>{
		let i = parseInt(e.target.value)
		let dataHargaBuahNew = this.state.dataHargaBuah.filter((val, index)=>{
			return index !== i
		})
			console.log(i)
		this.setState({			dataHargaBuah:[...dataHargaBuahNew]		})
	}
	render(){
		return(
			<>
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
	          
	            {this.state.dataHargaBuah.map((item, index)=>
	            
	  					<tr key={index+1}>
	  							<td>{index+1}  </td>
	  	            <td>{item.nama}</td>
	  	            <td>Rp.{item.harga}</td>
	  	            <td>{item.berat}</td>
	  	            <td><button className="btn edit" onClick={this.handleEdit} value={index}>edit</button>
	  	            		<button className="btn delete" onClick={this.handleDelete} value={index}>delete</button></td>
	  	        </tr>	           					           	
	           )}
	        </tbody> 
	      </table>
        </div>
      </div>
     	<div className="card-blue">
        	<h2>Form Daftar Buah</h2>

          <div className="form">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="nama">Nama Buah</label><br/>             
              <input required type="text" name="nama" 
	              onChange={this.handleChange} 
	              value={this.state.nama}/><br/>
              <label htmlFor="harga">Harga</label><br/>
              <input type="number" name="harga" style={{width: "100px"}} 
	              onChange={this.handleChange} 
	              value={this.state.harga}/><br/>
              <label htmlFor="berat">Berat</label><br/>
              <input type="number" name="berat" style={{width: "100px"}} 
	              onChange={this.handleChange} 
	              value={this.state.berat}/><br/>
              <input type="submit" className="submit" value="Submit"/>
            </form>
          </div>
        
     	</div>
			</>
			)
	}
}
export default Lists