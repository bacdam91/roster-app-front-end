import React, { Component } from "react";

class Shift extends Component {
	state = {
		firstname: "Bac",
		lastname: "Dam",
		startTime: "09:00",
		endTime: "19:00"
	};
	render() {
		return (
			<div>
				<span>{this.state.firstname}</span>
				<span>{this.state.lastname}</span>
				<span>{this.state.startTime}</span>
				<span>-</span>
				<span>{this.state.endTime}</span>
			</div>
		);
	}
}

export default Shift;
