const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: ['active'],
            animation: {
                bounce: 'bounce 5s infinite',
                'bounce-before': 'bounce 3s infinite',
            },
            // keyframes: {
            //     bounce: {
            //         '0%, 100%': {
            //             transform: 'translateY(-25%)',
            //             animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
            //         }
            //     }
            // }
        },
        colors: {
            transparent: 'transparent',
            ksaa: '#20b2aa',
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
        },
    },

    variants: {
        extend: {},
    },
    plugins: [],
}
