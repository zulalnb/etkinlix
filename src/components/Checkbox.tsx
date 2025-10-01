import { type LabelHTMLAttributes } from "react";

interface CheckboxProps extends LabelHTMLAttributes<HTMLLabelElement> {
	name: string;
	label: string;
}

export const Checkbox = ({ name, label, ...rest }: CheckboxProps) => {
	return (
		<label className="relative block cursor-pointer py-2.25 pl-7.5 select-none" {...rest}>
			<input
				id={name}
				name={name}
				type="checkbox"
				className="peer absolute size-0 cursor-pointer opacity-0"
			/>

			{/* Custom visual box */}
			<span
				aria-hidden="true"
				className="border-light-gray peer-checked:bg-pink peer-checked:border-dark-pink absolute top-1/2 left-0 size-5 -translate-y-1/2 border after:absolute after:top-1/2 after:left-1/2 after:hidden after:h-2 after:w-2.75 after:-translate-1/2 after:bg-white after:[mask-image:url('/assets/icons/check.svg')] after:[mask-size:contain] after:[mask-repeat:no-repeat] after:content-[''] peer-checked:after:block"
			></span>
			<span>{label}</span>
		</label>
	);
};
