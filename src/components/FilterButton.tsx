import { type FC, type ReactNode, type ButtonHTMLAttributes } from "react";
import { Icon } from "./Icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

export const FilterButton: FC<ButtonProps> = ({ ...rest }) => {
	return (
		<button className="flex items-center text-black transition-colors hover:text-pink" {...rest}>
			<Icon name="menu" size={20} />
			<span>Filtreler</span>
		</button>
	);
};
