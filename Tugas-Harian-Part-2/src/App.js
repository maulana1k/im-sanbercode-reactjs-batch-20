import './App.css';

function App() {
  return (
    <div className="app">
      <div className="card">
        <h1>Form Pembelian Buah</h1>

          <div className="form">
            <form action="#">
              <p>Nama Pelanggan 
                <input type="text" name="nama" id="nama" />
              </p>              
              <p id="item">Daftar Item</p>
              <input type="checkbox" name="daftarItem" id="daftarItem" value="Semangka"/>
              <label htmlFor="daftarItem">Semangka</label><br/>
              <input type="checkbox" name="daftarItem" id="daftarItem" value="Semangka"/>
              <label htmlFor="daftarItem">Jeruk</label><br/>
              <input type="checkbox" name="daftarItem" id="daftarItem" value="Semangka"/>
              <label htmlFor="daftarItem">Nanas</label><br/>
              <input type="checkbox" name="daftarItem" id="daftarItem" value="Semangka"/>
              <label htmlFor="daftarItem">Salak</label><br/>
              <input type="checkbox" name="daftarItem" id="daftarItem" value="Semangka"/>
              <label htmlFor="daftarItem">Anggur</label><br/>
              <button type="submit">submit</button>
            </form>
          </div>
        
      </div>
    </div>
  );
}

export default App;
