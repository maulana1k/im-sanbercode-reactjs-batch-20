import React, { Component } from 'react'
import './Table.css'

let dataHargaBuah = [
  {nama: "Semangka", harga: 10000, berat: 1000},
  {nama: "Anggur", harga: 40000, berat: 500},
  {nama: "Strawberry", harga: 30000, berat: 400},
  {nama: "Jeruk", harga: 30000, berat: 1000},
  {nama: "Mangga", harga: 30000, berat: 500},
  {nama: "Pepaya", harga: 20000, berat: 500},
  {nama: "Melon", harga: 25000, berat: 1000},
]


class Table extends Component {
	render(){

	return (
		<div className="card-blue">
        <h2>Tabel Harga Buah</h2>
        <div >
          
			<table>
        <thead>
          
            <tr>
              <th>Nama Buah</th>
              <th>Harga</th>
              <th>Berat (gr)</th>
            </tr>
        </thead>
        <tbody>
          
            {dataHargaBuah.map((item, index)=>
            
  				    <tr key={index}>
  	            <td>{item.nama}</td>
  	            <td>Rp.{item.harga}</td>
  	            <td>{item.berat}</td>
  	          </tr>
           				
           	
           )}
        </tbody> 
      </table>

        </div>
      </div>
		)
	}
} export default Table