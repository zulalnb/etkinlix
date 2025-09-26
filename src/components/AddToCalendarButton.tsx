import { type ButtonHTMLAttributes, type FC } from "react";
import clsx from "clsx";
import { Icon } from "./Icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isAdded?: boolean;
}

export const AddToCalendarButton: FC<ButtonProps> = ({ isAdded = false, className, ...rest }) => {
	return (
		<button
			className={clsx("group flex min-w-40 items-center whitespace-nowrap text-black", className)}
			{...rest}
		>
			<Icon
				name={isAdded ? "confirm" : "add"}
				size={22}
				className={clsx("xs:mr-2.5 mr-1 shrink-0", {
					"group-hover:text-pink transition-colors": !isAdded,
					"text-pink": isAdded,
				})}
			/>
			<span>{`${isAdded ? "Takvime Eklendi" : "Takvime Ekle"}`}</span>
		</button>
	);
};
