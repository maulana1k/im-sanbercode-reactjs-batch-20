import React from 'react';
import {	Switch, Route } from 'react-router-dom'

import Form from '../Tugas-9/Form'
import Table from '../Tugas-10/Table'
import Clock from '../Tugas-11/Clock'
import Lists from '../Tugas-12/Lists'
import ListsAxios from '../Tugas-13/Axios'
import Fruits from '../Tugas-14/Fruits'


function Routes() {

	return (
			<div>
				<Switch>
					<Route exact path='/'>
						<Form/>
					</Route>
					<Route path='/table'>
						<div className="app">
						<Table/>
						</div>
					</Route>
					<Route path='/clock'>
						<div className="app">
							<Clock/>
						</div>
					</Route>
					<Route path='/lists'>
						<div className="app">
						<Lists/>
						</div>
					</Route>
					<Route path='/axios'>
						<ListsAxios/>
					</Route>
					<Route path='/context'> 
						<Fruits/>
					</Route>
				</Switch>
			</div>
		
		)
}
export default Routes