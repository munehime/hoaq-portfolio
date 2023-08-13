import plugin from "tailwindcss/plugin";

/** @type {import("tailwindcss").Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                hoaq: "#b179b4",
            },
            fontFamily: {
                karla: "Karla",
                "fira-mono": "'Fira Mono'",
            },
            height: {
                4.5: "1.125rem",
            },
            width: {
                4.5: "1.125rem",
            },
        },
    },
    plugins: [
        plugin(function ({ addBase, addComponents, addUtilities, theme }) {
            const newUtilities = {
                ".horizontal-tb": {
                    writingMode: "horizontal-tb",
                },
                ".vertical-rl": {
                    writingMode: "vertical-rl",
                },
                ".vertical-lr": {
                    writingMode: "vertical-lr",
                },
            };
            
            addUtilities(newUtilities);
        }),
    ],
};
