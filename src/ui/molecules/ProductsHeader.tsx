import { ProdcutsSortSelect } from "@/ui/atoms/ProductsSortSelect";

export const ProductsHeader = ({ pageNumber }: { pageNumber: string[] }) => {
	return (
		<>
			<div className="mb-5 flex justify-between">
				<div className="flex items-center ">
					<h1 className="text-center text-lg font-semibold">Page {pageNumber}</h1>
				</div>
				<ProdcutsSortSelect />
			</div>
		</>
	);
};
