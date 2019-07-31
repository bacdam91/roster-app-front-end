import React, { Component } from "react";
import Shift from "./shift.jsx";

class Shifts extends Component {
	state = {
		pharmacists: [
			{
				_id: "qwertyuiop1234",
				firstname: "Bac",
				lastname: "Dam",
				startTime: "09:00",
				endTime: "19:00"
			},
			{
				_id: "qwertyuiop5678",
				firstname: "Megan",
				lastname: "Kong",
				startTime: "09:00",
				endTime: "18:00"
			},
			{
				_id: "qwertyuiop5690",
				firstname: "Tingna",
				lastname: "Tang",
				startTime: "09:00",
				endTime: "18:30"
			}
		]
	};

	render() {
		return (
			<div>
				{this.state.pharmacists.map(p => {
					return <Shift key={p._id} pharmacist={p} />;
				})}
			</div>
		);
	}
}

export default Shifts;
