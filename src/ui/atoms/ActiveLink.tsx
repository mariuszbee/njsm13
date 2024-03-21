"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Route } from "next";
import clsx from "clsx";

type ActiveLinkProps<T extends string> = {
	children: ReactNode;
	href: Route<T>;
	activeClassName?: string;
	className?: string;
	exact?: boolean;
	disabled?: boolean;
};

export const ActiveLink = <T extends string>({
	children,
	href,
	activeClassName,
	className,
	exact = true,
	disabled,
}: ActiveLinkProps<T>) => {
	const pathName = usePathname();
	const hrefPath = href.split("?")[0];

	// Dodaj activeClassName, jeśli ścieżka jest taka sama
	const isActive = exact ? pathName === href : true && pathName.startsWith(hrefPath);

	return (
		<Link
			href={href}
			className={clsx(
				className || `text-lime-600 hover:text-lime-400`,
				isActive && (activeClassName || `border-2 border-lime-600 p-2`),
			)}
			aria-current={isActive ? "page" : undefined}
			aria-disabled={disabled}
		>
			{children}
		</Link>
	);
};
