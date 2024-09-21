"use client";

import { type FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { EventType } from "./EventType";
import { Button } from "./Button";
import { AddToCalendarButton } from "./AddToCalendarButton";
import { Icon } from "./Icon";
import { clipText } from "@/lib/utils";
import { Event } from "@/types/Event";

export const EventCard: FC<Event> = ({
	date,
	title,
	description,
	location,
	type,
	image,
	isAddedToCalendar,
}) => {
	return (
		<div className="mb-4 h-[28rem] w-full border border-light-gray md:h-52">
			<div className="h-full w-full md:flex">
				<div className="relative h-60 w-full md:h-full md:w-1/3">
					<div className="absolute top-0 z-10 h-52 w-full bg-black md:left-0 md:h-full md:w-1/3">
						<div className="mt-2 flex justify-center space-x-1 md:ml-2 md:mt-auto md:h-full md:w-1/2 md:flex-col md:space-x-0">
							{date.split(" ").map((d) => (
								<span key={d} className="text-center font-acme text-white md:inline-block md:text-pink">
									{d}
								</span>
							))}
						</div>
					</div>
					<div className="absolute bottom-0 z-20 h-48 w-full md:bottom-auto md:right-0 md:h-full md:w-3/4">
						<div className="relative flex h-full w-full items-center justify-center">
							<div className="relative aspect-square h-full w-4/5 overflow-hidden md:h-3/4 md:w-full">
								<Image src={image} alt={title} fill className="absolute inset-0 object-cover object-center" />
							</div>
							<EventType type={type} className="absolute -left-6 -top-10 z-30 sm:-left-3 md:top-10" />
						</div>
					</div>
				</div>
				<div className="mb-2.5 mt-8 flex flex-col justify-center overflow-auto px-8 md:mb-auto md:ml-6 md:mr-10 md:mt-auto md:w-1/2 md:px-4 md:py-2">
					<p className="mb-2.5 cursor-pointer font-acme text-lg transition-colors hover:text-orange">
						{title}
					</p>
					<div className="mb-2.5 flex items-center space-x-1">
						<Icon name="location" size={14} className="text-medium-gray" />
						<span className="text-sm text-medium-gray">{location}</span>
					</div>
					<p>
						{clipText(description)}
						{"... "}
						<Link href="#" className="font-acme font-bold underline">
							Detaylı Bilgi
						</Link>
					</p>
				</div>
				<div className="flex justify-center gap-4 px-4 md:flex-col md:gap-2.5">
					<Button>Bilet Al</Button>
					<AddToCalendarButton isAdded={isAddedToCalendar} />
				</div>
			</div>
		</div>
	);
};
