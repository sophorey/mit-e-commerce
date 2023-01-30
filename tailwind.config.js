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
                white: 'white',
            },
            aspectRatio: {
                '3/4': '3 / 4',
                '2/3': '2 / 3',
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
                'off-white-to-white': {
                    '0%': { backgroundColor: theme('colors.off-white') },
                    '100%': { backgroundColor: theme('colors.white') },
                },
                fadein: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            }),
            animation: {
                'slide-to-top':
                    'slide-to-top 2s cubic-bezier(0.76, 0, 0.24, 1) 500ms 1 normal both',
                'off-white-to-white':
                    'off-white-to-white 1s linear 0s 1 normal forwards;',
                fadein: 'fadein 1s linear 0s 1 normal both',
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
        maxWidth: {
            gallerySide: 'calc(50% - 1.0625rem)',
        },
    },
    plugins: [],
}
