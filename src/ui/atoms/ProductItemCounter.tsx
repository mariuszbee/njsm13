"use client";

import { type ReactNode, useState } from "react";

export const ProductItemCounter = ({ children }: { children: ReactNode }) => {
	const [count, setCount] = useState(0);
	return (
		<>
			<div className="flex max-w-10 items-center justify-center">
				<button
					onClick={() => setCount((count) => (count > 0 ? count - 1 : (count = 0)))}
					className="rounded-lg bg-gray-200 px-2 py-1"
				>
					-
				</button>
				<input readOnly className="px-2" value={count} min={0}></input>
				<button
					onClick={() => setCount((count) => count + 1)}
					className="rounded-lg bg-gray-200 px-2 py-1"
				>
					+
				</button>
			</div>
			{count % 2 === 0 && children}
		</>
	);
};
