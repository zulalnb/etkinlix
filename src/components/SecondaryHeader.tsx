import { FilterButton } from "./FilterButton";
import { FilterDropdown } from "./FilterDropdown";
import { ViewCalendarButton } from "./ViewCalendarButton";

export const SecondaryHeader = () => {
	return (
		<div className="bg-extra-light-gray w-full">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between">
					<div className="group">
						<FilterButton />
						<FilterDropdown />
					</div>
					<ViewCalendarButton />
				</div>
			</div>
		</div>
	);
};
