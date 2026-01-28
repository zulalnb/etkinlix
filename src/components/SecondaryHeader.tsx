"use client";

import { Popover } from "@headlessui/react";
import { useEvent } from "@/context/EventProvider";
import { FilterButton } from "./FilterButton";
import { FilterDropdown } from "./FilterDropdown";
import { ViewCalendarButton } from "./ViewCalendarButton";

export const SecondaryHeader = () => {
	const { state, dispatch } = useEvent();

	return (
		<div className="bg-extra-light-gray w-full">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between">
					<Popover className="group relative">
						<FilterButton
							count={state.selectedLocations.length}
							isActive={state.selectedLocations.length > 0}
						/>
						<FilterDropdown />
					</Popover>
					<ViewCalendarButton
						onClick={() => dispatch({ type: "VIEW_CALENDAR" })}
						isActive={state.viewCalendar}
					/>
				</div>
			</div>
		</div>
	);
};
