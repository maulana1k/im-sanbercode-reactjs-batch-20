import React from 'react'
import {FruitsProvider} from "./FruitsContext";
import FruitsTable from './FruitsTable'
import FruitsForm from './FruitsForm'
import '../Tugas-12/Lists.css'

function Fruits(props) {
	
	return(
		<div className="app">
			<FruitsProvider>
				<FruitsTable/>
				<FruitsForm/>
			</FruitsProvider>
		</div>
		)
}
export default Fruits