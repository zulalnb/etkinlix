"use client";

import { type FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { EventType } from "./EventType";
import { Button } from "./Button";
import { AddToCalendarButton } from "./AddToCalendarButton";
import { Icon } from "./Icon";
import { useEvent } from "@/context/EventProvider";
import { useMobileView } from "@/hooks/useMobileMenu";
import { clipText } from "@/lib/utils";
import { Event } from "@/types/Event";
import moment from "@/lib/moment-config";

export const EventCard: FC<Event> = ({
	id,
	date,
	title,
	description,
	location,
	type,
	image,
	in_calendar,
}) => {
	const isMobile = useMobileView();
	const { dispatch } = useEvent();

	// Add event to calendar
	const toggleCalendar = (id: number) => {
		dispatch({ type: "TOGGLE_CALENDAR", id });
	};

	return (
		<div className="border-light-gray mx-auto mb-4 h-112 w-full border md:h-51 md:w-9/10 xl:w-83/100">
			<div className="h-full w-full md:flex">
				<div className="relative h-56.75 w-full md:h-full md:w-1/2 md:shrink-0 lg:w-11/20 lg:shrink">
					<div className="absolute top-0 z-10 h-52 w-full bg-black md:left-0 md:h-full md:w-1/2 lg:w-12/25">
						<div className="mt-2 flex justify-center space-x-1 md:mt-auto md:h-full md:w-2/5 md:flex-col md:space-x-0 lg:w-1/2">
							{moment(date)
								.format(`D MMMM ${isMobile ? "ddd" : "dddd"} HH:mm`)
								.split(" ")
								.map((d) => (
									<span key={d} className="font-acme md:text-pink text-center text-white md:inline-block">
										{d}
									</span>
								))}
						</div>
					</div>
					<div className="absolute bottom-0 z-20 h-43.25 w-full md:right-0 md:bottom-auto md:h-full md:w-4/5 lg:w-3/4">
						<div className="relative aspect-square h-full w-full px-4 md:px-0 md:py-4">
							<div className="relative h-full w-full overflow-hidden">
								<Image src={image} alt={title} fill className="absolute inset-0 object-cover object-center" />
							</div>
							<EventType type={type} className="absolute -top-10 -left-6 z-30 sm:-left-3 md:top-8" />
						</div>
					</div>
				</div>
				<div className="mt-8 mb-2.5 flex flex-col justify-center overflow-auto px-8 md:mt-auto md:mr-0.5 md:mb-auto md:ml-1 md:w-1/2 md:px-1 md:py-2 lg:mr-10 lg:ml-6 lg:px-4">
					<p className="font-acme hover:text-orange mb-2.5 cursor-pointer text-lg transition-colors">
						{title}
					</p>
					<div className="mb-2.5 flex items-center space-x-1">
						<Icon name="location" size={14} className="text-medium-gray" />
						<span className="text-medium-gray text-sm">{location}</span>
					</div>
					<p>
						{clipText(description, isMobile ? 20 : 145)}
						{"... "}
						<Link href="#" className="font-acme font-bold underline">
							Detaylı Bilgi
						</Link>
					</p>
				</div>
				<div className="flex justify-center gap-4 px-4 md:flex-col md:gap-2.5 md:px-2 lg:px-4">
					<Button>Bilet Al</Button>
					<AddToCalendarButton onClick={() => toggleCalendar(id)} isAdded={in_calendar} />
				</div>
			</div>
		</div>
	);
};
