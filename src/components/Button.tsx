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
				"whitespace-nowrap bg-pink px-11 py-2.5 font-bold text-white transition-colors hover:shadow-[inset_0_0_0_100px_rgba(0,0,0,.2)] md:px-14",
				className,
			)}
			{...rest}
		>
			{children}
		</button>
	);
};
