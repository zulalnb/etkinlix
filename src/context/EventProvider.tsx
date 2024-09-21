"use client";
import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { Event } from "@/types/Event";
import events from "@/data/events.json";

type Action = { type: "ADD_TO_CALENDAR"; id: number } | { type: "FILTER_ALL" };

// Define the initial state type
interface State {
	events: Event[];
	filteredEvents: Event[];
}

// Initial state
const initialState: State = {
	events: events as Event[],
	filteredEvents: [],
};

// Create the context
const EventsContext = createContext<{
	state: State;
	dispatch: React.Dispatch<Action>;
}>({
	state: initialState,
	dispatch: () => null,
});

// Reducer function to handle actions
const eventReducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "ADD_TO_CALENDAR":
			return {
				...state,
				events: state.events.map((event) =>
					event.id === action.id ? { ...event, isAddedToCalendar: true } : event,
				),
				filteredEvents: state.filteredEvents.map((event) =>
					event.id === action.id ? { ...event, isAddedToCalendar: true } : event,
				),
			};

		case "FILTER_ALL":
			return { ...state, filteredEvents: state.events };

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

	return <EventsContext.Provider value={{ state, dispatch }}>{children}</EventsContext.Provider>;
};

// Custom hook to use the Events context
export const useEvent = () => useContext(EventsContext);
