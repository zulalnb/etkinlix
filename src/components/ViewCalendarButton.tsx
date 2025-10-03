import { ButtonHTMLAttributes, type FC } from "react";
import clsx from "clsx";
import { Icon } from "./Icon";

interface FilterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isActive?: boolean;
}

export const ViewCalendarButton: FC<FilterButtonProps> = ({ isActive, className, ...rest }) => {
	return (
		<button
			type="button"
			className={clsx(
				"hover:text-pink flex items-center py-3 text-black transition-colors",
				isActive && "text-pink",
				className,
			)}
			{...rest}
		>
			<Icon name="calendar" size={22} className="mr-2" />
			<span>Takvimde Gör</span>
		</button>
	);
};
