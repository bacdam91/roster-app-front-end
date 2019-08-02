import React, { Component } from "react";
import NameInput from "./nameInput";
import StartTimeInput from "./startTimeInput";
import EndTimeInput from "./endTimeInput";

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
		const { value } = event.target;
		const pharmacist = { ...this.state.pharmacist };
		const nameComponents = this.splitFullname(value);
		this.assignFirstname(pharmacist, nameComponents);
		this.assignLastname(pharmacist, nameComponents);
		this.setState({ pharmacist });
	};

	handleStartTimeChange = event => {
		const { value } = event.target;
		const pharmacist = { ...this.state.pharmacist };
		const startTime = new Date(pharmacist.startTime);
		const date = startTime.getUTCDate();
		const year = startTime.getUTCFullYear();
		const month = startTime.getUTCMonth();
		const hour = startTime.getUTCHours();
		const minute = startTime.getUTCMinutes();

		const newStartTime = new Date(
			Date.UTC(year, month, date, hour, minute, 0, 0)
		);

		console.log(newStartTime.toUTCString());
		// pharmacist.startTime = value;
		// console.log(pharmacist);
		// this.setState({ pharmacist });
	};

	handleEndTimeChange = event => {
		console.log("Changing end time...");
	};

	assignLastname(pharmacist, nameComponents) {
		pharmacist.lastname =
			nameComponents[1] !== undefined
				? nameComponents[1].toUpperCase()
				: "";
	}

	assignFirstname(pharmacist, nameComponents) {
		pharmacist.firstname =
			nameComponents[0].slice(0, 1).toUpperCase() +
			nameComponents[0].slice(1);
	}

	splitFullname(value) {
		return value.split(" ").length > 1 && value.slice(-1) !== " "
			? value.split(" ")
			: [value];
	}

	render() {
		const { startTime, endTime } = this.state.pharmacist;
		const { isEditable } = this.state;

		return (
			<div onDoubleClick={this.handleEdit} style={{ cursor: "pointer" }}>
				<NameInput
					fullnameOfficial={this.formatFullNameOfficial()}
					fullname={this.formatFullName()}
					onNameChange={this.handleNameChange}
					isEditable={isEditable}
				/>

				<StartTimeInput
					isEditable={isEditable}
					onStartTimeChange={this.handleStartTimeChange}
					startTime={this.formatTime(startTime)}
				/>

				<EndTimeInput
					isEditable={isEditable}
					onEndTimeChange={this.handleEndTimeChange}
					endTime={this.formatTime(endTime)}
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
