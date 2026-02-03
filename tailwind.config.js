/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                "black-shade": "rgba(0, 0, 0, .5)",
                green: "#3ea265",
                red: "#ef5753",
            },
            fontFamily: {
                sans: [
                    "Nunito",
                    "system-ui",
                    "BlinkMacSystemFont",
                    "-apple-system",
                    "Segoe UI",
                    "Roboto",
                    "Oxygen",
                    "Ubuntu",
                    "Cantarell",
                    "Fira Sans",
                    "Droid Sans",
                    "Helvetica Neue",
                    "sans-serif",
                ],
                serif: [
                    "Merriweather",
                    "Constantia",
                    "Lucida Bright",
                    "Lucidabright",
                    "Lucida Serif",
                    "Lucida",
                    "DejaVu Serif",
                    "Bitstream Vera Serif",
                    "Liberation Serif",
                    "Georgia",
                    "serif",
                ],
                mono: [
                    "Menlo",
                    "Monaco",
                    "Consolas",
                    "Liberation Mono",
                    "Courier New",
                    "monospace",
                ],
            },
            screens: {
                sm: "576px",
                md: "576px",
                lg: "768px",
                xl: "950px",
            },
        },
    },
    plugins: [],
};
