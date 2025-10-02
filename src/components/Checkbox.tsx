import { ComponentPropsWithoutRef } from "react";

type CheckboxProps = {
	name: string;
	label: string;
	inputProps?: ComponentPropsWithoutRef<"input">;
	onChange?: () => void;
	checked?: boolean;
};

export const Checkbox = ({ name, label, inputProps, onChange, checked }: CheckboxProps) => {
	const id = `checkbox-${name}`;

	return (
		<label htmlFor={id} className="relative block cursor-pointer py-2.25 pl-7.5 select-none">
			<input
				id={id}
				name={name}
				type="checkbox"
				className="peer absolute size-0 cursor-pointer opacity-0"
				onChange={onChange}
				checked={checked}
				{...inputProps}
			/>

			{/* Custom visual box */}
			<span
				aria-hidden="true"
				className="border-light-gray peer-checked:bg-pink peer-focus:ring-dark-pink peer-checked:border-dark-pink absolute top-1/2 left-0 size-5 -translate-y-1/2 border peer-focus:ring-2 after:absolute after:top-1/2 after:left-1/2 after:hidden after:h-2 after:w-2.75 after:-translate-1/2 after:bg-white after:mask-[url(/assets/icons/check.svg)] after:mask-contain after:mask-no-repeat after:content-[''] peer-checked:after:block"
			></span>
			<span>{label}</span>
		</label>
	);
};
