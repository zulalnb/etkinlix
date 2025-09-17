"use client";
import { useEvent } from "@/context/EventProvider";
import { NavLink } from "./NavLink";
import { Type } from "@/types/Event";

const pathnames: Type[] = ["Tiyatro", "Konser", "Stand-up", "Sinema", "Çocuk"];

export const NavLinks = () => {
	const { state, dispatch } = useEvent();
	const filterAll = () => {
		dispatch({ type: "FILTER_ALL" });
	};

	const filterByType = (eventType: Type) => {
		dispatch({ type: "FILTER_BY_TYPE", eventType });
	};
	return (
		<>
			<NavLink onClick={filterAll} isActive={state.activeFilter === "all"}>
				Tüm Etkinlikler
			</NavLink>
			{pathnames.map((pathname) => (
				<NavLink
					key={pathname}
					onClick={() => filterByType(pathname)}
					isActive={state.activeFilter === pathname}
				>
					{pathname}
				</NavLink>
			))}
		</>
	);
};
