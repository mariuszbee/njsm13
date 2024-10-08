import { notFound } from "next/navigation";
import { Suspense } from "react";
import { type Metadata, type Route } from "next";
import { ProductList } from "@/ui/oragnism/ProductList";
import { getProdcutsByCategoryBySlug } from "@/api/prodcuts";
import { Spinner } from "@/ui/atoms/Spinner";
import { ProductsPagination } from "@/ui/molecules/ProductsPagination";

export const generateMetadata = async ({
	params,
}: {
	params: { category: string };
}): Promise<Metadata> => {
	const products = await getProdcutsByCategoryBySlug(params.category);
	return {
		title: products?.name,
		description: products?.description,
	};
};

export default async function CategoryProductsPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const products = await getProdcutsByCategoryBySlug(params.category);
	if (!products) {
		throw notFound();
	}
	const take = 4;
	const currentPage = Number(params.pageNumber[0]);
	const numberPages = Math.round(products.products.length / take);

	const slicedProducts = products.products.slice((currentPage - 1) * take, currentPage * take);
	return (
		<>
			<Suspense fallback={<Spinner />}>
				<article>
					<div className="pb-5">
						<h1 className="text-lg font-semibold">{products.name}</h1>
						<p className="text-sm">{products.description}</p>
					</div>
					<div>
						<ProductList products={slicedProducts} />
					</div>
					<div>
						<ProductsPagination
							numberPages={numberPages}
							currentPage={currentPage}
							url={`/categories/${params.category}` as Route}
						/>
					</div>
				</article>
			</Suspense>
		</>
	);
}
