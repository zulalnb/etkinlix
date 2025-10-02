"use client";

import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { Event, Type } from "@/types/Event";
import events from "@/data/events.json";
import locations from "@/data/locations.json";
import { Location } from "@/types/Location";

// Define the possible actions
type Action =
	| { type: "TOGGLE_CALENDAR"; id: number }
	| { type: "FILTER_ALL" }
	| { type: "FILTER_BY_TYPE"; eventType: Type }
	| { type: "FILTER_BY_TITLE"; title: string }
	| { type: "SET_ACTIVE_FILTER"; filter: string }
	| { type: "TOGGLE_LOCATION"; id: number };

// Define the initial state type
interface State {
	events: Event[];
	locations: Location[];
	selectedLocations: Location[] | [];
	filteredEvents: Event[];
	activeType: string | null;
}

// Initial state
const initialState: State = {
	events: events as Event[],
	locations: locations as Location[],
	selectedLocations: [],
	filteredEvents: events as Event[],
	activeType: "all",
};

// Create the context
const EventContext = createContext<{
	state: State;
	dispatch: React.Dispatch<Action>;
}>({
	state: initialState,
	dispatch: () => null,
});

// Reducer function to handle actions
const eventReducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "TOGGLE_CALENDAR":
			return {
				...state,
				events: state.events.map((event) =>
					event.id === action.id ? { ...event, in_calendar: !event.in_calendar } : event,
				),
				filteredEvents: state.filteredEvents.map((event) =>
					event.id === action.id ? { ...event, in_calendar: !event.in_calendar } : event,
				),
			};
		case "FILTER_ALL":
			return { ...state, filteredEvents: state.events, activeType: "all" };
		case "FILTER_BY_TYPE":
			return {
				...state,
				filteredEvents: state.events.filter((event) => event.type === action.eventType),
				activeType: action.eventType,
			};
		case "FILTER_BY_TITLE": {
			return {
				...state,
				filteredEvents: state.events.filter((event) =>
					event.title.toLowerCase().includes(action.title.toLowerCase()),
				),
				activeType: null,
			};
		}
		case "SET_ACTIVE_FILTER":
			return {
				...state,
				activeType: action.filter,
			};
		case "TOGGLE_LOCATION": {
			const exists = state.selectedLocations.some((loc) => loc.id === action.id);

			const updatedSelected = exists
				? state.selectedLocations.filter((loc) => loc.id !== action.id)
				: [...state.selectedLocations, state.locations.find((loc) => loc.id === action.id)!];

			return {
				...state,
				selectedLocations: updatedSelected,
				filteredEvents:
					updatedSelected.length > 0
						? state.events.filter((event) =>
								updatedSelected.some(
									(selected) => selected.name.toLowerCase() === event.location.toLowerCase(),
								),
							)
						: state.events,
				activeType: updatedSelected.length > 0 ? null : "all",
			};
		}
		default:
			return state;
	}
};

// Provider component
export const EventProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	// FIXED: Just use initialState directly, don't override
	const [state, dispatch] = useReducer(eventReducer, initialState);

	return <EventContext.Provider value={{ state, dispatch }}>{children}</EventContext.Provider>;
};

// Custom hook to use the Events context
export const useEvent = () => useContext(EventContext);
