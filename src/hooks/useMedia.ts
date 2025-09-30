// Source: https://github.com/streamich/react-use (MIT License)
// Adapted for local use with hydration fix

import { useEffect, useState } from "react";

const isBrowser = typeof window !== "undefined";

const getInitialState = (query: string, defaultState?: boolean) => {
	// Prevent a React hydration mismatch when a default value is provided
	if (defaultState !== undefined) {
		return defaultState;
	}

	if (isBrowser) {
		return window.matchMedia(query).matches;
	}

	// A default value has not been provided, and you are rendering on the server
	if (process.env.NODE_ENV !== "production") {
		console.warn(
			"`useMedia` When server side rendering, defaultState should be defined to prevent a hydration mismatches.",
		);
	}

	return false;
};

const useMedia = (query: string, defaultState?: boolean) => {
	const [state, setState] = useState(getInitialState(query, defaultState));
	// Add mounted state to prevent hydration issues
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		let isMounted = true;
		const mql = window.matchMedia(query);

		const onChange = () => {
			if (!isMounted) {
				return;
			}
			setState(!!mql.matches);
		};

		mql.addEventListener("change", onChange);
		setState(mql.matches);

		return () => {
			isMounted = false;
			mql.removeEventListener("change", onChange);
		};
	}, [query]);

	// Return defaultState until mounted to match server render
	return mounted ? state : (defaultState ?? false);
};

export default useMedia;
