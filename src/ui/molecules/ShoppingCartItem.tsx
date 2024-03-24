import NextLink from "next/link";
import { CartItemQuantity } from "@/ui/atoms/CartItemQuantity";
import { ProductItemsImages } from "@/ui/atoms/ProductItemsImage";
import { RemoveProductCart } from "@/ui/atoms/RemoveProductCart";
import { type CartFindOrCreateMutation } from "@/gql/graphql";
import { formatPrice } from "@/utils/utils";

export const ShoppingCartItem = ({
	item,
	cartId,
	isModal = false,
}: {
	item: CartFindOrCreateMutation["cartFindOrCreate"]["items"];
	isModal: boolean;
	cartId: string;
}) => {
	if (!item[0]?.product) {
		return null;
	}

	return (
		<>
			<li key={item[0]?.product.id} className="flex gap-5 border-t py-4">
				<div className="w-52">
					{item[0]?.product.images[0] && (
						<ProductItemsImages
							src={item[0]?.product.images[0]?.url}
							alt={item[0]?.product.images[0]?.alt}
							width={item[0]?.product.images[0]?.width}
							height={item[0]?.product.images[0]?.height}
						/>
					)}
				</div>
				<div className="flex w-full">
					<div className="flex w-full ">
						<div className="flex grow flex-col gap-2">
							<NextLink
								href={`/product/${item[0].product.id}`}
								className="text-xl font-semibold transition-colors duration-200 hover:text-yellow-600 hover:underline"
							>
								{item[0]?.product.name}
							</NextLink>
							<p className="text-sm text-yellow-400">{item[0]?.product.categories[0]?.name}</p>
							<span className="text-lg font-medium">
								{formatPrice(item[0]?.product.price / 100)}
							</span>
							{/* {isModal && (
								<>
									<div className="flex items-center justify-between">
										<CartItemQuantity
											cartId={cartId}
											productId={item[0]?.product.id}
											quantity={item[0]?.quantity}
										/>
										<RemoveProductCart cartId={cartId} productId={item[0]?.product.id} />
									</div>
								</>
							)} */}
						</div>
					</div>
					<div className="min-w flex items-center justify-center gap-4">
						{!isModal && (
							<>
								<div className="ml-2 flex items-center ">
									<div className="min-w-32">
										<CartItemQuantity
											cartId={cartId}
											productId={item[0]?.product.id}
											quantity={item[0]?.quantity}
										/>
									</div>
								</div>
								<div className="flex">
									<RemoveProductCart cartId={cartId} productId={item[0]?.product.id} />
								</div>
							</>
						)}
					</div>
				</div>
			</li>
		</>
	);
};
