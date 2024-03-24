"use client";
import { useFormStatus } from "react-dom";

export const SumbitButtonReview = () => {
	const formStatus = useFormStatus();

	return (
		<>
			<button
				className="mt-4 w-full max-w-md rounded-md border-4 border-transparent bg-yellow-400 py-2 font-bold text-white transition-colors hover:border-4 hover:border-yellow-600 hover:bg-yellow-500"
				type="submit"
				disabled={formStatus.pending}
			>
				{formStatus.pending ? `Processing...` : "Submit Review"}
			</button>
		</>
	);
};
