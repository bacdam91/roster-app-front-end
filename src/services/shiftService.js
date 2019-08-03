const shifts = [
	{
		_id: "5d3be64b961cbf34e8896727",
		isEditable: false,
		inputValue: "",
		pharmacist: {
			_id: "5d3be32f1d9e113220cc7d62",
			firstname: "Bac",
			lastname: "DAM"
		},
		startTime: {
			utc: "2019-07-27T09:30:00.000+00:00",
			year: 2019,
			month: 7,
			date: 27,
			hour: 9,
			minute: 30
		},
		endTime: {
			utc: "2019-07-27T19:00:00.000+00:00",
			year: 2019,
			month: 7,
			date: 27,
			hour: 19,
			minute: 0
		}
	},
	{
		_id: "5d3be64b961cbf34e8896728",
		isEditable: false,
		inputValue: "",
		pharmacist: {
			_id: "5d3a72146a921205d4be755b",
			firstname: "Megan",
			lastname: "KONG"
		},
		startTime: {
			utc: "2019-07-27T09:00:00.000+00:00",
			year: 2019,
			month: 7,
			date: 27,
			hour: 9,
			minute: 0
		},
		endTime: {
			utc: "2019-07-27T17:00:00.000+00:00",
			year: 2019,
			month: 7,
			date: 27,
			hour: 17,
			minute: 0
		}
	},
	{
		_id: "5d3be64b961cbf34e8896729",
		isEditable: false,
		inputValue: "",
		pharmacist: {
			_id: "5d3a725d3ac728078c9dec89",
			firstname: "Tingna",
			lastname: "TANG"
		},
		startTime: {
			utc: "2019-07-27T10:00:00.000+00:00",
			year: 2019,
			month: 7,
			date: 27,
			hour: 10,
			minute: 0
		},
		endTime: {
			utc: "2019-07-27T21:00:00.000+00:00",
			year: 2019,
			month: 7,
			date: 27,
			hour: 21,
			minute: 0
		}
	}
];

export function getShifts() {
	return shifts;
}

export function deleteShift(shift) {
	return shifts.filter(s => s !== shift);
}
