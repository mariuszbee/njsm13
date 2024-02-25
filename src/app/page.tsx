import { products } from "../../utils/exampeData";
import { ProductList } from "@/ui/organisms/ProductList";

export default function Home() {
	return <ProductList products={products} />;
}
