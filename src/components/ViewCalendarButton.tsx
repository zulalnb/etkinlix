import { type FC } from "react";
import { Icon } from "./Icon";

export const ViewCalendarButton: FC = ({ ...rest }) => {
	return (
		<button
			type="button"
			className="hover:text-pink flex items-center py-3 text-black transition-colors"
			{...rest}
		>
			<Icon name="calendar" size={22} className="mr-2" />
			<span>Takvimde Gör</span>
		</button>
	);
};
