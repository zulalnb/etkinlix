import Link from "next/link";
import clsx from "clsx";

export const NavLink = ({ href, children }: { href: string; children: JSX.Element | string }) => {
	const isActive = false;
	return (
		<li className="inline-flex">
			<Link
				href={href}
				className={clsx("inline-flex items-center border-b-4 border-transparent", {
					"border-pink font-bold text-pink": isActive,
					"transition-colors hover:text-pink/80": !isActive,
				})}
			>
				{children}
			</Link>
		</li>
	);
};
