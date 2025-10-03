"use client";

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
					<div className="group">
						<FilterButton
							count={state.selectedLocations.length}
							isActive={state.selectedLocations.length > 0}
						/>
						<FilterDropdown />
					</div>
					<ViewCalendarButton
						onClick={() => dispatch({ type: "VIEW_CALENDAR" })}
						isActive={state.viewCalendar}
					/>
				</div>
			</div>
		</div>
	);
};
