import dayjs from "dayjs";
import "dayjs/locale/tr";

dayjs.locale("tr");

export const truncateText = (str: string, limit = 145) => {
	if (str.length <= limit) return str;

	return str
		.split(" ")
		.reduce((acc, word) => ((acc + " " + word).trim().length > limit ? acc : (acc + " " + word).trim()), "");
};

export const formatEventDate = (date: string) => dayjs(date).format(`D MMMM ddd HH:mm`);
