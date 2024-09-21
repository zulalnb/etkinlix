"use client";

import { Event, Events } from "@/types/Event";
import { type FC } from "react";
import { EventCard } from "./EventCard";

interface EventListProps {
	events: Events;
}

export const EventList: FC<EventListProps> = ({ events }) => {
	return (
		<div className="space-y-4">
			{events.map((event: Event) => (
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
