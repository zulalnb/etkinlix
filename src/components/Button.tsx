import { type FC, type ReactNode, type ButtonHTMLAttributes } from "react";
import { Button as HeadlessButton } from "@headlessui/react";
import clsx from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
	return (
		<HeadlessButton
			className={clsx(
				"bg-pink focus-visible:outline-pink xs:px-11.25 px-7.5 py-2.5 leading-[1.75] font-bold whitespace-nowrap text-white transition-shadow hover:shadow-[inset_0_0_0_100px_rgba(0,0,0,.2)] focus-visible:outline-2 focus-visible:outline-offset-2 md:px-13.75",
				className,
			)}
			{...rest}
		>
			{children}
		</HeadlessButton>
	);
};
