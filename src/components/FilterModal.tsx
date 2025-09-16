"use client";

import { Checkbox } from "./Checkbox";

export const FilterModal = () => {
	//drop-shadow-[4px_0_50px_0_#515151/0.2]
	return (
		<div className="absolute z-50 hidden group-hover:block">
			<div className="bg-white p-8 drop-shadow-xs">
				<p className="mb-2 font-bold">Etkinlik Mekanı</p>
				<div className="divide-extra-light-gray flex flex-col divide-y">
					<Checkbox name="check" label="Maximum Uniq Hall" />
					<Checkbox name="check" label="Maximum Uniq Box" />
					<Checkbox name="check" label="Maximum Uniq Lounge" />
					<Checkbox name="check" label="Maximum Uniq Açıkhava" />
					<Checkbox name="check" label="Bahçe Fuaye" />
				</div>
				<p className="mt-4 mb-2 font-bold">Etkinlik Tarihi</p>
				<div className="divide-extra-light-gray flex flex-col divide-y">
					<Checkbox name="check" label="Güncel Etkinlikler" />
					<Checkbox name="check" label="Geçmiş Etkinlikler" />
				</div>
			</div>
		</div>
	);
};
