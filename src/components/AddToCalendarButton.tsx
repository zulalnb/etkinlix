import { type ButtonHTMLAttributes, type FC } from "react";
import clsx from "clsx";
import { Icon } from "./Icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isAdded?: boolean;
}

export const AddToCalendarButton: FC<ButtonProps> = ({ isAdded = false, ...rest }) => {
	return (
		<button className="group flex items-center text-black" {...rest}>
			<Icon
				name={isAdded ? "confirm" : "add"}
				size={22}
				className={clsx("mr-2", {
					"transition-colors group-hover:text-pink": !isAdded,
					"text-pink": isAdded,
				})}
			/>
			<span>{`${isAdded ? "Takvime Eklendi" : "Takvime Ekle"}`}</span>
		</button>
	);
};
