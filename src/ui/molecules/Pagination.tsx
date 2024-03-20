import type { Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

type PaginationProps = {
	numberOfPages: number;
};

export const Pagination = ({ numberOfPages }: PaginationProps) => {
	const pages = new Array(numberOfPages).fill(0);

	return (
		<nav>
			<ul aria-label="pagination" className="my-4 flex justify-center space-x-4">
				{pages.map((_, index) => {
					return (
						<ul key={index}>
							<ActiveLink exact={false} href={`/products/${index + 1}` as Route}>
								{String(index + 1)}
							</ActiveLink>
						</ul>
					);
				})}
			</ul>
		</nav>
	);
};
