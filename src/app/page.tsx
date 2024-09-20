import eventsData from "@/data/events.json";
import { Event } from "@/types/Event";
import { EventCard } from "@/components/EventCard";

const events: Event[] = eventsData as Event[];

export default function Page() {
	return (
		<main className="container mx-auto mb-5 mt-4 px-4 md:mt-16">
			<div className="space-y-4">
				{events.map((event: Event) => (
					<EventCard
						key={event.id}
						title={event.title}
						type={event.type}
						date={event.date}
						location={event.location}
						image={event.image}
						isAddedToCalendar={event.isAddedToCalendar}
					/>
				))}
			</div>
		</main>
	);
}
