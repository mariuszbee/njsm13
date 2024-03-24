//import { products } from "@utils/exampeData";
//import { parse } from "path";
import { type Route } from "next";
import { getPaginatedProductsList, getProductsList } from "@/api/products";
import { MAX_PRODUCTS_PER_PAGE } from "@/contstants";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPage({ params }: { params: { pageNumber: string } }) {
	const page = parseInt(params.pageNumber, 10) || 1;
	const productsOnPage = MAX_PRODUCTS_PER_PAGE;
	const products = await getPaginatedProductsList(page, productsOnPage);
	const productsCount = (await getProductsList()).length;
	if (productsCount === 0) {
		return <div className="text-center">No products has been found.</div>;
	}
	return (
		<section>
			<Pagination
				href={"/products" as Route}
				actualPageNumber={page}
				productsOnPage={productsOnPage}
				productsCount={productsCount}
			/>
			<ProductList products={products} />
		</section>
	);
}
