module.exports = {
    purge: [],
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
                }
            }
        },
    },
    variants: {
        extend: {
            width: ['hover', 'focus'],
            scale: ['group-hover']
        },
    },
    plugins: [],
}
