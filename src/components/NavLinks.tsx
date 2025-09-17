"use client";
import { useEvent } from "@/context/EventProvider";
import { NavLink } from "./NavLink";
import { EventType } from "@/types/Event";

const pathnames: EventType[] = ["Tiyatro", "Konser", "Stand-up", "Sinema", "Çocuk"];

export const NavLinks = () => {
	const { state, dispatch } = useEvent();
	const filterAll = () => {
		dispatch({ type: "FILTER_ALL" });
	};

	const filterByType = (eventType: EventType) => {
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
