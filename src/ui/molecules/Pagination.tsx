import type { Route } from "next";
import { useSearchParams } from "next/navigation";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

type PaginationProps<T extends string> = {
	href: Route<T>;
	actualPageNumber: number;
	productsOnPage: number;
	productsCount: number;
};

export const Pagination = <T extends string>({
	href,
	actualPageNumber,
	productsOnPage,
	productsCount,
}: PaginationProps<T>) => {
	const searchParams = useSearchParams();
	const totalPages = Math.ceil(productsCount / productsOnPage);

	const isFirstPage = actualPageNumber === 1;
	const isLastPage = actualPageNumber === totalPages;
	const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

	const getRoute = (pageNumber: number) => {
		const params = new URLSearchParams(searchParams).toString();
		const path = `${href}/${pageNumber}`;
		return (params ? `${path}?${params}` : path) as Route;
	};
	return (
		<nav>
			<div aria-label="pagination" className="my-4 flex justify-center space-x-4">
				<ActiveLink href={getRoute(actualPageNumber - 1)} disabled={isFirstPage}>
					{`<`}
				</ActiveLink>
				{pages.map((pageNumber) => (
					<ActiveLink
						key={pageNumber}
						href={getRoute(pageNumber)}
						activeClassName="border-2 border-lime-600 p-2"
						className="text-lime-600 hover:text-lime-400"
					>
						{pageNumber}
					</ActiveLink>
				))}
				<ActiveLink href={getRoute(actualPageNumber + 1)} disabled={isLastPage}>
					{`>`}
				</ActiveLink>
			</div>
		</nav>
	);
};
