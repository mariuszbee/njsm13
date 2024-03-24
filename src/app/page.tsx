import { Suspense } from "react";
import { getProductsList } from "@/api/prodcuts";
import { ProductList } from "@/ui/oragnism/ProductList";
import { Spinner } from "@/ui/atoms/Spinner";
import { CollectionList } from "@/ui/oragnism/CollectionList";

export default async function HomePage() {
	const products = await getProductsList(4);

	return (
		<section>
			<Suspense fallback={<Spinner />}>
				<CollectionList />
			</Suspense>
			<Suspense fallback={<Spinner />}>
				<ProductList products={products} />
			</Suspense>
		</section>
	);
}
