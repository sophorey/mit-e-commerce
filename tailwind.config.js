/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            margin: {
                '1ch': '1ch',
            },
            lineHeight: {
                header: '0.85',
            },
            letterSpacing: {
                header: '-0.04em',
            },
            colors: {
                'off-white': '#F2EFE6',
            },
        },
        fontFamily: {
            header: [
                'NeueHaasGrotesk-Roman',
                'Helvetica',
                'Arial',
                'sans-serif',
            ],
        },
        fontSize: {
            header: '10vmin',
        },
    },
    plugins: [],
}
