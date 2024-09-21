"use client";
import { useEvent } from "@/context/EventProvider";
import { NavLink } from "./NavLink";
import { Type } from "@/types/Event";

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
			<NavLink onClick={() => filterByType("Tiyatro")} isActive={state.activeFilter === "Tiyatro"}>
				Tiyatro
			</NavLink>
			<NavLink onClick={() => filterByType("Konser")} isActive={state.activeFilter === "Konser"}>
				Konser
			</NavLink>
			<NavLink onClick={() => filterByType("Stand-up")} isActive={state.activeFilter === "Stand-up"}>
				Stand Up
			</NavLink>
			<NavLink onClick={() => filterByType("Sinema")} isActive={state.activeFilter === "Sinema"}>
				Sinema
			</NavLink>
			<NavLink onClick={() => filterByType("Çocuk")} isActive={state.activeFilter === "Çocuk"}>
				Çocuk
			</NavLink>
		</>
	);
};
