import React from "react";

const NameInput = props => {
	return (
		<React.Fragment>
			<span hidden={props.isEditable ? "hidden" : ""}>
				{props.fullnameOfficial}
			</span>
			<input
				onChange={props.onNameChange}
				name="fullname"
				type="text"
				value={props.fullname}
				hidden={props.isEditable ? "" : "hidden"}
			/>
		</React.Fragment>
	);
};

export default NameInput;
