import React, {Component} from 'react'
import './Clock.css'
class Clock extends Component {
	constructor(props){
		super(props)
		this.state = {
			date: new Date(),
			time: 100,
			button: 'Stop',
			start: true
		};
		}
		componentDidMount(){
			if(this.props.start !== undefined){
				this.setState({time : this.props.start})
			}
			if(this.state.start !== false){
			}
			this.timerID = setInterval(
				() => this.tick(), 1000)				
		}
		
		tick(){
			if(this.state.start === true){
				this.setState({
					time: this.state.time - 1
				})
			}
			this.setState({ date: new Date()})
		}
		timerHandler = (e) =>{
			if(this.state.start === true){
				this.setState({
					start: false,
					button: 'Start'
				})
			}else{
				this.setState({
					start: true,
					button: 'Stop'
				})
			}
		}
		render(){
			if(this.state.time < 0 ){
				return null
			}
			return(
				<div className="app">
					<div className="card-green">
						<h3>Sekarang jam {this.state.date.toLocaleTimeString()} </h3>
					</div>
					<div className="card-red">
						<h3>Countdown >> {this.state.time} 
						</h3>
						<div className="button" onClick={this.timerHandler}> <h4> {this.state.button}</h4> </div>
					</div>
				</div>
				)
		}
	
}
export default Clock