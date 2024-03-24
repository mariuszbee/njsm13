import { type ReviewItemFragment } from "@/gql/graphql";
import { ReviewItem } from "@/ui/atoms/ReviewItem";

export const ReviewList = ({ reviews }: { reviews: ReviewItemFragment[] }) => {
	return (
		<>
			<div className="divide-y">
				{reviews.slice(-3).map((review) => (
					<ReviewItem key={review.id} review={review} />
				))}
			</div>
		</>
	);
};
