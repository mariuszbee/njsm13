"use client";

import { useOptimistic } from "react";
import { changeProductCardQuantityAction } from "@/api/actions";

export const CartItemQuantity = ({
	cartId,
	productId,
	quantity,
}: {
	cartId: string;
	productId: string;
	quantity: number;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_currentOptimisticQuntity, newQuntity: number) => {
			return newQuntity;
		},
	);

	return (
		<form className="flex items-center justify-center gap-2">
			<div className="flex items-center">
				<button
					type="submit"
					data-testid="decrement"
					disabled={optimisticQuantity === 1}
					className="disabled: h-8 w-8 rounded-full  shadow-lg brightness-90 transition-transform duration-200 hover:scale-95 hover:brightness-100 disabled:cursor-not-allowed"
					formAction={async () => {
						setOptimisticQuantity(optimisticQuantity - 1);
						await changeProductCardQuantityAction(cartId, productId, optimisticQuantity - 1);
					}}
				>
					-
				</button>
			</div>
			<div className="mx-2" data-testid="quantity">
				{optimisticQuantity}
			</div>
			<div className="flex items-center">
				<button
					type="submit"
					data-testid="increment"
					className="disabled: h-8 w-8 rounded-full  shadow-lg brightness-90 transition-transform duration-200 hover:scale-95 hover:brightness-100 disabled:cursor-wait"
					formAction={async () => {
						setOptimisticQuantity(optimisticQuantity + 1);
						await changeProductCardQuantityAction(cartId, productId, optimisticQuantity + 1);
					}}
				>
					+
				</button>
			</div>
		</form>
	);
};
