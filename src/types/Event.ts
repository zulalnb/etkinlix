export interface Event {
	id: number;
	title: string;
	description: string;
	location: string;
	image: string;
	date: string;
	type: Type;
	in_calendar: boolean;
}

export type Type = "Tiyatro" | "Stand-up" | "Sinema" | "Konser" | "Çocuk";

export type Events = Event[];
