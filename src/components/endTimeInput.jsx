import React from "react";

const EndTimeInput = props => {
	return (
		<React.Fragment>
			<span hidden={props.isEditable ? "hidden" : ""}>
				{props.endTime}
			</span>
			<input
				onChange={props.onEndTimeChange}
				name="endTime"
				type="text"
				value={props.endTime}
				hidden={props.isEditable ? "" : "hidden"}
			/>
		</React.Fragment>
	);
};

export default EndTimeInput;
