import React, { Component } from "react";
import Shift from "./shift";
import { getShifts } from "../services/shiftService";

class Shifts extends Component {
	state = {};

	constructor() {
		super();
		this.state.shifts = getShifts();
		for (let i = 0; i < this.state.shifts.length; i++) {
			const shift = this.state.shifts[i];
			shift.inputValue = this.formatOutput(shift, true);
		}
	}

	handleSaveBtnClick = (shift, inputValue) => {
		let inputComponents = inputValue.split(" ");
		const shifts = [...this.state.shifts];
		const index = shifts.indexOf(shift);
		if (this.validateInput(inputComponents)) {
			this.setShift(shifts, index, inputComponents);
			this.setState({ shifts });
			this.handleEditable(shift);
		}
	};

	handleInputChange = (event, shift) => {
		const inputValue = event.target.value.trim();
		const shifts = [...this.state.shifts];
		const index = shifts.indexOf(shift);
		shifts[index].inputValue = inputValue;
		this.setState({ shifts });
	};

	handleEditable = shift => {
		const shifts = [...this.state.shifts];
		const index = shifts.indexOf(shift);
		shifts[index].isEditable = !shifts[index].isEditable;
		this.setState({ shifts });
	};

	handleDelete = shift => {
		// console.log(`${shift._id} deleted.`);
		const shifts = this.state.shifts.filter(s => s !== shift);
		this.setState({ shifts });
	};

	render() {
		// console.log(this.state.shifts);
		return (
			<div>
				{this.state.shifts.map(shift => {
					return (
						<Shift
							key={shift._id}
							shift={shift}
							onSaveBtnClick={this.handleSaveBtnClick}
							onInputChange={this.handleInputChange}
							onEditable={this.handleEditable}
							outputDisplay={this.formatOutput(shift, "")}
							onDelete={this.handleDelete}
						/>
					);
				})}
			</div>
		);
	}

	formatOutput = (shift, hasSeparator = true) => {
		let separator = hasSeparator ? " " : "-";

		const { pharmacist, startTime, endTime } = shift;
		const { firstname, lastname } = pharmacist;

		return `${firstname} ${lastname} ${this.formatTime(
			startTime.hour,
			startTime.minute,
			hasSeparator
		) +
			separator +
			this.formatTime(endTime.hour, endTime.minute, hasSeparator)}
		`;
	};

	formatTime = (hr, min, hasSeparator = true) => {
		let separator = hasSeparator ? "" : ":";
		return (
			(hr < 10 ? "0" + hr : hr) + separator + (min < 10 ? "0" + min : min)
		);
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
		try {
			const hour = parseInt(timeStr.slice(0, 2));
			const minute = parseInt(timeStr.slice(2));
			if (hour > 23 || isNaN(hour) || minute > 59 || isNaN(minute)) {
				throw new Error("Invalid time.");
			}
			timeObj.hour = hour;
			timeObj.minute = minute;
		} catch (ex) {
			console.log(ex.message);
		}
	}

	setShift(shifts, index, inputComponents) {
		shifts[index].pharmacist.firstname = this.capitalise(
			inputComponents[0]
		);
		shifts[index].pharmacist.lastname = inputComponents[1].toUpperCase();
		this.setTime(shifts[index].startTime, inputComponents[2]);
		this.setTime(shifts[index].endTime, inputComponents[3]);
		shifts[index].inputValue = this.formatOutput(shifts[index], true);
	}
}

export default Shifts;
