"use client";
import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { Event, Type } from "@/types/Event";
import events from "@/data/events.json";

// Define the possible actions
type Action =
	| { type: "TOGGLE_CALENDAR"; id: number }
	| { type: "FILTER_ALL" }
	| { type: "FILTER_BY_TYPE"; eventType: Type }
	| { type: "SET_ACTIVE_FILTER"; filter: string };

// Define the initial state type
interface State {
	events: Event[];
	filteredEvents: Event[];
	activeFilter: string;
}

// Initial state
const initialState: State = {
	events: events as Event[],
	filteredEvents: [],
	activeFilter: "all",
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
					event.id === action.id ? { ...event, isAddedToCalendar: !event.isAddedToCalendar } : event,
				),
				filteredEvents: state.filteredEvents.map((event) =>
					event.id === action.id ? { ...event, isAddedToCalendar: !event.isAddedToCalendar } : event,
				),
			};

		case "FILTER_ALL":
			return { ...state, filteredEvents: state.events, activeFilter: "all" };

		case "FILTER_BY_TYPE":
			return {
				...state,
				filteredEvents: state.events.filter((event) => event.type === action.eventType),
				activeFilter: action.eventType,
			};
		case "SET_ACTIVE_FILTER":
			return {
				...state,
				activeFilter: action.filter,
			};
		default:
			return state;
	}
};

// Provider component
export const EventProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [state, dispatch] = useReducer(eventReducer, {
		...initialState,
		filteredEvents: initialState.events, // Initially show all events
	});

	return <EventContext.Provider value={{ state, dispatch }}>{children}</EventContext.Provider>;
};

// Custom hook to use the Events context
export const useEvent = () => useContext(EventContext);
