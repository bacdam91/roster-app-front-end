const shifts = [
	{
		_id: "5d3be64b961cbf34e8896727",
		firstname: "Bac",
		lastname: "DAM",
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
		firstname: "Bac",
		lastname: "DAM",
		startTime: {
			utc: "2019-08-03T10:00:00.000+00:00",
			year: 2019,
			month: 8,
			date: 3,
			hour: 10,
			minute: 0
		},
		endTime: {
			utc: "2019-08-03T17:00:00.000+00:00",
			year: 2019,
			month: 8,
			date: 3,
			hour: 17,
			minute: 0
		}
	},
	{
		_id: "5d3be64b961cbf34e8896729",
		firstname: "Bac",
		lastname: "DAM",
		startTime: {
			utc: "2019-09-03T06:00:00.000+00:00",
			year: 2019,
			month: 9,
			date: 3,
			hour: 6,
			minute: 0
		},
		endTime: {
			utc: "2019-09-03T12:45:00.000+00:00",
			year: 2019,
			month: 9,
			date: 3,
			hour: 12,
			minute: 45
		}
	}
];

export function getShifts() {
	return shifts;
}
