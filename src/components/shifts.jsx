import React, { Component } from "react";
import Shift from "./shift";
import { getShifts } from "../services/shiftService";

class Shifts extends Component {
	state = {};

	constructor() {
		super();
		this.state.shifts = getShifts();
	}

	handleSaveBtnClick = (shift, inputValue) => {
		// console.log(shift);
		let inputComponents = inputValue.split(" ");
		const shifts = [...this.state.shifts];
		const index = shifts.indexOf(shift);
		if (this.validateInput(inputComponents)) {
			shifts[index].firstname = this.capitalise(inputComponents[0]);
			shifts[index].lastname = inputComponents[1].toUpperCase();
			this.setTime(shifts[index].startTime, inputComponents[2]);
			this.setTime(shifts[index].endTime, inputComponents[3]);
			this.setState({ shifts });
		}
	};

	validateInput = inputComponents => {
		const { length } = inputComponents;
		if (length === 1 && inputComponents[0] === "") {
			console.log("No shift detail.");
			return false;
		} else if (length < 2) {
			console.log("Missing lastname, start and end time.");
			return false;
		} else if (length < 3) {
			console.log("Missing start and end time.");
			return false;
		} else if (length < 4) {
			console.log("Missing end time.");
			return false;
		} else if (length > 4) {
			console.log("There are too many input details.");
			return false;
		}
		return true;
	};

	capitalise(str) {
		return str.slice(0, 1).toUpperCase() + str.slice(1);
	}

	setTime(timeObj, timeStr) {
		timeObj.hour = parseInt(timeStr.slice(0, 2));
		timeObj.minute = parseInt(timeStr.slice(2));
	}

	render() {
		return (
			<div>
				{this.state.shifts.map(shift => {
					return (
						<Shift
							key={shift._id}
							shift={shift}
							onSaveBtnClick={this.handleSaveBtnClick}
						/>
					);
				})}
			</div>
		);
	}
}

export default Shifts;
