import React from "react";

const Shift = props => {
	const {
		shift,
		onEditable,
		outputDisplay,
		onInputChange,
		onSaveBtnClick,
		onDelete
	} = props;
	const { isEditable, inputValue } = shift;

	return (
		<div
			style={{ cursor: "pointer" }}
			onDoubleClick={() => {
				onEditable(shift);
			}}
		>
			<span hidden={isEditable ? "hidden" : ""}>{outputDisplay}</span>

			<input
				type="text"
				defaultValue={inputValue}
				onChange={event => {
					onInputChange(event, shift);
				}}
				hidden={isEditable ? "" : "hidden"}
			/>
			<button
				onClick={() => onSaveBtnClick(shift, inputValue)}
				className="btn btn-primary btn-sm"
				hidden={isEditable ? "" : "hidden"}
			>
				Save
			</button>
			<button
				className="btn btn-warning btn-sm"
				hidden={isEditable ? "" : "hidden"}
				onClick={() => {
					onEditable(shift);
				}}
			>
				Cancel
			</button>
			<button
				className="btn btn-danger btn-sm"
				hidden={isEditable ? "" : "hidden"}
				onClick={() => {
					onDelete(shift);
				}}
			>
				Remove
			</button>
		</div>
	);
};

export default Shift;
