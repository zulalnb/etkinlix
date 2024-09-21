import { type FC } from "react";
import { Icon } from "./Icon";

export const ViewCalendarButton: FC = ({ ...rest }) => {
	return (
		<button className="flex items-center py-3 text-black transition-colors hover:text-pink" {...rest}>
			<Icon name="calendar" size={22} className="mr-2" />
			<span>Takvimde Gör</span>
		</button>
	);
};
