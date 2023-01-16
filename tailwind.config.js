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
            aspectRatio: {
                '3/4': '3/4',
                '2/3': '2/3',
            },
            keyframes: ({ theme }) => ({
                'slide-to-top': {
                    '0%': {
                        transform: `translateY(calc(${theme(
                            'fontSize.header'
                        )} * 4 * ${theme('lineHeight.header')}))`,
                    },
                    '25%': {
                        transform: `translateY(calc(${theme(
                            'fontSize.header'
                        )} * 3 * ${theme('lineHeight.header')}))`,
                    },
                    '50%': {
                        transform: `translateY(calc(${theme(
                            'fontSize.header'
                        )} * 2 * ${theme('lineHeight.header')}))`,
                    },
                    '75%': {
                        transform: `translateY(calc(${theme(
                            'fontSize.header'
                        )} * 1 * ${theme('lineHeight.header')}))`,
                    },
                    '100%': {
                        transform: 'translateY(0)',
                    },
                },
            }),
            animation: {
                'slide-to-top':
                    'slide-to-top 2s cubic-bezier(0.76, 0, 0.24, 1) 1s 1 normal both',
            },
        },
        fontFamily: {
            header: [
                'NeueHaasGrotesk-Roman',
                'Helvetica',
                'Arial',
                'sans-serif',
            ],
            subheader: [
                'RecklessNeue-Book',
                'Marvel',
                'Helvetica',
                'Arial',
                'sans-serif',
            ],
            title: [
                'NeueHaasGrotesk-Medium',
                'Lato',
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
