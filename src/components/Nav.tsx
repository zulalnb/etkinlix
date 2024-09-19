import { NavLinks } from "./NavLinks";
import { SearchInput } from "./SearchInput";

export const Nav = () => {
	return (
		<nav className="relative mt-10 flex h-12 w-full lg:h-20">
			<ul className="scrollbar-hide mx-auto flex gap-5 overflow-x-scroll whitespace-nowrap px-4 md:gap-8 md:px-0">
				<NavLinks />
			</ul>
			<div className="absolute right-0 top-1/2 hidden -translate-y-1/2 pr-4 lg:block">
				<SearchInput />
			</div>
		</nav>
	);
};
