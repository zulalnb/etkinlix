"use client";

import { Checkbox } from "./Checkbox";

const locations: string[] = [
	"Maximum Uniq Hall",
	"Maximum Uniq Box",
	"Maximum Uniq Lounge",
	"Maximum Uniq Açıkhava",
	"Bahçe Fuaye",
];

const dates: string[] = ["Güncel Etkinlikler", "Geçmiş Etkinlikler"];

export const FilterModal = () => {
	return (
		<div
			role="dialog"
			aria-modal="true"
			aria-labelledby="filter-modal-title"
			className="absolute z-50 hidden group-hover:block"
		>
			<div className="space-y-5 bg-white p-8 shadow-[0_4px_50px_0_rgba(81,81,81,0.2)]">
				<h2 id="filter-modal-title" className="sr-only">
					Filtreler
				</h2>
				<fieldset>
					<legend className="mb-2 font-bold">Etkinlik Mekanı</legend>
					<div className="divide-extra-light-gray flex flex-col divide-y">
						{locations.map((loc) => (
							<Checkbox key={loc} name={loc} label={loc} />
						))}
					</div>
				</fieldset>
				<fieldset>
					<legend className="mt-4 mb-2 font-bold">Etkinlik Tarihi</legend>
					<div className="divide-extra-light-gray flex flex-col divide-y">
						{dates.map((date) => (
							<Checkbox key={date} name={date} label={date} />
						))}
					</div>
				</fieldset>
			</div>
		</div>
	);
};
