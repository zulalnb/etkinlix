import dayjs from "dayjs";
import "dayjs/locale/tr";

dayjs.locale("tr");

export const clipText = (str: string, limit = 145) => {
	if (str.length <= limit) return str;

	return str
		.split(" ")
		.reduce((acc, word) => ((acc + " " + word).trim().length > limit ? acc : (acc + " " + word).trim()), "");
};

export const formatEventDate = (date: string, isWide: boolean) =>
	dayjs(date).format(`D MMMM ${!isWide ? "ddd" : "dddd"} HH:mm`);
