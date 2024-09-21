"use client";

import { Checkbox } from "./Checkbox";

export const FilterModal = () => {
	//drop-shadow-[4px_0_50px_0_#515151/0.2]
	return (
		<div className="absolute z-50 hidden group-hover:block">
			<div className="bg-white p-8 drop-shadow">
				<p className="mb-2 font-bold">Etkinlik Mekanı</p>
				<div className="flex flex-col divide-y divide-extra-light-gray">
					<Checkbox name="check" label="Maximum Uniq Hall" />
					<Checkbox name="check" label="Maximum Uniq Box" />
					<Checkbox name="check" label="Maximum Uniq Lounge" />
					<Checkbox name="check" label="Maximum Uniq Açıkhava" />
					<Checkbox name="check" label="Bahçe Fuaye" />
				</div>
				<p className="mb-2 mt-4 font-bold">Etkinlik Tarihi</p>
				<div className="flex flex-col divide-y divide-extra-light-gray">
					<Checkbox name="check" label="Güncel Etkinlikler" />
					<Checkbox name="check" label="Geçmiş Etkinlikler" />
				</div>
			</div>
		</div>
	);
};
