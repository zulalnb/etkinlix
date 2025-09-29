import dayjs from "dayjs";
import "dayjs/locale/tr";

dayjs.locale("tr");

export type FormattedDateParts = {
	day: string;
	month: string;
	weekday: string;
	time: string;
};

export const truncateText = (str: string, limit = 145) => {
	if (str.length <= limit) return str;

	return str
		.split(" ")
		.reduce((acc, word) => ((acc + " " + word).trim().length > limit ? acc : (acc + " " + word).trim()), "");
};

export function getEventDateParts(date: string): FormattedDateParts {
	const dateObj = dayjs(date);

	return {
		day: dateObj.format("D"),
		month: dateObj.format("MMMM"),
		weekday: dateObj.format("ddd"),
		time: dateObj.format("HH:mm"),
	};
}
