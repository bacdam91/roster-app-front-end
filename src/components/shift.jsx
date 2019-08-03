import React, { Component } from "react";

class Shift extends Component {
	state = {
		inputValue: ""
	};

	componentDidMount() {
		const inputValue = this.formatOutput(this.props.shift, "space");
		this.setState({ inputValue });
	}

	formatOutput = (shift, style = "") => {
		let separator = "-";
		if (style === "space") {
			separator = " ";
		}

		const { firstname, lastname, startTime, endTime } = shift;
		return `${firstname} ${lastname} ${this.formatTime(
			startTime.hour,
			startTime.minute,
			style
		) +
			separator +
			this.formatTime(endTime.hour, endTime.minute, style)}
		`;
	};

	formatTime = (hr, min, style = "") => {
		let separator = ":";
		if (style === "space") {
			separator = "";
		}
		return (
			(hr < 10 ? "0" + hr : hr) + separator + (min < 10 ? "0" + min : min)
		);
	};

	handleInputChange = event => {
		const inputValue = event.target.value.trim();
		this.setState({ inputValue });
	};

	render() {
		const { inputValue } = this.state;
		const { shift } = this.props;

		return (
			<div style={{ cursor: "pointer" }}>
				<span>{this.formatOutput(shift)}</span>
				<input
					type="text"
					defaultValue={inputValue}
					onChange={this.handleInputChange}
				/>
				<button
					onClick={() => this.props.onSaveBtnClick(shift, inputValue)}
					className="btn btn-primary btn-sm"
				>
					Save
				</button>
				<button className="btn btn-warning btn-sm">Cancel</button>
				<button className="btn btn-danger btn-sm">Remove</button>
			</div>
		);
	}
}

export default Shift;
