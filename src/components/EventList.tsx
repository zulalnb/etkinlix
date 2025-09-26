"use client";

import { type FC } from "react";
import { Event } from "@/types/Event";
import { EventCard } from "./EventCard";
import { useEvent } from "@/context/EventProvider";

export const EventList: FC = () => {
	const { state } = useEvent();

	return (
		<div className="space-y-4">
			<h2 className="sr-only" id="events-heading">
				Etkinlikler
			</h2>
			{state.filteredEvents.length < 1 && (
				<div className="flex items-center justify-center">
					<p aria-live="polite" className="py-5 text-center text-3xl font-medium">
						Aradığınız Etkinlik Bulunamadı...
					</p>
				</div>
			)}
			{state.filteredEvents && (
				<ul aria-labelledby="events-heading" className="mx-auto w-full md:w-9/10 xl:w-83/100">
					{state.filteredEvents.map((event: Event) => (
						<li key={event.id} className="mb-4 w-full">
							<EventCard
								id={event.id}
								title={event.title}
								description={event.description}
								type={event.type}
								date={event.date}
								location={event.location}
								image={event.image}
								in_calendar={event.in_calendar}
							/>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
