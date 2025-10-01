"use client";

import { Checkbox } from "./Checkbox";

type FilterGroup = {
	id: string;
	legend: string;
	options: string[];
};

const filterGroups: FilterGroup[] = [
	{
		id: "locations",
		legend: "Etkinlik Mekanı",
		options: [
			"Maximum Uniq Hall",
			"Maximum Uniq Box",
			"Maximum Uniq Lounge",
			"Maximum Uniq Açıkhava",
			"Bahçe Fuaye",
		],
	},
	{
		id: "dates",
		legend: "Etkinlik Tarihi",
		options: ["Güncel Etkinlikler", "Geçmiş Etkinlikler"],
	},
];

export const FilterDropdown = () => {
	return (
		<div
			id="filter-dropdown"
			role="dialog"
			aria-labelledby="filter-dropdown-title"
			className="absolute z-50 hidden space-y-5 bg-white p-8 shadow-[0_4px_50px_0_rgba(81,81,81,0.2)] group-focus-within:block group-hover:block"
		>
			<h2 id="filter-dropdown-title" className="sr-only">
				Filtreler
			</h2>
			{filterGroups.map((group) => (
				<fieldset key={group.id}>
					<legend className="mb-2 font-bold">{group.legend}</legend>
					<div className="divide-extra-light-gray flex flex-col divide-y">
						{group.options.map((opt) => (
							<Checkbox key={opt} name={opt} label={opt} />
						))}
					</div>
				</fieldset>
			))}
		</div>
	);
};
