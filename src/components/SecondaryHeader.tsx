"use client";

import clsx from "clsx";
import { useEvent } from "@/context/EventProvider";
import { FilterButton } from "./FilterButton";
import { FilterDropdown } from "./FilterDropdown";
import { ViewCalendarButton } from "./ViewCalendarButton";

export const SecondaryHeader = () => {
	const { state } = useEvent();

	return (
		<div className="bg-extra-light-gray w-full">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between">
					<div className="group">
						<FilterButton
							count={state.selectedLocations.length}
							className={clsx(state.selectedLocations.length > 0 && "text-pink")}
						/>
						<FilterDropdown />
					</div>
					<ViewCalendarButton />
				</div>
			</div>
		</div>
	);
};
