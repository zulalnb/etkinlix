"use client";

import { useEffect, useState, type ChangeEvent } from "react";
import { useEvent } from "@/context/EventProvider";
import { Icon } from "./Icon";

export const SearchInput = () => {
	const [title, setTitle] = useState<string>("");
	const { dispatch, state } = useEvent();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setTitle(value);

		if (!value.trim()) {
			dispatch({ type: "FILTER_ALL" });
		} else {
			dispatch({ type: "FILTER_BY_TITLE", title: value });
		}
	};

	useEffect(() => {
		if (state.activeFilter && title.length > 0) {
			setTitle("");
		}
	}, [state.activeFilter]);

	return (
		<div className="group relative my-2 flex w-full items-center justify-items-center text-sm lg:w-50">
			<div className="absolute inset-y-0 left-0 inline-flex aspect-square h-full items-center justify-center text-black group-invalid:pointer-events-none group-invalid:opacity-80">
				<Icon name="search" />
			</div>
			<label className="w-full">
				<span className="sr-only">etkinlik ara</span>
				<input
					type="text"
					name="search"
					placeholder="Etkinlik Ara"
					autoComplete="on"
					onChange={handleChange}
					value={title}
					required
					className="border-light-gray placeholder:text-medium-gray hover:border-medium-gray focus:border-pink focus:ring-pink focus-visible:outline-pink h-12 w-full border bg-white px-4 py-2 pl-12 text-sm/6 text-black focus-visible:outline-1"
				/>
			</label>
		</div>
	);
};
