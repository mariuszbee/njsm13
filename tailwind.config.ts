import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				slideRight: "slide-from-right 200ms ease-in-out",
				slideLeft: "slide-from-left 300ms ease-in-out",
				spinSlow: "spin 2s linear infinite",
			},
			keyframes: {
				["slide-from-right"]: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0%)" },
				},
				["slide-from-left"]: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(100%)" },
				},
			},
		},
	},
	plugins: [],
};
export default config;
