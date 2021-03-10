const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#95c623',
                    DEFAULT: '#3fa547'
                },
                secondary: {
                    DEFAULT: '#e33333'
                },
                orange: colors.orange
            }
        },
    },
    variants: {
        extend: {
            width: ['hover', 'focus'],
            scale: ['group-hover'],
            display: ['group-hover']
        },
    },
    plugins: [],
}
