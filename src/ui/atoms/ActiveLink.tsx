"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";

export const ActiveLink = <T extends string>({
	href,
	exact,
	children,
}: {
	href: Route<T>;
	exact: boolean;
	children: ReactNode;
}) => {
	const currentPathname = usePathname();

	const isActive = exact
		? currentPathname === href.split("?")[0]
		: currentPathname.startsWith(href) &&
			(currentPathname[href.length] === "/" || currentPathname.length === href.length);

	return (
		<Link
			href={href}
			className={clsx(
				"flex h-full items-center border-b-2 px-4 py-2 text-gray-800",
				(isActive && "border-yellow-600 text-yellow-600 hover:border-yellow-600") ||
					"border-transparent hover:border-yellow-300",
			)}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
};

// className={clsx(`brightness-90`, {brightness-100: isActive})}
//  lassName={clsx(`brightness-90`, isActive && `)}
