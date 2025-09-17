"use client";

import { useState, type ChangeEvent } from "react";
import { useEvent } from "@/context/EventProvider";
import { Icon } from "./Icon";

export const SearchInput = () => {
	const [title, setTitle] = useState<string>("");
	const { dispatch } = useEvent();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setTitle(value);

		if (!value.trim()) {
			dispatch({ type: "FILTER_ALL" });
		} else {
			dispatch({ type: "FILTER_BY_TITLE", title: value });
		}
	};

	return (
		<form
			className="group relative my-2 flex w-full items-center justify-items-center text-sm lg:w-50"
			onSubmit={(e) => e.preventDefault()}
		>
			<div className="absolute inset-y-0 left-0">
				<button
					type="button"
					className="inline-flex aspect-square w-10 items-center justify-center text-black group-invalid:pointer-events-none group-invalid:opacity-80"
				>
					<span className="sr-only">ara</span>
					<Icon name="search" />
				</button>
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
					className="border-light-gray placeholder:text-medium-gray hover:border-medium-gray focus:border-pink focus:ring-pink focus-visible:outline-pink h-10 w-full border bg-white px-4 py-2 pl-10 text-sm text-black focus-visible:outline-1"
				/>
			</label>
		</form>
	);
};
