export const Spinner = () => {
	return (
		<div className="flex h-36 items-center justify-center" aria-busy="true">
			<div className="h-10 w-10 animate-spin rounded-full border-8 border-gray-300 border-t-yellow-500"></div>
		</div>
	);
};
