import React from 'react'
import Form from './Tugas-9/Form'
// import Table from './Tugas-10/Table'
// import Clock from './Tugas-11/Clock'
// import Lists from './Tugas-12/Lists'
import ListsAxios from './Tugas-13/Axios'
import './App.css';


function App() {
  return (
  	<div>
    <div className="app">
      {/*<Form />*/}
      {/*<Table/>*/} 
      {/*<Lists/>*/}
      <ListsAxios/>
    </div>
     <div className="app">
    	{/*<Clock/>*/}
    </div>
    </div>
  );
}

export default App;
