import { NavLinks } from "./NavLinks";
import { SearchInput } from "./SearchInput";

export const Nav = () => {
	return (
		<nav aria-label="Etkinlik kategorileri" className="relative mt-10 flex h-20 w-full items-end">
			<ul className="mx-auto flex h-13.25 gap-5 overflow-x-scroll px-4 whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] md:gap-8 md:px-0 [&::-webkit-scrollbar]:hidden">
				<NavLinks />
			</ul>
			<div className="absolute top-1/2 right-0 hidden -translate-y-1/2 pr-4 lg:block">
				<SearchInput />
			</div>
		</nav>
	);
};
