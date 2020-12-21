import React, {Component} from 'react'
import './Form.css'
let dataHargaBuah = [
  {nama: "Semangka", harga: 10000, berat: 1000},
  {nama: "Anggur", harga: 40000, berat: 500},
  {nama: "Strawberry", harga: 30000, berat: 400},
  {nama: "Jeruk", harga: 30000, berat: 1000},
  {nama: "Mangga", harga: 30000, berat: 500},
  {nama: "Pepaya", harga: 20000, berat: 500},
  {nama: "Melon", harga: 25000, berat: 1000},
]

class Form extends Component{
  render(){
    
	return (
		<div className="card-blue">
        	<h2>Form Pembelian Buah</h2>

          <div className="form">
            <form action="#">
              <p>Nama Pelanggan 
                <input type="text" name="nama" id="nama" placeholder="  Input your name ..." />
              </p>              
              <p id="item">Daftar Item</p>
              {dataHargaBuah.map((item, index) =>

                <span key={index}>
                  <input type="checkbox" name="daftarItem" />
                  <label htmlFor="daftarItem" >{item.nama}</label><br/>
                </span>
                  
              )}
          
              <input type="submit" className="submit" value="Submit"/>
            </form>
          </div>
        
     	</div>
		)
  }
}
export default Form;