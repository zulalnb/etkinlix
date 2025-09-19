export const clipText = (str: string, limit = 145) => {
	if (str.length <= limit) return str;

	return str.split(" ").reduce((acc, word) => {
		if ((acc + " " + word).trim().length > limit) return acc;
		return (acc + " " + word).trim();
	}, "");
};
