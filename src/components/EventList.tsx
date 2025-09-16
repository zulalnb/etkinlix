"use client";

import { type FC } from "react";
import { Event } from "@/types/Event";
import { EventCard } from "./EventCard";
import { useEvent } from "@/context/EventProvider";

export const EventList: FC = () => {
	const { state } = useEvent();

	return (
		<div className="space-y-4">
			{state.filteredEvents.length < 1 && (
				<div className="flex items-center justify-center">
					<p className="py-5 text-center text-3xl font-medium">Aradığınız Etkinlik Bulunamadı...</p>
				</div>
			)}
			{state.filteredEvents &&
				state.filteredEvents.map((event: Event) => (
					<EventCard
						key={event.id}
						id={event.id}
						title={event.title}
						description={event.description}
						type={event.type}
						date={event.date}
						location={event.location}
						image={event.image}
						isAddedToCalendar={event.isAddedToCalendar}
					/>
				))}
		</div>
	);
};
