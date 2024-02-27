import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//import Link from "next/link";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Products",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body className={inter.className}>
				<nav>
					<ul className="mt-4 flex justify-center space-x-4">
						<li>
							<ActiveLink href="/">Homepage</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/products">Products</ActiveLink>
						</li>
					</ul>
				</nav>
				<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl	lg:max-w-7xl">
					{children}
				</section>
				<footer>
					<p className="text-center text-gray-600">© {new Date().getFullYear()} bmDEV</p>
				</footer>
			</body>
		</html>
	);
}
