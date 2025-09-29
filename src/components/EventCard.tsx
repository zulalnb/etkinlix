"use client";

import { type FC } from "react";
import Link from "next/link";
import { Event } from "@/types/Event";
import { useEvent } from "@/context/EventProvider";
import { getEventDateParts, truncateText } from "@/lib/utils";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { AddToCalendarButton } from "./AddToCalendarButton";
import { EventType } from "./EventType";
import { EventImageWrapper } from "./EventImageWrapper";

type EventCardProps = Event & {
	isFirst?: boolean;
};

export const EventCard: FC<EventCardProps> = ({
	id,
	date,
	title,
	description,
	location,
	type,
	image,
	in_calendar,
	isFirst,
}) => {
	const { dispatch } = useEvent();

	const parts = getEventDateParts(date);

	// Add event to calendar
	const toggleCalendar = (id: number) => {
		dispatch({ type: "TOGGLE_CALENDAR", id });
	};

	return (
		<div className="border-light-gray flex h-112 w-full flex-col border pr-0 md:h-51 md:flex-row md:pr-4">
			<div className="relative h-56.75 w-full md:h-full md:w-1/2 md:shrink-0 lg:w-46/100 lg:shrink">
				<div className="absolute -top-px -right-px -left-px z-10 flex h-52 items-start justify-center bg-black md:right-auto md:-bottom-px md:h-auto md:w-1/2 md:items-center md:justify-start lg:w-12/25">
					<div className="mt-2.75 flex items-baseline space-x-0.75 md:mt-0 md:w-2/5 md:flex-col md:items-center md:space-x-0 lg:w-1/2">
						<span className="font-acme md:text-pink text-center text-2xl/snug text-white md:inline-block md:text-base/normal">
							{parts.day}
						</span>
						<span className="font-acme md:text-pink text-center leading-normal text-white md:inline-block">
							{parts.month}
						</span>
						<span className="font-galano md:font-acme md:text-pink text-light-gray text-center leading-normal md:inline-block">
							{parts.weekday}
						</span>
						<span className="font-galano md:font-acme md:text-pink text-medium-gray text-center md:inline-block md:leading-normal">
							{parts.time}
						</span>
					</div>
				</div>
				<div className="absolute bottom-0 z-20 h-43.25 w-full md:right-0 md:bottom-auto md:h-full md:w-4/5 lg:w-3/4">
					<div className="relative h-full w-full px-4 md:px-0 md:py-4">
						<EventImageWrapper
							src={image}
							alt={title}
							fill
							loading={isFirst ? "eager" : "lazy"}
							priority={isFirst}
							fetchPriority={isFirst ? "high" : "auto"}
						/>
						<EventType
							type={type}
							className="xs:-left-1/16 absolute -top-10 -left-4.5 z-30 sm:-left-3 md:top-8"
						/>
					</div>
				</div>
			</div>
			<div className="mt-8 flex flex-col justify-center px-6 md:mt-0 md:ml-4 md:w-1/2 md:px-0">
				<h3 className="font-acme hover:text-orange xs:mb-2.5 mb-1 cursor-pointer text-lg transition-colors">
					{title}
				</h3>
				<div className="xs:mb-2.5 mb-1 flex items-center space-x-1">
					<Icon name="location" size={14} className="text-medium-gray" />
					<span className="text-medium-gray text-sm">{location}</span>
				</div>
				<p>
					{truncateText(description, 20)}
					{"... "}
					<Link href="#" className="font-acme font-bold underline">
						Detaylı Bilgi
					</Link>
				</p>
			</div>
			<div className="xs:gap-4 xs:px-4 mt-auto mb-4 flex items-center justify-center gap-1 px-0.5 md:mt-0 md:mb-0 md:ml-4 md:flex-col md:items-start md:gap-2.5 md:px-0">
				<Button>Bilet Al</Button>
				<AddToCalendarButton onClick={() => toggleCalendar(id)} isAdded={in_calendar} />
			</div>
		</div>
	);
};
