import { FilterButton } from "./FilterButton";
import { ViewCalendarButton } from "./ViewCalendarButton";

export const SecondaryHeader = () => {
	return (
		<div className="w-full bg-extra-light-gray">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between py-3">
					<FilterButton />
					<ViewCalendarButton />
				</div>
			</div>
		</div>
	);
};
