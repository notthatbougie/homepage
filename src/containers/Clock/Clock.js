import React, {Component} from 'react';

class Clock extends Component {
	constructor() {
		super();
		this.state = {
		  date: new Date()
		};
	}

	componentDidMount() {
		// Refresh clock every 1 second
		this.timerID = setInterval(this.tick, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick = () => {
		this.setState({
			date: new Date()
		});
	};

	render() {
		return (
			<h2 className="f2 ma3">{this.state.date.toLocaleTimeString()}</h2>
		);
	}
}

export default Clock;