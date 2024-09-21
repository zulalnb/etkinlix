import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import clsx from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	isActive?: boolean;
}

export const NavLink: FC<ButtonProps> = ({ children, isActive = false, ...rest }) => {
	return (
		<li className="inline-flex">
			<button
				type="button"
				className={clsx("inline-flex items-center border-b-4", {
					"border-pink font-bold text-pink": isActive,
					"border-transparent transition-colors hover:text-pink/80": !isActive,
				})}
				{...rest}
			>
				{children}
			</button>
		</li>
	);
};
