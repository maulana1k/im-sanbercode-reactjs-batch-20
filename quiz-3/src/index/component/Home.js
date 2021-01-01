import React, {Component} from 'react'
import axios from 'axios'

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			books:[],
			url:'http://backendexample.sanbercloud.com/api/books'
		}
	}
	componentDidMount(){
		axios.get(this.state.url).then( res => {
			this.setState({
				books: res.data
			})
		})
	}
	render(){
		return(<>
			<div className="main">
			<h1>Featured Post</h1>
			{this.state.books.map(el => {
				return(
					<div className="">
						<div className="lorem" >
							<h2><a href="#">{el.title}</a></h2>
							<div className="crop">
								<img src={el.image_url} alt="images"/>
							</div>
							<p>Tahun Terbit: {el.release_year}</p>
							<p>Harga: {el.price}</p>
							<p>Jumlah Halaman: {el.totalPage}</p>
							<div style={{clear:'both'}}>
								
							<p>Deskripsi: {el.description}</p>
							</div>
						</div>
					</div>
					)
			})}
			
			
			</div>
			</>
			)
	}

	
}