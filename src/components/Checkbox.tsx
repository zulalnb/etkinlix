import { Checkbox as HeadlessCheckbox, Field, Label } from "@headlessui/react";
import clsx from "clsx";

type CheckboxProps = {
	name: string;
	label: string;
	onChange?: (checked: boolean) => void;
	checked?: boolean;
	disabled?: boolean;
	className?: string;
};

export const Checkbox = ({ name, label, onChange, checked = false, disabled, className }: CheckboxProps) => {
	return (
		<Field
			disabled={disabled}
			className={clsx(
				"relative block py-2.25 pl-7.5 select-none",
				"data-disabled:cursor-not-allowed data-disabled:opacity-70",
				className,
			)}
		>
			<HeadlessCheckbox
				name={name}
				className={clsx(
					"group border-light-gray data-checked:bg-pink data-focus:ring-dark-pink data-checked:border-dark-pink absolute top-1/2 left-0 size-5 -translate-y-1/2 border data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus:ring-2",
					disabled && "pointer-events-none",
				)}
				checked={checked}
				disabled={disabled}
				onChange={(nextChecked) => onChange?.(nextChecked)}
			>
				<span
					aria-hidden="true"
					className="absolute top-1/2 left-1/2 h-2 w-2.75 -translate-1/2 bg-white [mask-image:url(/assets/icons/check.svg)] mask-contain mask-center mask-no-repeat opacity-0 transition-opacity group-data-checked:opacity-100"
				/>
			</HeadlessCheckbox>

			<Label className="cursor-pointer data-disabled:cursor-not-allowed">{label}</Label>
		</Field>
	);
};
