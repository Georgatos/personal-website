/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            scrollBehavior: {
                smooth: 'smooth',
            }
        }
    },
    variants: {
        extend: {
            scrollBehavior: ['responsive']
        }
    },
    plugins: [],
}
