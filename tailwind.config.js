/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                'fade-down': {
                    '0%': { opacity: 0, transform: 'translateY(-30px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
                'fade-up': {
                    '0%': { opacity: 0, transform: 'translateY(30px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
                'fade-in': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                }
            },
            animation: {
                'fade-down': 'fade-down 0.8s ease forwards',
                'fade-up': 'fade-up 0.8s ease forwards',
                'fade-in': 'fade-in 0.8s ease forwards',
            }
        },
    },
    plugins: [],
}
