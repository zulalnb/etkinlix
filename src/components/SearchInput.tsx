"use client";

import { useState, type FormEvent } from "react";
import { useEvent } from "@/context/EventProvider";
import { Icon } from "./Icon";

export const SearchInput = () => {
	const [title, setTitle] = useState<string>("");
	const { dispatch } = useEvent();

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		dispatch({ type: "FILTER_BY_TITLE", title });
	};

	return (
		<form
			onSubmit={onSubmit}
			className="group relative my-2 flex w-full items-center justify-items-center text-sm lg:w-40"
		>
			<label className="w-full">
				<span className="sr-only">etkinlik ara</span>
				<input
					type="text"
					name="search"
					placeholder="Etkinlik Ara"
					autoComplete="on"
					onChange={(e) => setTitle(e.target.value)}
					required
					className="h-10 w-full border border-light-gray bg-white px-4 py-2 pl-10 text-sm text-black placeholder:text-medium-gray hover:border-medium-gray focus:border-pink focus:ring-pink"
				/>
			</label>
			<div className="absolute inset-y-0 left-0">
				<button
					type="submit"
					className="inline-flex aspect-square w-10 items-center justify-center text-black group-invalid:pointer-events-none group-invalid:opacity-80"
				>
					<span className="sr-only">ara</span>
					<Icon name="search" />
				</button>
			</div>
		</form>
	);
};
