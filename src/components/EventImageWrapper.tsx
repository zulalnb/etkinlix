import NextImage, { type ImageProps } from "next/image";

export const EventImageWrapper = (props: ImageProps) => {
	return (
		<div className="relative h-full w-full overflow-hidden">
			<NextImage
				{...props}
				className="object-cover"
				sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 75vw"
			/>
		</div>
	);
};
