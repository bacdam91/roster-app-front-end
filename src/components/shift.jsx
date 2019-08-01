import React, { Component } from "react";

class Shift extends Component {
	state = {
		pharmacist: {
			_id: "5d3be64b961cbf34e8896727",
			firstname: "Bac",
			lastname: "DAM",
			startTime: "2019-07-27T09:30:00.000+00:00",
			endTime: "2019-07-27T19:00:00.000+00:00"
		},
		isEditable: false
	};

	handleEdit = () => {
		const isEditable = !this.state.isEditable;
		this.setState({ isEditable });
	};

	handleNameChange = event => {
		const pharmacist = { ...this.state.pharmacist };
		const nameArray =
			event.target.value.split(" ").length > 1 &&
			event.target.value.slice(-1) !== " "
				? event.target.value.split(" ")
				: [event.target.value];
		// console.log(nameArray);
		pharmacist.firstname =
			nameArray[0].slice(0, 1).toUpperCase() + nameArray[0].slice(1);
		pharmacist.lastname =
			nameArray[1] !== undefined ? nameArray[1].toUpperCase() : "";

		// console.log(pharmacist);
		this.setState({ pharmacist });
	};

	handleStartTimeChange = event => {
		console.log("Changing start time...");
	};

	handleEndTimeChange = event => {
		console.log("Changing end time...");
	};

	render() {
		const { startTime, endTime } = this.state.pharmacist;
		const { isEditable } = this.state;

		return (
			<div onDoubleClick={this.handleEdit} style={{ cursor: "pointer" }}>
				<span hidden={isEditable ? "hidden" : ""}>
					{this.formatFullNameOfficial()}
				</span>
				<input
					onChange={this.handleNameChange}
					name="fullname"
					type="text"
					value={this.formatFullName()}
					hidden={isEditable ? "" : "hidden"}
				/>
				<span hidden={isEditable ? "hidden" : ""}>
					{this.formatTime(startTime)}
				</span>
				<input
					onChange={this.handleStartTimeChange}
					name="startTime"
					type="text"
					value={this.formatTime(startTime)}
					hidden={isEditable ? "" : "hidden"}
				/>
				<span hidden={isEditable ? "hidden" : ""}>
					{this.formatTime(endTime)}
				</span>
				<input
					onChange={this.handleEndTimeChange}
					name="endTime"
					type="text"
					value={this.formatTime(endTime)}
					hidden={isEditable ? "" : "hidden"}
				/>
				<button
					hidden={isEditable ? "" : "hidden"}
					onClick={this.handleEdit}
				>
					Done
				</button>
				<button hidden={isEditable ? "" : "hidden"}>Remove</button>
			</div>
		);
	}

	formatFullName() {
		const { firstname, lastname } = this.state.pharmacist;
		let fullname = firstname;
		fullname += lastname !== "" ? ` ${lastname}` : "";
		return fullname;
	}

	formatFullNameOfficial() {
		const { firstname, lastname } = this.state.pharmacist;
		return `${lastname}, ${firstname}`;
	}

	formatTime(dateTime) {
		return new Date(dateTime).toUTCString().slice(-12, -7);
	}
}

export default Shift;
