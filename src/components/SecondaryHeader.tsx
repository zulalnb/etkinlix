import { FilterButton } from "./FilterButton";
import { FilterModal } from "./FilterModal";
import { ViewCalendarButton } from "./ViewCalendarButton";

export const SecondaryHeader = () => {
	return (
		<div className="w-full bg-extra-light-gray">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between">
					<div className="group">
						<FilterButton />
						<FilterModal />
					</div>
					<ViewCalendarButton />
				</div>
			</div>
		</div>
	);
};
