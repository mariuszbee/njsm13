//import { products } from "@utils/exampeData";
import { getPaginatedProductsList, getProductsList } from "@/api/products";
import { MAX_PRODUCTS_PER_PAGE } from "@/contstants";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPage({ params }: { params: { pageNumber: number } }) {
	const productsOnPage = MAX_PRODUCTS_PER_PAGE;
	const products = await getPaginatedProductsList(params.pageNumber, productsOnPage);
	const productsCount = (await getProductsList()).length;
	const totalPages = Math.ceil(productsCount / productsOnPage);
	return (
		<section>
			<Pagination numberOfPages={totalPages} />
			<ProductList products={products} />
			<Pagination numberOfPages={totalPages} />
		</section>
	);
}
