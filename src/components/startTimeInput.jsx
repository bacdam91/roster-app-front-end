import React from "react";

const StartTimeInput = props => {
	return (
		<React.Fragment>
			<span hidden={props.isEditable ? "hidden" : ""}>
				{props.startTime}
			</span>
			<input
				onChange={props.onStartTimeChange}
				name="startTime"
				type="text"
				value={props.startTime}
				hidden={props.isEditable ? "" : "hidden"}
			/>
		</React.Fragment>
	);
};

export default StartTimeInput;
