import React, { Component } from "react";
import Shift from "./shift";

class DateBlock extends Component {
	state = {
		shifts: [
			{
				id: 1,
				firstname: "Bac",
				lastname: "Dam",
				startTime: "09:00",
				endTime: "19:00"
			},
			{
				id: 2,
				firstname: "Megan",
				lastname: "Kong",
				startTime: "09:00",
				endTime: "18:00"
			}
		]
	};

	render() {
		return (
			<div>
				<span>1</span>
				<Shift />
			</div>
		);
	}
}

export default DateBlock;
