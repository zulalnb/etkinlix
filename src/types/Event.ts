export interface Event {
	id: number;
	title: string;
	description: string;
	location: string;
	image: string;
	date: string;
	type: EventType;
	isAddedToCalendar: boolean;
}

export type EventType = "Tiyatro" | "Stand-up" | "Sinema" | "Konser" | "Çocuk";

export type Events = Event[];
