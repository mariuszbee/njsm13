import Link from "next/link";
import { ProductItemsDescription } from "@/ui/atoms/ProdcutItemDescription";
import { ProductItemsImages } from "@/ui/atoms/ProductItemsImage";
import { type ProductsListItemFragment } from "@/gql/graphql";

type ProductItemListProps = {
	product: ProductsListItemFragment;
};

export const ProductItemList = ({ product }: ProductItemListProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					{product.images[0] && (
						<ProductItemsImages
							src={product.images[0].url}
							alt={product.images[0].alt}
							width={product.images[0].width}
							height={product.images[0].height}
						/>
					)}
					<ProductItemsDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
