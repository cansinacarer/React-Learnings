/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--bg-color)",
				text: "var(--text-color)",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
