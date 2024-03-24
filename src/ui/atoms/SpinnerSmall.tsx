export const SpinnerSlow = () => {
	return (
		<>
			<div
				className="h-6 w-6 animate-spin rounded-full border-8 border-gray-300 border-t-yellow-500"
				aria-busy="true"
			></div>
		</>
	);
};
