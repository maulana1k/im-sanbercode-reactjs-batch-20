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
		<div id="table-green">
        <h2>Tabel Harga Buah</h2>
        <div >
          
			<table>
            <tr>
              <th>Nama Buah</th>
              <th>Harga</th>
              <th>Berat</th>
            </tr>
         
            {dataHargaBuah.map(el=>{
            	return(
				<tr>
	              <td>{el.nama}</td>
	              <td>Rp.{el.harga}</td>
	              <td>{el.berat} gr</td>
	            </tr>
           				
            	)
            })}
          	</table>

        </div>
      </div>
		)
	}
} export default Table