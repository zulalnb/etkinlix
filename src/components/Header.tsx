import { Logo } from "./Logo";
import { Nav } from "./Nav";

export const Header = () => {
	return (
		<header className="py-8">
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col items-center">
					<Logo />
					<h1 className="mt-10 text-center text-4xl font-bold">ETKİNLİX</h1>
					<Nav />
				</div>
			</div>
		</header>
	);
};
