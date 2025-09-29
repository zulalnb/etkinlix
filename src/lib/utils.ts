import moment from "./moment-config";

export const clipText = (str: string, limit = 145) => {
	if (str.length <= limit) return str;

	return str
		.split(" ")
		.reduce((acc, word) => ((acc + " " + word).trim().length > limit ? acc : (acc + " " + word).trim()), "");
};

export const formatEventDate = (date: string, isWide: boolean) =>
	moment(date).format(`D MMMM ${!isWide ? "ddd" : "dddd"} HH:mm`);
