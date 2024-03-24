import { type FormHTMLAttributes } from "react";
import { InputReviewForm } from "@/ui/atoms/InputReviewForm";
import { RatingReviewForm } from "@/ui/atoms/RatingReviewForm";
import { SumbitButtonReview } from "@/ui/atoms/SubmitButtonReviewForm";
import { reviewItemsForm } from "@/utils/review";

export const ReviewForm = ({
	formAction,
	productId,
}: {
	formAction: FormHTMLAttributes<HTMLFormElement>["action"];
	productId: string;
}) => {
	return (
		<>
			<form data-testid="add-review-form" action={formAction}>
				<input type="hidden" name="productId" value={productId} />
				{reviewItemsForm.map((item) => {
					if (item.type === "rating") {
						return <RatingReviewForm key={item.name} />;
					}
					return (
						<InputReviewForm
							key={item.name}
							label={item.label}
							name={item.name}
							type={item.type}
							required={item.required}
							placeholder={item.placeholder}
						/>
					);
				})}
				<SumbitButtonReview />
			</form>
		</>
	);
};
