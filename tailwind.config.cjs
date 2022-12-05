/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "croud": "url(./src/assets/images/croud.jpg)"
            },
        },
    },
    plugins: [],
}