export function convertDateFormat(datetimeString: string) {
	const dateParts = datetimeString.split(" ")[0].split("/");
	const day = dateParts[1];
	const month = dateParts[0];
	const year = dateParts[2];

	// Format the date as "DD/MM/YYYY"
	const formattedDate = `${day}/${month}/${year}`;

	return formattedDate;
}

const datetimeString = "10/21/2023 12:00:00 AM";
console.log(convertDateFormat(datetimeString)); // Output: "21/10/2023"
