import { type FC, type ReactNode, type ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
	return (
		<button
			type="button"
			className={clsx(
				"bg-pink px-11 py-2.5 font-bold text-white transition-colors hover:bg-pink/85 md:px-14",
				className,
			)}
			{...rest}
		>
			{children}
		</button>
	);
};
