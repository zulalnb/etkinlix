export const clipText = (str: string, limit = 145) => {
	if (str.length <= limit) return str;

	return str
		.split(" ")
		.reduce((acc, word) => ((acc + " " + word).trim().length > limit ? acc : (acc + " " + word).trim()), "");
};
