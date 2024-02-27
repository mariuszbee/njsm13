"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

export const ActiveLink = ({ href, children }: { href: string; children: ReactNode }) => {
	const pathName = usePathname();
	const isActive = pathName === href;

	return (
		<Link
			href={href}
			className={clsx(
				`text-lime-600 hover:text-lime-400`,
				isActive && `border-2 border-lime-600 p-2`,
			)}
		>
			{children}
		</Link>
	);
};
