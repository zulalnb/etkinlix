import { NavLinks } from "./NavLinks";
import { SearchInput } from "./SearchInput";

export const Nav = () => {
	return (
		<nav className="relative mt-10 flex h-12 w-full lg:h-20">
			<ul className="mx-auto flex gap-5 overflow-x-scroll px-4 whitespace-nowrap md:gap-8 md:px-0">
				<NavLinks />
			</ul>
			<div className="absolute top-1/2 right-0 hidden -translate-y-1/2 pr-4 lg:block">
				<SearchInput />
			</div>
		</nav>
	);
};
