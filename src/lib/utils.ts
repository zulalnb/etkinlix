import dayjs from "dayjs";
import "dayjs/locale/tr";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("tr");
dayjs.tz.setDefault("Europe/Istanbul");

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

export function getEventDateParts(date: string, isWide: boolean = false): FormattedDateParts {
	const dateObj = dayjs(date);

	return {
		day: dateObj.format("D"),
		month: dateObj.format("MMMM"),
		weekday: dateObj.format(isWide ? "dddd" : "ddd"),
		time: dateObj.format("HH:mm"),
	};
}
