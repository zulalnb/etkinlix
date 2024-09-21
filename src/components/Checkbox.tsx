interface CheckboxProps<TName extends string> {
	name: TName;
	label: string;
}
export const Checkbox = <TName extends string>({ name, label }: CheckboxProps<TName>) => {
	return (
		<label className="inline-flex items-center gap-x-2 py-3">
			<input
				name={name}
				type="checkbox"
				className="border-light-gray text-pink shadow-sm focus:border-dark-pink focus:ring focus:ring-dark-pink focus:ring-opacity-50 focus:ring-offset-0"
			/>
			<span>{label}</span>
		</label>
	);
};
