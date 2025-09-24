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
				className={clsx(
					"after:bg-pink relative inline-flex transition-colors after:absolute after:bottom-0 after:left-1/2 after:h-1 after:-translate-x-1/2 after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full",
					{
						"text-pink font-bold after:w-full": isActive,
						"hover:text-pink/80 after:w-0": !isActive,
					},
				)}
				aria-current={isActive ? "true" : undefined}
				{...rest}
			>
				{children}
			</button>
		</li>
	);
};
