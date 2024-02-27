import { products } from "@utils/exampeData";
import { ProductList } from "@/ui/organisms/ProductList";

export default function ProductsPage() {
	return <ProductList products={products} />;
}
