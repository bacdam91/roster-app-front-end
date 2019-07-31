import React, { Component } from "react";

class Shift extends Component {
	render() {
		const {
			firstname,
			lastname,
			startTime,
			endTime
		} = this.props.pharmacist;

		return (
			<div>
				<span className="m-2">{firstname}</span>
				<span className="m-2">{lastname}</span>
				<span className="m-2">{startTime}</span>
				<span className="m-2">{endTime}</span>
			</div>
		);
	}
}

export default Shift;
