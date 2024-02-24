import { type ProductItemType } from "@/ui/types";
import { priceFormatter } from "@/ui/utils";

type ProductItemDescriptionProps = {
	product: ProductItemType;
};

export const ProductItemDescription = ({
	product: { name, category, price },
}: ProductItemDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
				<p className="text-sm text-gray-500">
					<span className="sr-only">Kategoria:</span> {category}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena:</span> {priceFormatter(price / 100)}
			</p>
		</div>
	);
};
