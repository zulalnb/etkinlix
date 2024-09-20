import React from "react";
import clsx from "clsx";
import { Type } from "@/types/Event";

type EventTypeProps = {
	type?: Type;
} & React.HTMLAttributes<HTMLSpanElement>; // Rest props will be spread into a <span>

export const EventType: React.FC<EventTypeProps> = ({ type = "Tiyatro", className, ...rest }) => {
	return (
		<span
			className={clsx(
				"px-5 py-0.5 text-center text-sm font-bold uppercase tracking-wider text-white",
				{
					"bg-purple": type.toLowerCase() === "tiyatro",
					"bg-orange": type.toLowerCase() === "stand-up",
					"bg-red": type.toLowerCase() === "sinema",
					"bg-green": type.toLowerCase() === "konser",
					"bg-dark-pink": type.toLowerCase() === "çocuk",
				},
				className,
			)}
			{...rest}
		>
			{type}
		</span>
	);
};
