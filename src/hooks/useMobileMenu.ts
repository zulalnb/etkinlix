import { useEffect, useState } from "react";

export const useMobileView = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Function to check window width
		const handleResize = () => {
			setIsMobile(window.innerWidth < 1025);
		};

		// Set initial state
		handleResize();

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return isMobile;
};
