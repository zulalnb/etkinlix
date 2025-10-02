"use client";

import { useEvent } from "@/context/EventProvider";
import { Checkbox } from "./Checkbox";
import locations from "@/data/locations.json";

type Option = {
	id: number;
	name: string;
};

type FilterGroup = {
	id: string;
	legend: string;
	options: Option[];
};

const filterGroups: FilterGroup[] = [
	{
		id: "locations",
		legend: "Etkinlik Mekanı",
		options: locations,
	},
	{
		id: "dates",
		legend: "Etkinlik Tarihi",
		options: [
			{ id: 1, name: "Güncel Etkinlikler" },
			{ id: 2, name: "Geçmiş Etkinlikler" },
		],
	},
];

export const FilterDropdown = () => {
	const { state, dispatch } = useEvent();

	return (
		<div
			id="filter-dropdown"
			role="dialog"
			aria-labelledby="filter-dropdown-title"
			className="absolute z-50 hidden space-y-5 bg-white p-8 shadow-[0_4px_50px_0_rgba(81,81,81,0.2)] group-hover:block"
		>
			<h2 id="filter-dropdown-title" className="sr-only">
				Filtreler
			</h2>
			{filterGroups.map((group) => (
				<fieldset key={group.id}>
					<legend className="mb-2 font-bold">{group.legend}</legend>
					<div className="divide-extra-light-gray flex flex-col divide-y">
						{group.options.map((opt) => {
							return (
								<Checkbox
									key={opt.id}
									name={opt.name}
									label={opt.name}
									{...(group.id === "locations" && {
										checked: state.selectedLocations.some((selected) => selected.id === opt.id),
										onChange: () => dispatch({ type: "TOGGLE_LOCATION", id: opt.id }),
									})}
								/>
							);
						})}
					</div>
				</fieldset>
			))}
		</div>
	);
};
