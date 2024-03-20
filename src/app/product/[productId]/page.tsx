import { Suspense } from "react";
import { getProduct } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";

// export const generateStaticParams = async () => {
// 	const products = await getProductsList();
// 	return products.map((product) => ({
// 		productId: product.id,
// 	}));
// };

export const generateMetadata = async ({ params }: { params: { productId: string } }) => {
	const product = await getProduct(params.productId);
	return {
		title: product.name,
		description: product.description,
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProduct(params.productId);
	return (
		<>
			<article className="max-w-sm">
				<h1>{product.name}</h1>
				<ProductCoverImage {...product.coverImage} />
				<ProductItemDescription product={product} />
				<p>{product.description}</p>
			</article>
			<aside className="mt-12">
				<Suspense fallback={"Ładowanie..."}>
					<h2 className="py-6">Sugerowane produkty:</h2>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
}
