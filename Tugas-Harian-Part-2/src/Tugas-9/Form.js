import React, {Component} from 'react'
import './Form.css'

class Form extends Component{
  render(){
    
	return (
		<div id="card-blue">
        	<h2>Form Pembelian Buah</h2>

          <div className="form">
            <form action="#">
              <p>Nama Pelanggan 
                <input type="text" name="nama" id="nama" placeholder="  Input your name ..." />
              </p>              
              <p id="item">Daftar Item</p>
              <input type="checkbox" name="daftarItem" />
              <label htmlFor="daftarItem">Semangka</label><br/>
              <input type="checkbox" name="daftarItem" />
              <label htmlFor="daftarItem">Jeruk</label><br/>
              <input type="checkbox" name="daftarItem" />
              <label htmlFor="daftarItem">Nanas</label><br/>
              <input type="checkbox" name="daftarItem" />
              <label htmlFor="daftarItem">Salak</label><br/>
              <input type="checkbox" name="daftarItem" />
              <label htmlFor="daftarItem">Apel</label><br/>
              <input type="checkbox" name="daftarItem" />
              <label htmlFor="daftarItem">Melon</label><br/>
              <input type="checkbox" name="daftarItem" />
              <label htmlFor="daftarItem">Pepaya</label><br/>
              <input type="checkbox" name="daftarItem" />
              <label htmlFor="daftarItem">Markisa</label><br/>
              <input type="submit" className="submit" value="Submit"/>
            </form>
          </div>
        
     	</div>
		)
  }
}
export default Form;