"use client";

import { useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const formStatus = useFormStatus();
	const spinnerBuyItem = () => {
		return (
			<>
				<div className="flex w-24 items-center justify-center gap-2" aria-busy="true">
					Adding
					<div className="h-6 w-6 animate-spin rounded-full border-8 border-gray-300 border-t-yellow-500"></div>
				</div>
			</>
		);
	};

	return (
		<button
			className="disabled: mt-2 h-10 rounded-lg  bg-yellow-500 p-2 shadow-lg brightness-90 transition-transform duration-200 hover:scale-95 hover:brightness-100 disabled:cursor-wait"
			type="submit"
			disabled={formStatus.pending}
			data-testid="add-to-cart-button"
		>
			{formStatus.pending ? spinnerBuyItem() : "Add to cart"}
		</button>
	);
};
