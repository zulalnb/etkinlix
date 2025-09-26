import { Logo } from "./Logo";
import { Nav } from "./Nav";

export const Header = () => {
	return (
		<header className="pt-8">
			<div className="mx-auto w-full md:container">
				<div className="flex flex-col items-center">
					<Logo />
					<h1 className="mt-10 text-center text-[2rem]/tight font-bold">ETKİNLİX</h1>
					<Nav />
				</div>
			</div>
		</header>
	);
};
