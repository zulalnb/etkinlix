export interface Event {
	id: number;
	title: string;
	description: string;
	location: string;
	image: string;
	date: string;
	type: Type;
	isAddedToCalendar: boolean;
}

export type Type = "Tiyatro" | "Stand-up" | "Sinema" | "Konser" | "Çocuk";
