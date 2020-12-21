import React from 'react'
import Form from './Tugas-9/Form'
import Table from './Tugas-10/Table'
import Clock from './Tugas-11/Clock'
import './App.css';


function App() {
  return (
  	<>
    <div className="app">
      <Form />
      <Table/>
    </div>
    <div className="app">
    	<Clock/>
    </div>
    </>
  );
}

export default App;
