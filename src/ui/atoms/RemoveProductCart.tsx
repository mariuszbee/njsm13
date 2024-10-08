"use client";

import { useTransition } from "react";
import { Trash2 } from "lucide-react";
import { removeProductCartAction } from "@/api/actions";
import { SpinnerSlow } from "@/ui/atoms/SpinnerSmall";

export const RemoveProductCart = ({ cartId, productId }: { cartId: string; productId: string }) => {
	const [isPending, startTransition] = useTransition();

	return (
		<>
			<button
				className="text-red-900 transition-colors duration-300 hover:text-red-500 disabled:cursor-wait disabled:text-gray-400"
				disabled={isPending}
				type="submit"
				onClick={() => {
					startTransition(async () => {
						await removeProductCartAction(cartId, productId);
					});
				}}
			>
				{isPending ? <SpinnerSlow /> : <Trash2 />}
			</button>
		</>
	);
};
