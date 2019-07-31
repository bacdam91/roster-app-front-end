import React, { Component } from "react";
import Shifts from "./shifts";

class DateBlock extends Component {
	render() {
		const { date } = this.props.dateBlock;
		return (
			<div>
				<span>{date}</span>
				<Shifts />
			</div>
		);
	}
}

export default DateBlock;
