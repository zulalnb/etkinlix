import { type FC } from "react";
import { Icon } from "./Icon";

export const FilterButton: FC = ({ ...rest }) => {
	return (
		<button
			className="flex items-center py-3 text-black transition-colors hover:text-pink group-hover:text-pink"
			{...rest}
		>
			<Icon name="menu" size={20} className="mr-2" />
			<span>Filtreler</span>
		</button>
	);
};
