import { Event } from "@/types/Event";
import eventsData from "@/data/events.json";
import { EventList } from "@/components/EventList";

const events: Event[] = eventsData as Event[];

export default function Page() {
	return (
		<main className="container mx-auto mb-5 mt-4 px-4 md:mt-16">
			<EventList events={events} />
		</main>
	);
}
