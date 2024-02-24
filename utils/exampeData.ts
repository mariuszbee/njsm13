import { type ProductItemType } from "@/ui/types";

export const products: ProductItemType[] = [
	{
		id: "1",
		name: "Kubek",
		category: "Gadżety",
		price: 2999,
		coverImage: {
			src: "/image-01.png",
			alt: "Kubek",
		},
	},
	{
		id: "2",
		name: "Plecak",
		category: "Akcesoria",
		price: 19999,
		coverImage: {
			src: "/image-02.png",
			alt: "Plecak",
		},
	},
	{
		id: "3",
		name: "Koszulka",
		category: "Odzież",
		price: 7999,
		coverImage: {
			src: "/image-03.png",
			alt: "Koszulka",
		},
	},
	{
		id: "4",
		name: "Czapeczka",
		category: "Akcesoria",
		price: 9999,
		coverImage: {
			src: "/image-04.png",
			alt: "Kurtka",
		},
	},
];
