import type { Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";

export const NavBar = () => {
	return (
		<nav>
			<ul className="mt-4 flex justify-center space-x-4">
				<li>
					<ActiveLink
						href="/"
						activeClassName="border-2 border-lime-600 p-2"
						className="text-lime-600 hover:text-lime-400"
					>
						Home
					</ActiveLink>
				</li>
				<li>
					<ActiveLink
						exact={false}
						href={"/products" as Route}
						activeClassName="border-2 border-lime-600 p-2"
						className="text-lime-600 hover:text-lime-400"
					>
						All
					</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};
