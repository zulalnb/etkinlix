export const clipText = (string: string, wordCount = 24) => {
	const words = string.split(" ");
	if (words.length > wordCount) {
		return words.slice(0, wordCount - 1).join(" ");
	} else {
		return string;
	}
};
