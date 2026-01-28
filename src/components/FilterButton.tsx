import { type FC, ComponentPropsWithoutRef } from "react";
import { PopoverButton } from "@headlessui/react";
import clsx from "clsx";
import { Icon } from "./Icon";

interface FilterButtonProps extends ComponentPropsWithoutRef<typeof PopoverButton> {
	count?: number;
	isActive?: boolean;
}

export const FilterButton: FC<FilterButtonProps> = ({ count, isActive, className, ...rest }) => {
	return (
		<PopoverButton
			className={clsx(
				"hover:text-pink group-data-open:text-pink relative flex items-center py-3 text-black transition-colors",
				isActive && "text-pink",
				className,
			)}
			{...rest}
		>
			{count !== undefined && count > 0 && (
				<span className="bg-pink absolute -top-0.5 -right-4 inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 py-0 text-xs font-medium text-white">
					{count}
				</span>
			)}

			<Icon name="menu" size={20} className="mr-2" />
			<span>Filtreler</span>
		</PopoverButton>
	);
};
